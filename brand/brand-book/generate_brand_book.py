from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, Color
from reportlab.lib.pagesizes import landscape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.lib.units import inch
from pathlib import Path
import math


OUT = Path('/Users/durjoy/Documents/Thane/output/pdf/thane-reeve-brand-book.pdf')
W, H = 960, 540

INK = HexColor('#161814')
INK_2 = HexColor('#343632')
PAPER = HexColor('#F2EFE7')
PAPER_WARM = HexColor('#E8E2D6')
PAPER_LIGHT = HexColor('#F7F4ED')
BRASS = HexColor('#836634')
BRASS_LIGHT = HexColor('#A98B55')
BRASS_DARK = HexColor('#5B431F')
WHITE = HexColor('#FFFFFF')
MUTED = HexColor('#6B6B63')
LINE = Color(22/255, 24/255, 20/255, alpha=0.16)

FONT_DIR = Path('/System/Library/Fonts/Supplemental')
pdfmetrics.registerFont(TTFont('BrandDisplay', str(FONT_DIR / 'BigCaslon.ttf')))
pdfmetrics.registerFont(TTFont('BrandSerif', str(FONT_DIR / 'Georgia.ttf')))
pdfmetrics.registerFont(TTFont('BrandSerifItalic', str(FONT_DIR / 'Georgia Italic.ttf')))
pdfmetrics.registerFont(TTFont('BrandSerifBold', str(FONT_DIR / 'Georgia Bold.ttf')))
pdfmetrics.registerFont(TTFont('BrandSerifBoldItalic', str(FONT_DIR / 'Georgia Bold Italic.ttf')))
pdfmetrics.registerFont(TTFont('BrandSans', str(FONT_DIR / 'Arial.ttf')))
pdfmetrics.registerFont(TTFont('BrandSansBold', str(FONT_DIR / 'Arial Bold.ttf')))
pdfmetrics.registerFont(TTFont('BrandSansItalic', str(FONT_DIR / 'Arial Italic.ttf')))
pdfmetrics.registerFont(TTFont('BrandSansBoldItalic', str(FONT_DIR / 'Arial Bold Italic.ttf')))
pdfmetrics.registerFont(TTFont('BrandSansNarrow', str(FONT_DIR / 'Arial Narrow.ttf')))
pdfmetrics.registerFontFamily('BrandSerif', normal='BrandSerif', bold='BrandSerifBold',
                              italic='BrandSerifItalic', boldItalic='BrandSerifBoldItalic')
pdfmetrics.registerFontFamily('BrandSans', normal='BrandSans', bold='BrandSansBold',
                              italic='BrandSansItalic', boldItalic='BrandSansBoldItalic')
pdfmetrics.registerFontFamily('BrandDisplay', normal='BrandDisplay', bold='BrandDisplay',
                              italic='BrandSerifItalic', boldItalic='BrandSerifBoldItalic')


def set_alpha(c, a):
    return Color(c.red, c.green, c.blue, alpha=a)


def draw_tracking(c, text, x, y, font='BrandSans', size=9, tracking=1.8,
                  color=INK, align='left'):
    text = str(text)
    widths = [stringWidth(ch, font, size) for ch in text]
    total = sum(widths) + max(0, len(text) - 1) * tracking
    if align == 'center':
        x -= total / 2
    elif align == 'right':
        x -= total
    c.setFont(font, size)
    c.setFillColor(color)
    cursor = x
    for ch, width in zip(text, widths):
        c.drawString(cursor, y, ch)
        cursor += width + tracking
    return total


def p(c, text, x, y_top, width, font='BrandSerif', size=14, leading=None,
      color=INK, align=TA_LEFT, space_after=0, max_h=400):
    if leading is None:
        leading = size * 1.38
    style = ParagraphStyle(
        name='p', fontName=font, fontSize=size, leading=leading,
        textColor=color, alignment=align, spaceAfter=space_after,
        allowWidows=0, allowOrphans=0,
    )
    para = Paragraph(text, style)
    _, h = para.wrap(width, max_h)
    para.drawOn(c, x, y_top - h)
    return h


def rule(c, x1, y1, x2, y2, color=LINE, width=0.7):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)


def survey(c, opacity=0.26, dark=False):
    col = set_alpha(PAPER if dark else BRASS, opacity)
    c.setStrokeColor(col)
    c.setLineWidth(0.75)
    paths = [
        # Keep the editorial title band clear. The cadastral device should
        # frame information, never run through it.
        [(906, 540), (906, 372), (960, 372)],
        [(600, 70), (720, 136), (840, 110), (980, 196)],
        [(842, 540), (842, 486), (906, 486)],
    ]
    for pts in paths:
        path = c.beginPath()
        path.moveTo(*pts[0])
        for pt in pts[1:]:
            path.lineTo(*pt)
        c.drawPath(path)
    c.setFillColor(set_alpha(BRASS_LIGHT, min(0.75, opacity * 2.5)))
    for x, y in [(842, 486), (720, 136)]:
        c.circle(x, y, 3.2, fill=1, stroke=0)


def ampersand(c, x, y, size=32, tone=BRASS, sealed=False):
    c.setFont('BrandSerifItalic', size)
    c.setFillColor(tone)
    c.drawCentredString(x, y, '&')
    if sealed:
        c.setStrokeColor(BRASS)
        c.setLineWidth(max(1.0, size / 24))
        c.line(x - size * .22, y - size * .10, x + size * .22, y - size * .10)


def wordmark(c, x, y, size=24, tone=INK, stacked=False, tagline=False, align='left'):
    c.setFillColor(tone)
    if stacked:
        draw_tracking(c, 'THANE', x, y + size * 1.25, font='BrandDisplay', size=size,
                      tracking=size * .13, color=tone, align='center')
        ampersand(c, x, y + size * .28, size=size * 1.05, tone=BRASS)
        draw_tracking(c, 'REEVE', x, y - size * .65, font='BrandDisplay', size=size,
                      tracking=size * .13, color=tone, align='center')
        if tagline:
            draw_tracking(c, 'REAL PROPERTY', x, y - size * 1.55, font='BrandSans',
                          size=size * .26, tracking=size * .10,
                          color=set_alpha(tone, .65), align='center')
        return
    left = x
    thane_w = sum(stringWidth(ch, 'BrandDisplay', size) for ch in 'THANE') + 4 * size * .13
    reeve_w = sum(stringWidth(ch, 'BrandDisplay', size) for ch in 'REEVE') + 4 * size * .13
    amp_w = size * .85
    gap = size * .42
    total = thane_w + reeve_w + amp_w + gap * 2
    if align == 'center':
        left -= total / 2
    elif align == 'right':
        left -= total
    draw_tracking(c, 'THANE', left, y, font='BrandDisplay', size=size,
                  tracking=size * .13, color=tone)
    ampersand(c, left + thane_w + gap + amp_w / 2, y - size * .10,
              size=size * 1.08, tone=BRASS)
    draw_tracking(c, 'REEVE', left + thane_w + gap * 2 + amp_w, y,
                  font='BrandDisplay', size=size, tracking=size * .13, color=tone)
    if tagline:
        draw_tracking(c, 'REAL PROPERTY', left + total / 2, y - size * .75,
                      font='BrandSans', size=size * .26, tracking=size * .11,
                      color=set_alpha(tone, .64), align='center')


