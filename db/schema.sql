-- Production schema for the Vercel form endpoints.
-- Apply once to the Neon database referenced by NEON_DATABASE_URL.

CREATE TABLE IF NOT EXISTS property_submissions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  asset_type TEXT NOT NULL,
  unit_count INTEGER NOT NULL CHECK (unit_count > 0),
  asking_price TEXT NOT NULL DEFAULT '',
  market TEXT NOT NULL,
  state TEXT NOT NULL,
  deal_structure TEXT NOT NULL,
  owner_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL DEFAULT '',
  additional_notes TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS property_submissions_created_at_idx
  ON property_submissions (created_at DESC);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS newsletter_subscribers_email_lower_idx
  ON newsletter_subscribers (LOWER(email));
