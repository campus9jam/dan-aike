# DanAyko Logistics — Stage 1 MVP

Next.js App Router PWA for vendor, driver and admin logistics workflows. The PRD defines a PWA-first architecture backed by Supabase PostgreSQL/PostGIS, Realtime and Edge Functions, with Vercel as the Stage 1 deployment target. fileciteturn0file0L5-L23

## Architecture
- Next.js + TypeScript + Tailwind + Lucide
- Supabase Auth/Database/Storage/Realtime
- PostGIS proximity dispatch (5 km)
- Paystack payment webhook boundary
- 4-digit pickup OTP verification
- Vercel deployment

## Local setup
1. Install Node.js 20+.
2. `npm install`
3. Copy `.env.example` to `.env.local` and provide Supabase values.
4. Link your Supabase project and apply `supabase/migrations/20260828140000_danayko_mvp.sql`.
5. `npm run dev`

## Environment
`NEXT_PUBLIC_SUPABASE_URL`
`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
`PAYSTACK_SECRET_KEY` (server only)
`NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` (browser, when Paystack checkout is wired)

Never expose a Supabase secret/service-role key to the browser. Supabase's current Next.js guidance uses `@supabase/ssr`, browser/server clients and verified claims for protected server routes.

## Vercel
Set the environment variables in the Vercel project, deploy the branch, then configure the Supabase Auth Site URL and redirect URLs to the deployed domain.

## MVP notes
The included UI demonstrates the core vendor quote/payment state machine, driver active mode/nearby alert/accept/OTP workflow, and admin KYC queue. The database migration contains production-oriented RLS, PostGIS indexes, fee calculation, proximity lookup and server-side OTP verification. Paystack credentials and webhook URL must be configured before accepting real money.