def pill(c, text, x, y, fill=PAPER_WARM, color=INK, border=LINE, size=8):
    w = stringWidth(text.upper(), 'BrandSans', size) + 28
    c.setFillColor(fill)
    c.setStrokeColor(border)
    c.roundRect(x, y, w, 22, 1.5, fill=1, stroke=1)
    draw_tracking(c, text.upper(), x + 14, y + 7, font='BrandSans', size=size,
                  tracking=1.0, color=color)
    return w


def shadow_box(c, x, y, w, h, fill=PAPER_LIGHT, stroke=LINE, shadow=True):
    if shadow:
        c.setFillColor(Color(0, 0, 0, alpha=.075))
        c.roundRect(x + 5, y - 5, w, h, 2, fill=1, stroke=0)
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(.7)
    c.roundRect(x, y, w, h, 2, fill=1, stroke=1)


def section_label(c, text, x, y, dark=False):
    draw_tracking(c, text.upper(), x, y, font='BrandSans', size=8.3,
                  tracking=1.7, color=BRASS_LIGHT if dark else BRASS)


def title(c, text, x, y, width=760, size=38, dark=False, italic_word=None):
    color = PAPER if dark else INK
    return p(c, text, x, y, width, font='BrandDisplay', size=size,
             leading=size * 1.12, color=color)


def number_stat(c, x, y, value, label, note=None, dark=False):
    col = PAPER if dark else INK
    c.setFillColor(col)
    c.setFont('BrandDisplay', 30)
    c.drawString(x, y, value)
    draw_tracking(c, label.upper(), x, y - 22, size=7.5, tracking=1.35,
                  color=BRASS_LIGHT if dark else BRASS)
    if note:
        p(c, note, x, y - 35, 170, font='BrandSerifItalic', size=9.5,
          leading=13, color=set_alpha(col, .65))


class Book:
    def __init__(self, path):
        self.c = canvas.Canvas(str(path), pagesize=(W, H), pageCompression=1)
        self.page = 0
        self.title = 'Thane & Reeve Brand Book and Creative Brief'
        self.c.setTitle(self.title)
        self.c.setAuthor('Thane & Reeve')
        self.c.setCreator('Thane & Reeve Brand Studio')
        self.c.setSubject('Brand strategy, visual identity, messaging, and collateral system')
        self.c.setKeywords('Thane & Reeve, brand standards, creative brief, real estate, collateral')

    def begin(self, section, label, dark=False, paper_warm=False, footer=True):
        if self.page:
            self.c.showPage()
        self.page += 1
        bg = INK if dark else (PAPER_WARM if paper_warm else PAPER)
        self.c.setFillColor(bg)
        self.c.rect(0, 0, W, H, fill=1, stroke=0)
        if footer:
            self.c.setStrokeColor(set_alpha(PAPER if dark else INK, .13))
            self.c.setLineWidth(.6)
            self.c.line(48, 31, 912, 31)
            draw_tracking(self.c, 'THANE & REEVE', 48, 17, font='BrandSans',
                          size=6.7, tracking=1.45,
                          color=set_alpha(PAPER if dark else INK, .55))
            draw_tracking(self.c, f'{section.upper()}  /  {label.upper()}', 480, 17,
                          font='BrandSans', size=6.7, tracking=1.25,
                          color=set_alpha(PAPER if dark else INK, .48), align='center')
            draw_tracking(self.c, f'{self.page:02d}', 912, 17, font='BrandSans',
                          size=6.7, tracking=1.0,
                          color=set_alpha(PAPER if dark else INK, .55), align='right')
        return self.c

    def finish(self):
        self.c.save()


b = Book(OUT)
c = b.c


# 01 - Cover
b.begin('Foundation', 'Brand book', dark=True, footer=False)
survey(c, opacity=.32, dark=True)
wordmark(c, 70, 430, size=33, tone=PAPER, tagline=True)
section_label(c, 'Brand book + creative brief', 70, 306, dark=True)
p(c, 'Ownership and stewardship,<br/>held under one accountable mark.', 70, 278, 640,
  font='BrandDisplay', size=45, leading=50, color=PAPER)
rule(c, 70, 145, 890, 145, color=set_alpha(PAPER, .18), width=.8)
draw_tracking(c, 'IDENTITY  /  MESSAGING  /  COLLATERAL  /  PRODUCTION', 70, 118,
              size=8, tracking=1.9, color=set_alpha(PAPER, .68))
draw_tracking(c, 'FOUNDING EDITION  ·  AUGUST 2026', 890, 75, size=7.5,
              tracking=1.7, color=BRASS_LIGHT, align='right')


# 02 - Brand at a glance
b.begin('Foundation', 'At a glance', paper_warm=True)
section_label(c, '01 / The brand', 54, 486)
title(c, 'A firm built to hold both sides of the promise.', 54, 450, 720, 38)
p(c, 'Thane & Reeve is a Boston-based real estate owner-operator organized around Capital, Development, and Management. The brand must feel like the institution the firm intends to become: measured, literate, accountable, and built for a long hold.', 54, 354, 620, size=14, leading=21, color=INK_2)
for i, (v, lab, note) in enumerate([
    ('$82.75M', 'Deployed', 'Across development, preservation, and operations'),
    ('192', 'Doors and keys', 'Portfolio-wide operating experience'),
    ('3', 'Disciplines', 'Capital, Development, Management'),
    ('1', 'Accountable roof', 'Ownership and stewardship remain coupled'),
]):
    number_stat(c, 54 + i * 220, 230, v, lab, note)
rule(c, 54, 116, 906, 116, color=set_alpha(INK, .14))
p(c, '<i>Land held. Land managed.</i>', 54, 94, 400, font='BrandSerifItalic', size=20, color=BRASS)
draw_tracking(c, 'SINGLE-MINDED PROPOSITION', 906, 91, size=7.3, tracking=1.6, color=MUTED, align='right')


# 03 - Creative brief
b.begin('Strategy', 'Creative brief')
section_label(c, '02 / Creative brief', 54, 486)
title(c, 'Make vertical integration feel like a covenant, not a capability list.', 54, 450, 820, 36)
cols = [
    ('Business context', 'A newly formalized real estate platform with a twenty-year operating record, seeking credibility with family offices, high-net-worth principals, institutional partners, and property owners.'),
    ('Communication objective', 'Position Thane & Reeve as the small, senior, aligned alternative to fragmented real estate firms - a partner that acquires only what it is willing to operate.'),
    ('Desired response', '“These are principals, not intermediaries. Their judgment is independent, their accountability durable, and resident dignity is part of the operating case.”'),
]
for i, (hd, body) in enumerate(cols):
    x = 54 + i * 292
    rule(c, x, 300, x + 252, 300, color=BRASS, width=1.2)
    p(c, hd, x, 284, 252, font='BrandDisplay', size=19, leading=23)
    p(c, body, x, 238, 252, font='BrandSerif', size=11.5, leading=17, color=INK_2)
