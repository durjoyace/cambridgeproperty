# Thane & Reeve — Launch Checklist

A plain-English, end-to-end guide to getting **thaneandreeve.com** fully live: domain,
email, the website's forms, analytics, search engines, and social media. Written so
anyone helping can follow it, with each item marked by **who needs to do it**.

**Who does what (legend):**
- 🟦 **Dev** — whoever maintains the website code / Vercel account (that's the build side)
- 🟩 **Shaun** — coordinating, social media, gathering content & assets
- 🟨 **Domain owner** — whoever has the **Squarespace** login for `thaneandreeve.com` (DNS lives here)
- 🟪 **Patrick / Tim** — decisions, approvals, and the bits only they can provide

---

## Where things stand today (the honest snapshot)

- ✅ **The website is built and live** at a temporary address: **https://cambridgeproperty.vercel.app** — fully working, fast, mobile-friendly, and search/AI-optimized.
- ⚠️ **The real domain, `thaneandreeve.com`, is NOT connected yet.** It's parked on **Squarespace** showing a *"Coming Soon"* page. It needs to be pointed at our site.
- ⚠️ **Email, the contact forms, analytics, and social media are not set up yet.** Those are the steps below.

Think of it as: *the house is built and beautiful — now we connect the address, the mailbox, the phone line, and put the sign out front.*

---

## Phase 1 — Point the domain at the website (highest priority)

**Why:** Right now `thaneandreeve.com` goes to a Squarespace placeholder. We need it to show the real site.

The domain is registered at **Squarespace Domains**, and its DNS (the "address book" of the internet) is managed there too. **Nothing about email is changed by this step** — website records and email records are separate, so we won't break anything that exists.

1. 🟪 **Confirm who controls the Squarespace account** for `thaneandreeve.com`. *All the DNS steps below happen inside that account.* — **This is the unblocker; everything waits on it.**
2. 🟪 **Confirm whether Squarespace is being used for anything else** (a website builder, email, etc.) before we repoint it. If it's only holding the domain, we're clear.
3. ✅ **DONE (Dev):** `thaneandreeve.com` and `www.thaneandreeve.com` have been added to the Vercel `cambridgeproperty` project. Vercel is now waiting on the DNS change below before it will serve them.
4. 🟨 **In Squarespace's DNS settings**, change the website records to point at Vercel:
   - **Root domain** (`@` / `thaneandreeve.com`): set an **A record → `76.76.21.21`**
   - **`www`**: set a **CNAME → `cname.vercel-dns.com`** (Vercel also accepts an **A record → `76.76.21.21`** for `www` — use whichever the Vercel domains page shows for `www.thaneandreeve.com`).
   - **Remove** the old Squarespace website records (the A records starting `198.185.…` / `198.49.…` and the `www` record pointing to `ext-sq.squarespace.com`).
   - *Vercel emails a confirmation once it detects the change and the secure certificate is issued automatically.*
5. 🟨 **Disconnect the domain from the Squarespace "Coming Soon" site** so Squarespace releases it.
6. 🟦 **Verify:** within a few minutes to a few hours, `https://thaneandreeve.com` should show the real site with a secure padlock (SSL is automatic on Vercel). Dev confirms.

> **Keep the Squarespace subscription** if it's the cheapest place to keep the domain registered — we just stop pointing it at a Squarespace *site*. We do **not** need to move the registrar.

---

## Phase 2 — Email that works (sending AND receiving)

The website mentions three addresses — **contact@**, **acquisitions@**, and **notifications@thaneandreeve.com** — and the contact/property forms email them. Two separate things have to be true:

### 2a. Receiving email (real inboxes) 🟪 decision + 🟨 DNS
- 🟪 **Decide on an email provider** — **Google Workspace** is the simplest, most credible choice for a firm like this (≈$7/user/mo). Set up at least:
  - `contact@thaneandreeve.com` (general)
  - `acquisitions@thaneandreeve.com` (property submissions — this is where deal alerts land, so it must be watched)
  - Optionally `patrick@` and `tim@`
- 🟨 **Add the provider's MX records** in Squarespace DNS (Google Workspace gives you these during setup). *MX records are separate from the website records in Phase 1 — adding them won't affect the site.*

### 2b. Sending email (so form notifications actually deliver) 🟦 + 🟨
The site sends mail through a service called **Resend**. For Resend to send from `@thaneandreeve.com` without landing in spam, the domain must be **verified** in Resend.
- 🟦 **Add `thaneandreeve.com` as a domain in Resend** (resend.com). Resend will generate a few DNS records (DKIM + SPF, and ideally DMARC).
- 🟨 **Add those Resend records** in Squarespace DNS.
- 🟦 **Confirm verification** in Resend, then test that a form submission email arrives.

---

## Phase 3 — Make the website's forms & data live (Dev) 🟦

The site has three working forms — **contact**, **newsletter signup**, and **property submission**. **Good news: the service keys are already configured in Vercel** (set 116 days ago):

| Variable | What it's for | Status |
|---|---|---|
| `RESEND_API_KEY` | Sends the form emails | ✅ **Set** |
| `NOTIFICATION_EMAIL` | Where property/contact alerts go | ✅ **Set** |
| `NEON_DATABASE_URL` | Stores property submissions in a database | ✅ **Set** |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics (Phase 5) | ⬜ Not set — add when GA4 is ready (analytics simply stays off until then) |

So the forms are wired. **Two things still gate reliable email delivery:**
- 🟦🟨 **Verify the domain in Resend** (Phase 2b) — until `thaneandreeve.com` is verified there, form emails may not send or may land in spam. This needs the Resend DNS records added in Squarespace.
- 🟦 **Once the domain + Resend are live, submit a real test** through each form to confirm the notification email arrives and the property submission saves.

---

## Phase 4 — Final content & assets 🟩 gather / 🟪 provide / 🟦 implement

- 🟪 **Tim Johnson's headshot** — the About page currently uses a tasteful placeholder for Tim (Patrick's photo is in). A real portrait should replace it. 🟩 Shaun to collect; 🟦 Dev to drop in.
- 🟪 **Confirm the firm facts** shown publicly are final (the $ figures, "192 doors," founding details, the two properties). 🟩 Shaun to get sign-off.
- 🟪 **Resident Portal link** currently points to AppFolio's generic login. If there's a branded tenant portal URL, 🟩 send it and 🟦 we'll point to it.
- ✅ **DONE (Dev): Privacy Policy page** is built and live at `/privacy`, linked in the footer site-wide and added to the sitemap. ⚠️ The wording is a sensible baseline — **Patrick/Tim (or counsel) should review the copy** before the public launch. It's easy to edit and nothing else depends on the exact wording.

