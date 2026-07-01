# Stackmigo

Landing site for **Stackmigo** — AI receptionists and 24/7 automated answering for businesses that live on the phone (home & field services and medical/dental practices first). It answers every call, books appointments, screens callers, dispatches emergencies, and texts the owner the details.

Built with Next.js 16 (App Router, Turbopack) and Tailwind CSS v4. See `PRODUCT.md` for positioning and `DESIGN.md` for the design system ("The Line, on paper" — ink on warm paper, one on-air signal accent, call transcripts as evidence).

## Getting started

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

- `app/page.tsx` — the single long-scroll landing page (hero + live-line card, the cost of a missed call, what it handles, how it works, pricing, FAQ, who sets it up, book-a-demo).
- `app/components/DemoForm.tsx` — book-a-demo lead capture (validation/states real; network call stubbed pending backend).
- `app/components/Faq.tsx` — accessible FAQ accordion.
- `app/globals.css` — design tokens (Tailwind v4 `@theme`) and the two restrained animations.
- `app/layout.tsx` — root layout, fonts (`Source_Serif_4` + `Geist_Mono`), metadata, PostHog provider.

## Notes

- Analytics via PostHog expects `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST`.
- The demo form and pricing (plans, add-ons, per-call overage) are placeholder values — wire the form to a real endpoint/CRM and confirm pricing before launch.