shadow_box(c, 54, 73, 852, 72, fill=INK, stroke=INK, shadow=False)
section_label(c, 'Mandate', 78, 116, dark=True)
p(c, 'Every expression should reward attention, resist hype, show the work, and make resident dignity visible.', 178, 124, 685,
  font='BrandSerifItalic', size=17, leading=22, color=PAPER)


# 04 - Positioning
b.begin('Strategy', 'Positioning', dark=True)
survey(c, opacity=.18, dark=True)
section_label(c, '03 / Positioning', 54, 486, dark=True)
title(c, 'The Owner-Steward', 54, 450, 600, 46, dark=True)
p(c, 'Neither a fund brand, a developer brand, nor a property management brand. The point of difference is the refusal to separate principal judgment from operating consequence.', 54, 364, 610, size=15, leading=22, color=set_alpha(PAPER, .82))
positions = [
    ('Category', 'Integrated real estate owner-operator'),
    ('Frame of reference', 'Boutique investment and operating firm'),
    ('Point of difference', 'Ownership and operations remain under one roof'),
    ('Resident covenant', 'Safe, well-maintained homes; responsive management; residents treated with dignity'),
    ('Time horizon', 'A generational firm; every asset underwritten for patient or permanent ownership'),
]
for i, (lab, val) in enumerate(positions):
    y = 260 - i * 42
    draw_tracking(c, lab.upper(), 54, y + 4, size=7.2, tracking=1.4, color=BRASS_LIGHT)
    p(c, val, 236, y + 12, 630, font='BrandSerif', size=13, leading=17, color=PAPER)
    rule(c, 54, y - 10, 906, y - 10, color=set_alpha(PAPER, .11))