---

## Phase 5 — Analytics & search engines (so we can see traffic and get found)

- 🟦 **Google Analytics 4** — create a property, drop the ID into `VITE_GA_MEASUREMENT_ID` (Phase 3).
- 🟦 **Google Search Console** — add & verify `thaneandreeve.com`, then **submit the sitemap** (`https://thaneandreeve.com/sitemap.xml`). This is how Google discovers and tracks all pages.
- 🟦 **Bing Webmaster Tools** — same idea (also powers some AI search). Submit the sitemap.
- 🟪 **Google Business Profile** — for a Boston firm this helps local credibility and map presence. 🟩 Shaun can help set up; 🟪 needs the firm's address/phone decisions.
- ✅ *Already done in the build:* `sitemap.xml`, `robots.txt` (welcomes AI search crawlers), and an `llms.txt` summary for AI assistants — all live and require no action.

---

## Phase 6 — Social media 🟩 Shaun leads / 🟪 decisions

**Priority order for this audience (investors, owners, partners):**

1. 🟪🟩 **LinkedIn Company Page** — *the* most important channel for a real-estate investment firm. Reserve **Thane & Reeve**, add logo, the one-line description ("Land held. Land managed."), the website link, and Boston location.
2. 🟩 **Instagram** — good for property/architecture imagery (the 907 Main hotel, 17 Story Street). Reserve `@thaneandreeve` (or closest available).
3. 🟩 **X / Twitter** *(optional)* — reserve the handle even if not active, to protect the name.
4. 🟩 **Reserve the handle everywhere** even on platforms you won't use yet (name protection): LinkedIn, Instagram, X, Facebook, YouTube.

**Once handles exist, tell Dev so we can:** 🟦
- Add them to the website footer (if desired).
- Add them to the site's structured data (`sameAs`) so Google/AI engines officially link the brand to its profiles — a real SEO/credibility signal.
- Add the X handle to the social-preview tags (`twitter:site`).

**Before announcing anywhere:** 🟦 test how the link looks when shared — paste `thaneandreeve.com` into LinkedIn's **Post Inspector** and a Slack/iMessage to confirm the preview card (image + title + description) renders correctly. *(The site already generates a branded preview card; this just confirms it on each platform.)*

---

## Phase 7 — Launch-day checklist (run through before announcing) 🟦🟩

- [ ] `https://thaneandreeve.com` and `https://www.thaneandreeve.com` both load the real site with SSL
- [ ] Every page loads on phone and desktop; no broken images
- [ ] Contact form → email arrives at the inbox
- [ ] Property submission form → email arrives **and** saves to the database
- [ ] Newsletter signup → works
- [ ] Email **to** `contact@` / `acquisitions@` is received in the real inbox
- [ ] Analytics is recording visits
- [ ] Search Console + Bing have the sitemap submitted
- [ ] Social profiles are live and linked
- [ ] Link preview card looks right when shared

---

## Phase 8 — After launch (ongoing) 🟩🟪

- 🟦🟩 **Watch Search Console** for the first few weeks — confirm pages get indexed, watch for errors.
- 🟪🟩 **Content cadence** — the site has an **Insights / LP Letters** section. A steady drip (even quarterly) is what builds search authority and gives the firm something to share on LinkedIn.
- 🟩 **Keep social fed** — new properties, milestones, press.

---

### The one thing blocking everything
👉 **Access to the Squarespace account that owns `thaneandreeve.com`.** Phases 1 and 2 (domain + email DNS) all happen there. The fastest path to live is getting that login sorted — everything else can proceed in parallel.

*The live preview to share internally in the meantime: **https://cambridgeproperty.vercel.app***
