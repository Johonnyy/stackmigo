<!-- Captures the tokens and components actually shipped in app/. Re-run /impeccable document after major UI changes. -->
---
name: stackmigo
description: The answering service you trust because the page reads like a call log. Ink on paper, precise, one on-air signal.
---

# Design System: stackmigo

## 1. Overview

**Creative North Star: "The Line, on paper."**

stackmigo looks like the log of a business's phone line, set in ink on warm paper: an evidence-forward field report where the proof is real call transcripts — the after-hours emergency dispatched, the appointment booked, the solicitor screened. The voice is editorial and authoritative (a serious publication's typographic confidence), but the construction is industrial and exacting (Dieter Rams, Teenage Engineering, IBM): functional, measured, nothing decorative. The product's promise is a receptionist that answers every call without sounding like a machine, so the interface has to read as the work of people who understand how a business's phone actually works, not a marketing team that bought a template.

Depth comes from hairline rules and tonal shifts in the paper, not drop shadows. Color is almost entirely absent until it isn't: one signal accent — the "on-air" mark — appears only on the live line and the single action that matters. The result should feel quietly expensive and slightly clinical, the way a precision instrument or an operator's console feels: you trust it before you can say why.

This system explicitly rejects the three traps named in PRODUCT.md: generic AI-SaaS dressing (purple/indigo gradients, glassmorphism, floating blobs, the hero-metric template), telecom clichés (headset stock photos, cartoon phones and speech bubbles, dated call-center imagery), and cute/playful consumer friendliness (mascots, pastel bubbles). It also rejects the dark-mode-neon reflex. This is paper, daylight, and ink.

**Key Characteristics:**
- Ink-on-paper, light by default. Warm off-white surfaces, near-black text, no pure white or pure black.
- One signal accent, reserved for the live line and the single most important action. Rarity is the point.
- Editorial serif for statements, monospace for anything quoted from a real call.
- Flat by default. Hairline rules and tonal paper, not shadows.
- Industrial restraint: every element earns its place; decoration is prohibited.

## 2. Colors

A near-monochrome ink-on-paper palette with exactly one chromatic voice. Tokens live in `app/globals.css` and are AA-tuned. The discipline is the design.

### Primary
- **Signal** (`--signal`, vermilion `oklch(0.505 0.19 27)`; deep `--signal-deep`): the single accent. The "on-air" mark — the live-line indicator, the receptionist's turn in a transcript, and the one primary action (Book a demo). Think the red light on a studio door or a phone LED, not a brand color splashed for warmth.

### Neutral
- **Ink** (`--ink` `oklch(0.24 0.012 58)`; `--ink-soft`): primary and secondary text, high-contrast marks. Never pure `#000`.
- **Paper** (`--paper`, `--paper-2`, `--paper-3`): warm off-white surfaces, stepped for tonal layering. Never pure `#fff`.
- **Graphite** (`--graphite`, `--graphite-2`): captions, metadata, transcript labels.
- **Hairline** (`--hairline`, `--hairline-strong`): 1px rules, dividers, grids, field borders. The primary structural device.

### Named Rules
**The Signal Rule.** The accent appears only on the live line (status dots, the receptionist speaking) or the single most important action. It never decorates, never fills a hero, never tints a background. If it is not marking the live line or the primary CTA, it is not the accent.

**The Paper Rule.** Surfaces are warm paper and text is warm ink. `#fff` and `#000` are prohibited. Light by default; there is no dark mode unless a later decision earns one.

## 3. Typography

**Display / Body Font:** `Source_Serif_4` (via `next/font/google`) — a confident text serif with real authority, used for statements and reading text.
**Label / Mono Font:** `Geist_Mono` — for transcripts, call stamps, statuses, field labels, and prices.

**Character:** Serif speaks; mono testifies. The serif carries the argument with editorial confidence; monospace is reserved for anything quoted from a real call, so the page always distinguishes our claims from the evidence.

### Hierarchy
- **Display** (serif, `clamp(2.5rem,6vw,4.25rem)`, tight line-height): the hero statement. One per view.
- **Headline** (serif, `clamp(1.75rem,3.6vw,2.5rem)`): section openers.
- **Title** (serif, `text-xl`): card and sub-section headings.
- **Body** (serif, ~1.05rem, comfortable line-height): reading text. Cap measure at 56–64ch.
- **Label** (mono, small, tracked, often uppercase): section tags, statuses, transcript speakers, prices.

### Named Rules
**The Evidence Rule.** Monospace is reserved for anything quoted from a real call: transcript lines, call stamps, statuses. Prose never sets itself in mono to look technical.

## 4. Elevation

Flat by default. Depth is structural — hairline rules, one-step tonal shifts between paper layers, and generous spacing — not atmospheric. The only motion is a single hero-load fade (`.rise`) and a slow on-air pulse on the live dot (`.live-dot`); both opt out under `prefers-reduced-motion`. No resting shadows.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Separation is a 1px hairline or a one-step tonal shift. A shadow may appear only as a transient response to state and must disappear at rest.

## 5. Components (shipped)

- **SectionTag** — mono `S-0x` code + uppercase title opening each section.
- **LineStatusCard** — the signature hero element: a mono "line status" ledger with a pulsing live dot and a static equalizer. Framed as one real day on a customer's line.
- **CallCard** — a capability shown as its evidence: a bordered transcript (call stamp + speaker lines, the receptionist's turn in the accent) plus a one-line outcome. The telecom analog of a findings card.
- **Faq** — hairline accordion; `+` glyph rotates to the accent when open.
- **DemoForm** — underline-input lead capture (email + business), accent CTA, real validation and states; network call stubbed pending backend.

## 6. Do's and Don'ts

### Do:
- **Do** keep the surface ink-on-paper: warm off-white backgrounds, warm near-black text, hairline rules for structure.
- **Do** reserve the signal accent for the live line and the single primary action.
- **Do** set anything quoted from a real call in monospace, and let the serif carry the argument.
- **Do** build depth from hairlines, tonal paper, and spacing. Flat at rest.
- **Do** hold to industrial restraint: if an element does not carry information or an action, remove it.

### Don't:
- **Don't** ship generic AI-SaaS dressing: no purple/indigo gradients, glassmorphism, floating blobs, big-number hero template, or gradient text.
- **Don't** use telecom clichés: no headset stock photos, cartoon phones, speech bubbles, or "press 1 for..." menus dressed as features.
- **Don't** go cute or playful: no mascots, rounded bubbly illustrations, or pastel consumer friendliness.
- **Don't** reach for dark-mode neon. This system is paper and daylight.
- **Don't** use `#fff` or `#000`, and don't let the accent touch anything that isn't the live line or the primary CTA.
- **Don't** add drop shadows at rest, or colored `border-left`/`border-right` stripes as accents. Structure is hairlines and tonal paper.