# 05 - Audience
b.begin('Strategy', 'Audience', paper_warm=True)
section_label(c, '04 / Audience', 54, 486)
title(c, 'Write to experienced principals. Never perform for a crowd.', 54, 450, 852, 32)
audiences = [
    ('Family offices', 'Need direct access, visible alignment, and judgment they can diligence.'),
    ('HNW principals', 'Need readable terms, a human-sized relationship, and no institutional theater.'),
    ('Institutional capital', 'Need governance, reporting discipline, execution history, and role clarity.'),
    ('Property owners', 'Need discretion, speed, certainty, and a principal-to-principal conversation.'),
]
for i, (hd, body) in enumerate(audiences):
    x = 54 + (i % 2) * 426
    y = 242 - (i // 2) * 126
    shadow_box(c, x, y, 392, 108, fill=PAPER_LIGHT, stroke=set_alpha(INK, .10), shadow=False)
    ampersand(c, x + 28, y + 68, size=25, tone=BRASS, sealed=True)
    p(c, hd, x + 64, y + 88, 298, font='BrandDisplay', size=19, leading=23)
    p(c, body, x + 64, y + 55, 298, font='BrandSerif', size=10.5, leading=15, color=INK_2)
draw_tracking(c, 'THE OPERATING COVENANT', 54, 80, size=7.3, tracking=1.55, color=BRASS)
p(c, 'Investors should see the resident promise clearly: safe homes, responsive management, and dignified treatment.', 228, 91, 678, font='BrandSerifItalic', size=14.2, leading=19, color=INK)


# 06 - Name and story
b.begin('Foundation', 'The name')
section_label(c, '05 / The name', 54, 486)
wordmark(c, 480, 425, size=34, tone=INK, tagline=True, align='center')
rule(c, 54, 354, 906, 354, color=set_alpha(INK, .14))
story = [
    ('THANE', 'The principal who holds land - earned through service, defended across generations.'),
    ('&', 'The promise that ownership and stewardship never get uncoupled.'),
    ('REEVE', 'The professional steward who runs the estate - balancing books, obligations, and long-term value.'),
]
for i, (hd, body) in enumerate(story):
    x = 54 + i * 292
    if hd == '&':
        ampersand(c, x + 126, 286, size=56, tone=BRASS, sealed=True)
    else:
        draw_tracking(c, hd, x + 126, 274, font='BrandDisplay', size=25, tracking=3.2, color=INK, align='center')
    p(c, body, x, 216, 252, font='BrandSerif', size=11.5, leading=17, color=INK_2, align=TA_CENTER)
draw_tracking(c, 'BRAND COVENANT', 480, 104, size=7.5, tracking=1.8, color=BRASS, align='center')
p(c, '<i>The ampersand is not a flourish. It is the entire business.</i>', 160, 88, 640,
  font='BrandSerifItalic', size=19, leading=24, color=INK, align=TA_CENTER)


# 07 - Messaging architecture
b.begin('Messaging', 'Architecture', dark=True)
section_label(c, '06 / Messaging architecture', 54, 486, dark=True)
title(c, 'One promise. Three proofs. Five behaviors.', 54, 450, 790, 38, dark=True)
shadow_box(c, 54, 308, 852, 74, fill=set_alpha(PAPER, .06), stroke=set_alpha(PAPER, .18), shadow=False)
draw_tracking(c, 'CORE PROMISE', 78, 351, size=7.3, tracking=1.6, color=BRASS_LIGHT)
p(c, 'Ownership and operations stay under one accountable roof.', 224, 364, 620, font='BrandDisplay', size=22, leading=26, color=PAPER)
proofs = [('Capital', 'Deal-by-deal; GP money in every transaction.'), ('Development', 'Entitlement-first; build what we intend to hold.'), ('Management', 'Everything we own, we run - with safe, responsive, dignified resident service.')]
for i, (hd, body) in enumerate(proofs):
    x = 54 + i * 292
    section_label(c, f'PROOF {i+1:02d}', x, 266, dark=True)
    p(c, hd, x, 246, 252, font='BrandDisplay', size=21, leading=25, color=PAPER)
    p(c, body, x, 210, 252, font='BrandSerif', size=11.1, leading=16, color=set_alpha(PAPER, .76))
behaviors = ['Underwrite to hold', 'Walk from weak deals', 'Report plainly', 'Answer directly', 'Serve residents well']
for i, item in enumerate(behaviors):
    x = 54 + i * 170
    c.setFillColor(BRASS)
    c.circle(x + 6, 107, 4, fill=1, stroke=0)
    p(c, item, x + 20, 118, 145, font='BrandSerifItalic', size=10.8, leading=14, color=PAPER)


# 08 - Voice
b.begin('Messaging', 'Voice')
section_label(c, '07 / Voice', 54, 486)
title(c, 'Measured. Direct. Literate. Earned.', 54, 450, 760, 39)
voice = [
    ('Measured', 'State the fact, then let the fact work.', 'Use “$37.75M institutional financing.”', '“Market-leading capital solutions.”'),
    ('Direct', 'Prefer principal language to sales language.', 'Use “We will read it.”', '“Submit your opportunity today.”'),
    ('Literate', 'Sound informed, never ornate for its own sake.', 'Use precise historical and operating context.', 'Borrowed luxury vocabulary.'),
    ('Earned', 'Every assertion should carry evidence.', 'Use dates, approvals, dollars, doors, and roles.', 'Unsupported superlatives.'),
]
for i, (hd, rule_text, do, dont) in enumerate(voice):
    x = 54 + (i % 2) * 426
    y = 309 - (i // 2) * 132
    p(c, hd, x, y + 64, 380, font='BrandDisplay', size=20, leading=24)
    p(c, rule_text, x, y + 36, 380, font='BrandSerif', size=10.5, leading=14, color=INK_2)
    p(c, '<font color="#836634">DO</font>  ' + do, x, y + 10, 380, font='BrandSans', size=8.5, leading=12, color=INK_2)
    p(c, '<font color="#6B6B63">AVOID</font>  ' + dont, x, y - 12, 380, font='BrandSans', size=8.5, leading=12, color=MUTED)
    rule(c, x, y - 28, x + 380, y - 28, color=set_alpha(INK, .12))


# 09 - Copy toolkit
b.begin('Messaging', 'Copy toolkit', paper_warm=True)
section_label(c, '08 / Copy toolkit', 54, 486)
title(c, 'Language ready for market.', 54, 450, 690, 40)
copy_blocks = [
    ('Primary tagline', '<i>Land held. Land managed.</i>'),
    ('Positioning line', 'A real estate firm that refuses to separate ownership from operations.'),
    ('Thirty-word description', 'Thane & Reeve is a Boston-based owner-operator acquiring, developing, and managing real property across the Northeast with principal capital in every transaction.'),
    ('Investor CTA', 'Request an introduction to Thane & Reeve Capital.'),
    ('Owner CTA', 'Submit a property. We will read it.'),
    ('Proof line', '$82.75M deployed. 192 doors and keys. Two principals accountable for every transaction.'),
]
for i, (lab, body) in enumerate(copy_blocks):
    col = i % 2
    row = i // 2
    x = 54 + col * 426
    y = 356 - row * 94
    draw_tracking(c, lab.upper(), x, y + 24, size=7.2, tracking=1.45, color=BRASS)
    p(c, body, x, y + 8, 380, font='BrandSerifItalic' if '<i>' in body else 'BrandSerif', size=12, leading=17, color=INK)


# 10 - Logo system
b.begin('Identity', 'Logo system')
section_label(c, '09 / Logo system', 54, 486)
title(c, 'The wordmark is a nameplate. The ampersand is a seal.', 54, 450, 820, 36)
shadow_box(c, 54, 282, 538, 112, fill=PAPER_LIGHT, stroke=set_alpha(INK, .12), shadow=False)
wordmark(c, 323, 345, size=25, tone=INK, tagline=True, align='center')
section_label(c, 'Primary horizontal lockup', 54, 262)
shadow_box(c, 626, 282, 280, 112, fill=INK, stroke=INK, shadow=False)
wordmark(c, 766, 344, size=18, tone=PAPER, stacked=True, tagline=True)
section_label(c, 'Stacked lockup', 626, 262)
shadow_box(c, 54, 92, 280, 124, fill=PAPER_WARM, stroke=set_alpha(INK, .12), shadow=False)
ampersand(c, 194, 138, size=54, tone=BRASS, sealed=True)
section_label(c, 'Sealed ampersand', 54, 72)
shadow_box(c, 368, 92, 538, 124, fill=PAPER_LIGHT, stroke=set_alpha(INK, .12), shadow=False)
draw_tracking(c, 'CLEARSPACE', 392, 180, size=7.2, tracking=1.5, color=BRASS)
p(c, 'Minimum clearspace: one ampersand width on all sides.<br/>Approved pairings: Brass on Paper; Light Brass on Ink.<br/>Never place Brass on Brass. Never outline, bevel, shadow, compress, or improvise the seal.', 392, 160, 470, font='BrandSans', size=8.9, leading=13.2, color=INK_2)


# 11 - Color
b.begin('Identity', 'Color')
section_label(c, '10 / Color', 54, 486)
title(c, 'Paper. Ink. Brass.', 54, 450, 600, 42)
swatches = [
    ('PAPER', PAPER, '#F2EFE7', 'Primary field / 60%'),
    ('INK', INK, '#161814', 'Type and authority / 30%'),
    ('BRASS', BRASS, '#836634', 'Accent only / never a field'),
    ('WARM PAPER', PAPER_WARM, '#E8E2D6', 'Secondary field'),
    ('LIGHT BRASS', BRASS_LIGHT, '#A98B55', 'Seal on Ink / dark fields'),
    ('DARK BRASS', BRASS_DARK, '#5B431F', 'Print depth / hover state'),
]
for i, (name, col, hx, use) in enumerate(swatches):
    x = 54 + (i % 3) * 292
    y = 262 - (i // 3) * 142
    c.setFillColor(col)
    c.setStrokeColor(set_alpha(INK, .16))
    c.setLineWidth(.7)
    c.rect(x, y, 252, 102, fill=1, stroke=1)
    text_col = PAPER if col in [INK, BRASS_DARK] else INK
    draw_tracking(c, name, x + 18, y + 70, size=7.5, tracking=1.5, color=text_col)
    p(c, hx, x + 18, y + 48, 110, font='BrandSansBold', size=9, leading=12, color=text_col)
    p(c, use, x + 18, y + 28, 205, font='BrandSerifItalic', size=9.2, leading=12, color=set_alpha(text_col, .78))
draw_tracking(c, 'PRINT NOTE', 54, 62, size=7.2, tracking=1.6, color=BRASS)
p(c, 'Brass is an accent, never a background field behind the ampersand. Match it by physical drawdown before offset or foil production; screen values are not press approvals.', 160, 72, 746, font='BrandSerif', size=10.2, leading=14.5, color=INK_2)


# 12 - Typography
b.begin('Identity', 'Typography', paper_warm=True)
section_label(c, '11 / Typography', 54, 486)
title(c, 'Editorial authority, operating clarity.', 54, 450, 720, 39)
draw_tracking(c, 'PRIMARY DISPLAY', 54, 354, size=7.4, tracking=1.6, color=BRASS)
p(c, 'Fraunces', 54, 340, 380, font='BrandDisplay', size=46, leading=50, color=INK)
p(c, 'Headlines, names, pull quotes, numerals. Use optical size and italics deliberately; never set body copy in display weights.', 54, 286, 380, font='BrandSerif', size=10.5, leading=15, color=INK_2)
draw_tracking(c, 'PRIMARY SANS', 500, 354, size=7.4, tracking=1.6, color=BRASS)
draw_tracking(c, 'INTER TIGHT', 500, 304, font='BrandSansNarrow', size=32, tracking=1.0, color=INK)
p(c, 'Navigation, labels, tables, legal, and data. Use light-to-regular weights with controlled tracking.', 500, 286, 390, font='BrandSerif', size=10.5, leading=15, color=INK_2)
rule(c, 54, 216, 906, 216, color=set_alpha(INK, .14))
draw_tracking(c, 'THE AMPERSAND', 54, 188, size=7.4, tracking=1.6, color=BRASS)
ampersand(c, 128, 112, size=72, tone=BRASS, sealed=True)
p(c, '<b>EB Garamond Italic</b><br/>Reserved for the ampersand. The glyph should feel inherited, not ornamental.', 210, 174, 320, font='BrandSerif', size=12, leading=18, color=INK)
p(c, '<b>Recommended hierarchy</b><br/>Display 44-72 pt / Section 24-36 pt / Body 10.5-12 pt / Utility 7.5-9 pt with 140-220 tracking.', 560, 174, 330, font='BrandSerif', size=11, leading=17, color=INK_2)


# 13 - Graphic language
b.begin('Identity', 'Graphic language', dark=True)
survey(c, opacity=.34, dark=True)
section_label(c, '12 / Graphic language', 54, 486, dark=True)
title(c, 'Survey evidence, not decorative geometry.', 54, 450, 760, 38, dark=True)
devices = [
    ('Cadastral line', 'Boundary paths imply title, stewardship, and accountable control.'),
    ('Survey node', 'A point of decision or handoff; use sparingly, never as confetti.'),
    ('Editorial rule', 'Hairlines organize evidence and create institutional rhythm.'),
    ('Plate notation', 'Roman numerals, sections, dates, and captions make work feel documented.'),
    ('Paper grain', 'Barely visible texture adds material warmth. Maximum 4% opacity.'),
]
for i, (hd, body) in enumerate(devices):
    y = 340 - i * 56
    c.setFillColor(BRASS_LIGHT)
    c.circle(61, y + 8, 3.5, fill=1, stroke=0)
    p(c, hd, 82, y + 18, 180, font='BrandDisplay', size=15, leading=18, color=PAPER)
    p(c, body, 288, y + 17, 548, font='BrandSerif', size=10.8, leading=15, color=set_alpha(PAPER, .74))
    rule(c, 82, y - 10, 906, y - 10, color=set_alpha(PAPER, .11))
draw_tracking(c, 'AVOID', 54, 70, size=7.3, tracking=1.6, color=BRASS_LIGHT)
p(c, 'Generic luxury motifs, gold gradients, architectural wireframes without meaning, crest imagery, and motion that repeats indefinitely.', 142, 80, 764, font='BrandSerifItalic', size=11.5, leading=16, color=PAPER)


# 14 - Photography and digital expression
b.begin('Identity', 'Photography + digital')
section_label(c, '13 / Photography + digital', 54, 486)
title(c, 'Show the work at the scale it was lived.', 54, 450, 740, 38)
# Art-direction plate. These are tonal crop studies, not substitute stock art.
shadow_box(c, 54, 112, 520, 270, fill=INK, stroke=INK, shadow=False)
crop_x = [70, 236, 402]
crop_labels = ['01 / ENTRY', '02 / MATERIAL', '03 / OPERATIONS']
for i, x in enumerate(crop_x):
    c.setFillColor([HexColor('#2B2E2A'), HexColor('#343732'), HexColor('#242724')][i])
    c.rect(x, 144, 150, 204, fill=1, stroke=0)
    draw_tracking(c, crop_labels[i], x + 12, 326, size=5.4, tracking=1.0, color=set_alpha(PAPER, .72))
# Entry crop: threshold, jamb, and deep interior.
c.setFillColor(HexColor('#111310')); c.rect(102, 158, 86, 146, fill=1, stroke=0)
c.setFillColor(HexColor('#494C46')); c.rect(90, 158, 8, 164, fill=1, stroke=0)
c.setFillColor(HexColor('#5A5D56')); c.rect(96, 158, 92, 7, fill=1, stroke=0)
# Material crop: coursed masonry and one repaired seam.
c.setStrokeColor(set_alpha(PAPER, .18)); c.setLineWidth(.7)
for y in range(166, 310, 22):
    c.line(248, y, 374, y)
for y in range(177, 310, 44):
    for x in [268, 322]:
        c.line(x, y - 11, x, y + 11)
c.setStrokeColor(set_alpha(BRASS_LIGHT, .72)); c.line(344, 158, 344, 318)
# Operations crop: stair, rail, and visible handoff point.
c.setStrokeColor(HexColor('#777A72')); c.setLineWidth(5)
for i in range(4):
    c.line(414 + i * 24, 172 + i * 28, 482 + i * 14, 172 + i * 28)
c.setStrokeColor(set_alpha(PAPER, .48)); c.setLineWidth(1.2)
c.line(424, 190, 520, 302); c.line(424, 190, 424, 272); c.line(520, 302, 520, 324)
c.setFillColor(BRASS_LIGHT); c.circle(520, 302, 3.2, fill=1, stroke=0)
rule(c, 70, 132, 552, 132, color=set_alpha(PAPER, .16))
draw_tracking(c, 'ART-DIRECTION STUDY  /  REPLACE WITH COMMISSIONED, OWNED PHOTOGRAPHY', 70, 120, size=5.8, tracking=1.1, color=set_alpha(PAPER,.66))
guides = [
    ('Subject', 'Owned assets, working buildings, materials, thresholds, principal presence.'),
    ('Treatment', 'Archival monochrome; honest perspective; visible context; restrained contrast.'),
    ('Composition', 'Leave quiet fields for evidence, captions, and argument-led copy.'),
    ('Motion', 'One entrance, one survey draw, one purpose. Respect reduced-motion settings.'),
    ('Never', 'Stock handshakes, skyline heroics, drone clichés, staged “deal room” scenes.'),
]
for i, (hd, body) in enumerate(guides):
    y = 350 - i * 54
    section_label(c, hd, 620, y)
    p(c, body, 620, y - 10, 286, font='BrandSerif', size=10.2, leading=14, color=INK_2)


# 15 - Business cards
b.begin('Applications', 'Business cards', paper_warm=True)
section_label(c, '14 / Business cards', 54, 486)
title(c, 'A calling card, not a miniature brochure.', 54, 450, 760, 38)
# Patrick front
shadow_box(c, 70, 176, 360, 194, fill=PAPER_LIGHT, stroke=set_alpha(INK,.12), shadow=True)
wordmark(c, 100, 337, size=13, tone=INK, tagline=False)
draw_tracking(c, 'PATRICK BARRETT', 100, 254, font='BrandDisplay', size=17, tracking=1.5, color=INK)
draw_tracking(c, 'FOUNDER & MANAGING PARTNER', 100, 228, size=7.2, tracking=1.35, color=BRASS)
p(c, 'patrick@thaneandreeve.com · thaneandreeve.com<br/>Boston, Massachusetts', 100, 208, 250, font='BrandSans', size=7.7, leading=10.5, color=INK_2)
# reverse
shadow_box(c, 510, 176, 360, 194, fill=INK, stroke=INK, shadow=True)
ampersand(c, 690, 253, size=58, tone=BRASS_LIGHT, sealed=True)
draw_tracking(c, 'LAND HELD  ·  LAND MANAGED', 690, 214, size=6.9, tracking=1.45, color=set_alpha(PAPER,.72), align='center')
# Tim variant strip
shadow_box(c, 70, 54, 800, 96, fill=PAPER_LIGHT, stroke=set_alpha(INK,.12), shadow=False)
ampersand(c, 112, 84, size=27, tone=BRASS, sealed=True)
p(c, 'Timothy Johnson', 154, 119, 220, font='BrandDisplay', size=16, leading=20, color=INK)
draw_tracking(c, 'CO-FOUNDER & PARTNER · CPM', 154, 87, size=6.8, tracking=1.3, color=BRASS)
p(c, 'management@thaneandreeve.com', 520, 113, 300, font='BrandSans', size=8.8, leading=12, color=INK_2)
p(c, 'Standard: 3.5 x 2 in / 32 pt uncoated warm-white / 1-color ink + brass foil or blind deboss.', 520, 88, 300, font='BrandSerifItalic', size=8.7, leading=12, color=MUTED)


# 16 - Letterhead
b.begin('Applications', 'Letterhead')
section_label(c, '15 / Letterhead', 54, 486)
title(c, 'Correspondence should feel permanent.', 54, 450, 700, 38)
# Letterhead mockup
shadow_box(c, 70, 40, 320, 330, fill=PAPER_LIGHT, stroke=set_alpha(INK,.10), shadow=True)
wordmark(c, 92, 341, size=9.7, tone=INK, tagline=True)
rule(c, 92, 308, 368, 308, color=set_alpha(INK,.18))
draw_tracking(c, 'AUGUST 9, 2026', 92, 287, size=5.6, tracking=1.0, color=MUTED)
p(c, '<b>Re: The operating work</b>', 92, 267, 254, font='BrandSerif', size=8.5, leading=11, color=INK)
p(c, 'Dear Partner,<br/><br/>The purpose of this note is simple: to state what we believe, what we have underwritten, and what we are prepared to operate.<br/><br/>Every transaction closes on its own documents. Every asset is expected to justify its place. Every report should make the next decision easier.', 92, 246, 254, font='BrandSerif', size=7.7, leading=10.8, color=INK_2)
p(c, '<i>Patrick Barrett</i><br/>Founder & Managing Partner', 92, 113, 160, font='BrandSerifItalic', size=8.2, leading=12, color=INK)
draw_tracking(c, 'THANE & REEVE HOLDINGS LLC  ·  BOSTON, MASSACHUSETTS  ·  THANEANDREEVE.COM', 230, 55, size=4.4, tracking=.55, color=MUTED, align='center')
# Specs
section_label(c, 'System', 460, 382)
p(c, 'Header', 460, 356, 180, font='BrandDisplay', size=18, leading=22)
p(c, 'Wordmark top-left, 0.62 in from trim. Thin ink rule anchors the writing field.', 460, 330, 380, font='BrandSerif', size=10.8, leading=15, color=INK_2)
p(c, 'Body', 460, 276, 180, font='BrandDisplay', size=18, leading=22)
p(c, '10.5 pt serif / 15 pt leading. Use generous paragraph space; never justify.', 460, 250, 380, font='BrandSerif', size=10.8, leading=15, color=INK_2)
p(c, 'Footer', 460, 196, 180, font='BrandDisplay', size=18, leading=22)
p(c, 'Legal entity, confirmed mailing address, website. No social icons.', 460, 170, 380, font='BrandSerif', size=10.8, leading=15, color=INK_2)
shadow_box(c, 460, 78, 380, 56, fill=PAPER_WARM, stroke=set_alpha(INK,.10), shadow=False)
p(c, '<b>Production note:</b> confirm the legal mailing address before release. Use 24 lb warm-white writing stock; matching 80 lb text continuation sheets.', 478, 118, 345, font='BrandSans', size=8.2, leading=12, color=INK_2)


# 17 - Envelope and notecard
b.begin('Applications', 'Stationery', paper_warm=True)
section_label(c, '16 / Stationery', 54, 486)
title(c, 'Quiet materials, unmistakable authorship.', 54, 450, 720, 38)
# Envelope
shadow_box(c, 54, 200, 508, 180, fill=PAPER_LIGHT, stroke=set_alpha(INK,.12), shadow=True)
wordmark(c, 80, 355, size=10.5, tone=INK)
draw_tracking(c, 'BOSTON, MASSACHUSETTS', 80, 330, size=5.5, tracking=1.05, color=MUTED)
ampersand(c, 308, 260, size=42, tone=set_alpha(BRASS,.55), sealed=True)
rule(c, 80, 220, 536, 220, color=set_alpha(INK,.10))
draw_tracking(c, 'NO. 10 ENVELOPE  /  UNCOATED WARM-WHITE', 54, 180, size=6.8, tracking=1.3, color=BRASS)
# Notecard
shadow_box(c, 622, 170, 284, 210, fill=PAPER_LIGHT, stroke=set_alpha(INK,.12), shadow=True)
ampersand(c, 764, 280, size=52, tone=BRASS, sealed=True)
draw_tracking(c, 'A NOTE FROM THE PARTNERS', 764, 234, size=6.8, tracking=1.35, color=MUTED, align='center')
draw_tracking(c, 'A6 NOTECARD  /  BLIND DEBOSS + BRASS EDGE', 622, 146, size=6.8, tracking=1.3, color=BRASS)
# Folio
shadow_box(c, 54, 58, 852, 68, fill=INK, stroke=INK, shadow=False)
wordmark(c, 82, 94, size=10.5, tone=PAPER, tagline=False)
p(c, 'Document folio', 344, 111, 160, font='BrandDisplay', size=14.5, leading=18, color=PAPER)
p(c, 'Ink cover / blind seal / brass linen tape. For signed terms, investor letters, and closing documents.', 490, 109, 370, font='BrandSerifItalic', size=9.2, leading=12.5, color=set_alpha(PAPER,.72))


# 18 - Email signatures
b.begin('Applications', 'Email signature')
section_label(c, '17 / Email signature', 54, 486)
title(c, 'Human, plain, and legible everywhere.', 54, 450, 680, 38)
shadow_box(c, 54, 150, 530, 220, fill=WHITE, stroke=set_alpha(INK,.12), shadow=True)
p(c, 'Patrick Barrett', 84, 334, 260, font='BrandSerif', size=14, leading=18, color=INK)
draw_tracking(c, 'FOUNDER & MANAGING PARTNER', 84, 306, size=6.4, tracking=1.1, color=BRASS)
rule(c, 84, 289, 552, 289, color=set_alpha(INK,.16))
wordmark(c, 84, 252, size=9.6, tone=INK, tagline=True)
p(c, 'patrick@thaneandreeve.com<br/>thaneandreeve.com<br/>Boston - NYC corridor', 330, 265, 205, font='BrandSans', size=8.3, leading=13, color=INK_2)
p(c, '<i>Land held. Land managed.</i>', 84, 192, 360, font='BrandSerifItalic', size=10.5, leading=14, color=BRASS)
section_label(c, 'Rules', 642, 366)
rules_email = ['Text-first signature', 'Direct line when confirmed', 'Skip the social icon row', 'Three emails max before a call', 'One brass accent maximum', 'Plain-text fallback required']
for i, item in enumerate(rules_email):
    y = 332 - i * 38
    c.setFillColor(BRASS)
    c.circle(648, y + 5, 3.2, fill=1, stroke=0)
    p(c, item, 666, y + 14, 220, font='BrandSerif', size=10.5, leading=14, color=INK_2)
draw_tracking(c, 'SIGNATURE WIDTH: 500-560 PX  /  SYSTEM FONTS ONLY', 54, 106, size=7.1, tracking=1.4, color=BRASS)
p(c, 'The email signature is an identity utility, not an advertisement. If clarity is unresolved after three emails, schedule a call.', 54, 85, 720, font='BrandSerifItalic', size=11.2, leading=15.5, color=INK)


# 19 - Investment memorandum
b.begin('Applications', 'Investment memorandum', dark=True)
survey(c, opacity=.24, dark=True)
section_label(c, '18 / Investment memorandum', 54, 486, dark=True)
title(c, 'A cover that signals evidence before excitement.', 54, 450, 820, 35, dark=True)
# Cover mockup
shadow_box(c, 76, 50, 306, 300, fill=PAPER_LIGHT, stroke=set_alpha(PAPER,.18), shadow=True)
wordmark(c, 100, 322, size=10.5, tone=INK, tagline=True)
draw_tracking(c, 'CONFIDENTIAL  ·  OPPORTUNITY 01', 100, 270, size=5.7, tracking=1.05, color=BRASS)
p(c, 'Investment<br/>Memorandum', 100, 248, 230, font='BrandDisplay', size=28, leading=31, color=INK)
p(c, '<i>Boston - NYC corridor</i>', 100, 170, 220, font='BrandSerifItalic', size=10.5, leading=14, color=BRASS)
rule(c, 100, 143, 356, 143, color=set_alpha(INK,.16))
draw_tracking(c, 'PREPARED FOR REVIEW  /  MMXXVI', 100, 116, size=5.3, tracking=.9, color=MUTED)
ampersand(c, 326, 81, size=24, tone=BRASS, sealed=True)
# Inside spread
shadow_box(c, 448, 50, 438, 300, fill=PAPER_LIGHT, stroke=set_alpha(PAPER,.18), shadow=True)
draw_tracking(c, '01  /  INVESTMENT THESIS', 472, 322, size=5.8, tracking=1.1, color=BRASS)
p(c, 'The operating case', 472, 300, 320, font='BrandDisplay', size=23, leading=27, color=INK)
p(c, 'The asset must work in current operations, through a credible improvement plan, and across a cycle. Sale is optional; indefinite ownership remains valid.', 472, 254, 370, font='BrandSerif', size=9.3, leading=13.5, color=INK_2)
for i, (lab, val) in enumerate([('Basis', 'Deal-specific'), ('Doors', 'Verified'), ('Hold', 'Patient / permanent'), ('GP commitment', 'Meaningful')]):
    x = 472 + (i % 2) * 190
    y = 180 - (i // 2) * 58
    draw_tracking(c, lab.upper(), x, y + 20, size=5.5, tracking=.9, color=MUTED)
    p(c, val, x, y + 6, 160, font='BrandDisplay', size=17, leading=20, color=INK)


# 20 - Acquisition one-sheet
b.begin('Applications', 'Acquisition collateral', paper_warm=True)
section_label(c, '19 / Acquisition one-sheet', 54, 486)
title(c, 'Direct acquisition should look direct.', 54, 450, 700, 36)
shadow_box(c, 54, 58, 500, 306, fill=PAPER_LIGHT, stroke=set_alpha(INK,.12), shadow=True)
wordmark(c, 82, 334, size=10.2, tone=INK)
draw_tracking(c, 'DIRECT ACQUISITION', 82, 294, size=6.4, tracking=1.35, color=BRASS)
p(c, 'Submit a property.<br/><i>We will read it.</i>', 82, 270, 390, font='BrandDisplay', size=28, leading=31, color=INK)
p(c, 'Principals evaluate every opportunity personally. Confidential. No obligation. A yes or no within 48 business hours.', 82, 196, 410, font='BrandSerif', size=9.8, leading=14, color=INK_2)
criteria = [('Asset', 'Multifamily / mixed-use / specialty commercial'), ('Geography', 'Boston - NYC corridor'), ('Size', '$5M-$75M equity'), ('Strategy', 'Stabilized / value-add / adaptive reuse')]
for i, (lab, val) in enumerate(criteria):
    y = 143 - i * 24
    draw_tracking(c, lab.upper(), 82, y, size=5.4, tracking=.9, color=MUTED)
    p(c, val, 158, y + 7, 330, font='BrandSerifItalic', size=8.5, leading=11, color=INK)
shadow_box(c, 614, 184, 292, 180, fill=INK, stroke=INK, shadow=True)
ampersand(c, 760, 270, size=48, tone=BRASS_LIGHT, sealed=True)
draw_tracking(c, 'ACQUISITIONS@THANEANDREEVE.COM', 760, 228, size=5.2, tracking=.8, color=PAPER, align='center')
draw_tracking(c, '48 HOURS  ·  YES OR NO', 760, 206, size=5.6, tracking=1.1, color=BRASS_LIGHT, align='center')
p(c, 'Formats: letter-size PDF, 6 x 9 in direct-mail card, and web landing-page module.', 614, 158, 292, font='BrandSerifItalic', size=10, leading=14, color=INK_2)
p(c, '<b>Primary CTA</b><br/>Submit a property<br/><br/><b>Secondary CTA</b><br/>Reach a principal', 614, 108, 292, font='BrandSans', size=8.4, leading=13, color=INK_2)


# 21 - Presentation system
b.begin('Applications', 'Presentation system')
section_label(c, '20 / Presentation system', 54, 486)
title(c, 'Argument first. Evidence immediately after.', 54, 450, 760, 36)
# Cover slide
shadow_box(c, 54, 168, 392, 186, fill=INK, stroke=INK, shadow=True)
# A single restrained survey trace, clipped conceptually to the cover slide.
c.setStrokeColor(set_alpha(BRASS_LIGHT, .22))
c.setLineWidth(.65)
c.line(206, 168, 266, 206)
c.line(266, 206, 352, 176)
c.setFillColor(set_alpha(BRASS_LIGHT, .52))
c.circle(266, 206, 2.4, fill=1, stroke=0)
wordmark(c, 80, 328, size=10.3, tone=PAPER)
draw_tracking(c, 'INVESTMENT COMMITTEE  ·  MMXXVI', 80, 284, size=5.6, tracking=1.0, color=BRASS_LIGHT)
p(c, 'The case<br/>for the asset.', 80, 262, 290, font='BrandDisplay', size=27, leading=30, color=PAPER)
draw_tracking(c, 'RESIDENT + ASSET OUTCOMES', 80, 192, size=5.4, tracking=1.0, color=set_alpha(PAPER,.62))
# Divider
shadow_box(c, 514, 168, 392, 186, fill=PAPER_LIGHT, stroke=set_alpha(INK,.10), shadow=True)
draw_tracking(c, '02', 540, 320, font='BrandDisplay', size=29, tracking=1.0, color=BRASS)
rule(c, 540, 297, 880, 297, color=set_alpha(INK,.16))
p(c, 'Operating plan', 540, 272, 300, font='BrandDisplay', size=27, leading=30, color=INK)
p(c, 'What changes, who owns it, how residents are served, and how results are measured.', 540, 222, 300, font='BrandSerifItalic', size=9.8, leading=13.5, color=INK_2)
# Sequence
stages = [('01', 'Thesis'), ('02', 'Residents'), ('03', 'Operating plan'), ('04', 'Capital'), ('05', 'Downside'), ('06', 'Decision')]
for i, (num, lab) in enumerate(stages):
    x = 54 + i * 142
    draw_tracking(c, num, x, 140, font='BrandDisplay', size=12, tracking=1, color=BRASS)
    p(c, lab, x, 122, 122, font='BrandSerif', size=9.8, leading=13, color=INK)
    if i < len(stages) - 1:
        rule(c, x + 72, 135, x + 126, 135, color=set_alpha(INK,.18))
draw_tracking(c, 'DEFAULT FORMAT  /  16:9  /  SOURCE EVERY NUMBER  /  INCLUDE RESIDENT OUTCOMES', 54, 72, size=7.0, tracking=1.25, color=MUTED)


# 22 - Signage and social
b.begin('Applications', 'Environmental + social', dark=True)
section_label(c, '21 / Environmental + social', 54, 486, dark=True)
title(c, 'Built-world restraint, digital-world consistency.', 54, 450, 780, 38, dark=True)
# Plaque
shadow_box(c, 54, 132, 342, 200, fill=HexColor('#2A2C28'), stroke=set_alpha(PAPER,.20), shadow=True)
wordmark(c, 225, 284, size=15, tone=PAPER, stacked=True, tagline=True)
draw_tracking(c, 'PROPERTY OF THANE & REEVE', 225, 170, size=5.6, tracking=1.05, color=BRASS_LIGHT, align='center')
draw_tracking(c, 'CAST BRONZE  /  8 X 10 IN', 54, 104, size=6.8, tracking=1.2, color=BRASS_LIGHT)
# Social tiles
shadow_box(c, 482, 192, 188, 160, fill=PAPER_LIGHT, stroke=set_alpha(PAPER,.16), shadow=True)
draw_tracking(c, 'THE OPERATING', 500, 326, size=5.3, tracking=.9, color=BRASS)
draw_tracking(c, 'WORK', 500, 310, size=5.3, tracking=.9, color=BRASS)
p(c, 'Good operations should be felt first by residents.', 500, 288, 150, font='BrandDisplay', size=14, leading=16, color=INK)
ampersand(c, 638, 212, size=22, tone=BRASS, sealed=True)
shadow_box(c, 700, 192, 188, 160, fill=INK, stroke=set_alpha(PAPER,.16), shadow=True)
draw_tracking(c, '$82.75M', 718, 310, font='BrandDisplay', size=25, tracking=.5, color=PAPER)
draw_tracking(c, 'DEPLOYED', 718, 284, size=5.6, tracking=1.2, color=BRASS_LIGHT)
p(c, 'Ownership and operations under one accountable roof.', 718, 258, 144, font='BrandSerifItalic', size=9.2, leading=13, color=set_alpha(PAPER,.78))
draw_tracking(c, 'LINKEDIN  /  1:1  +  4:5  /  ONE CLAIM PER FRAME', 482, 166, size=6.8, tracking=1.2, color=BRASS_LIGHT)
p(c, 'Environmental rule: prefer cast, etched, painted, or debossed materials. Resident-facing communication must be plain, accessible, and service-led. Social content uses evidence and owned photography - never trend templates.', 482, 124, 406, font='BrandSerif', size=9.8, leading=14, color=set_alpha(PAPER,.78))


# 23 - Production and rollout
b.begin('Governance', 'Production + rollout')
section_label(c, '22 / Production + rollout', 54, 486)
title(c, 'Build the system in the order the firm will use it.', 54, 450, 790, 36)
phases = [
    ('0-30 days', 'Core release', ['Vector wordmark suite', 'Business cards', 'Letterhead + envelopes', 'Email signatures', 'Presentation master']),
    ('31-60 days', 'Deal materials', ['Investment memo template', 'Acquisition one-sheet', 'Investor letter template', 'Property submission follow-up', 'Social evidence templates']),
    ('61-90 days', 'Physical system', ['Office and property plaque', 'Document folio', 'Notecards', 'Photography commissioning', 'Print vendor drawdowns']),
]
for i, (time, hd, items) in enumerate(phases):
    x = 54 + i * 292
    draw_tracking(c, time.upper(), x, 355, size=7.3, tracking=1.4, color=BRASS)
    p(c, hd, x, 334, 250, font='BrandDisplay', size=20, leading=24, color=INK)
    y = 284
    for item in items:
        c.setFillColor(BRASS)
        c.circle(x + 4, y + 4, 2.6, fill=1, stroke=0)
        p(c, item, x + 16, y + 12, 230, font='BrandSerif', size=9.7, leading=13, color=INK_2)
        y -= 31
    rule(c, x, 124, x + 252, 124, color=set_alpha(INK,.14))
    p(c, 'Owner: marketing lead + one founding partner', x, 108, 250, font='BrandSerifItalic', size=8.5, leading=12, color=MUTED)


# 24 - Close
b.begin('Covenant', 'Closing principle', dark=True, footer=False)
survey(c, opacity=.30, dark=True)
wordmark(c, 480, 420, size=28, tone=PAPER, tagline=True, align='center')
rule(c, 248, 330, 712, 330, color=set_alpha(PAPER,.18))
p(c, 'The brand should feel the way the firm intends to operate:<br/><i>clear enough to trust, disciplined enough to hold.</i>', 160, 294, 640,
  font='BrandDisplay', size=30, leading=36, color=PAPER, align=TA_CENTER)
ampersand(c, 480, 108, size=36, tone=BRASS_LIGHT, sealed=True)
draw_tracking(c, 'LAND HELD  ·  LAND MANAGED', 480, 72, size=7.3, tracking=1.65, color=set_alpha(PAPER,.72), align='center')
draw_tracking(c, 'FOUNDING EDITION  /  AUGUST 2026', 480, 44, size=6.5, tracking=1.35, color=BRASS_LIGHT, align='center')

b.finish()
print(OUT)
