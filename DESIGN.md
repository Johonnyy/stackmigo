<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: stackmigo
description: The findings report you trust because it reads like one. Ink on paper, precise, redline what's wrong.
---

# Design System: stackmigo

## 1. Overview

**Creative North Star: "The Auditor's Field Report"**

stackmigo looks like a document written by someone who actually found the problem: an evidence-forward field report, set in ink on warm paper, with the single most important thing marked in red. It fuses two references that rarely meet. The voice is editorial and authoritative (a serious publication's typographic confidence), but the construction is industrial and exacting (Dieter Rams, Teenage Engineering, IBM): functional, measured, nothing decorative. The product's whole promise is that it sees what your vibe-coded app will get sued or hacked over before anyone else does, so the interface has to read as the work of people who read code, not a marketing team that bought a template.

Depth comes from hairline rules and tonal shifts in the paper, not drop shadows. Color is almost entirely absent until it isn't: one signal accent, the redline, appears only to mark a finding or the single action that matters. The result should feel quietly expensive and slightly clinical, the way a forensic report or a precision instrument feels: you trust it before you can say why.

This system explicitly rejects the three traps named in PRODUCT.md: generic AI-SaaS dressing (purple/indigo gradients, glassmorphism, floating blobs, the hero-metric template), security clichés (shields, padlocks, hooded hackers, matrix-green code rain), and cute/playful consumer friendliness (mascots, pastel bubbles). It also rejects the obvious "serious security vendor" reflex of dark-mode neon. This is paper, daylight, and ink.

**Key Characteristics:**
- Ink-on-paper, light by default. Warm off-white surfaces, near-black text, no pure white or pure black.
- One signal accent (redline), reserved for findings and the single most important action. Rarity is the point.
- Editorial serif for statements, monospace for anything quoted from the user's real system.
- Flat by default. Hairline rules and tonal paper, not shadows.
- Industrial restraint: every element earns its place; decoration is prohibited.

## 2. Colors

A near-monochrome ink-on-paper palette with exactly one chromatic voice. The discipline is the design.

### Primary
- **Redline** (vermilion; exact value to be resolved during implementation): the single signal accent. Used to mark a finding, a severity, or the one action that matters on a screen. Think proof-marks and red pen on a manuscript, not a brand color splashed for warmth.

### Neutral
- **Ink** (near-black, warm-tinted; `[to be resolved during implementation]`): primary text and high-contrast marks. Never pure `#000`.
- **Paper** (warm off-white; `[to be resolved during implementation]`): the default surface. Never pure `#fff`. The whole system sits on paper.
- **Graphite** (mid-gray, warm-tinted): secondary text, captions, metadata.
- **Hairline** (light warm gray): 1px rules, dividers, table grids, field borders. The primary structural device.

(Hue family: warm neutrals tinted toward the redline hue at chroma 0.005-0.01; the accent is a confident vermilion. No indigo, no purple, no security-green. Exact OKLCH values land on the next pass when there's code.)

### Named Rules
**The Redline Rule.** The accent appears only to mark what is wrong or the single most important action. It never decorates, never fills a hero, never tints a background. If it is not pointing at a problem or the primary CTA, it is not red.

**The Paper Rule.** Surfaces are warm paper and text is warm ink. `#fff` and `#000` are prohibited. Light by default; there is no dark mode unless a later decision earns one.

## 3. Typography

**Display Font:** Editorial serif (specific family to be chosen at implementation; a confident text serif with real authority, not a fashion serif).
**Body Font:** Same serif at reading sizes, or a quiet companion sans (resolved at implementation).
**Label/Mono Font:** Monospace (to be chosen at implementation), for code, paths, findings, and severities.

**Character:** Serif speaks; mono testifies. The serif carries the argument with editorial confidence; monospace is reserved for evidence pulled from the user's actual system, so the page always distinguishes our claims from their code.

### Hierarchy
- **Display** (serif, large clamp, tight line-height): hero statements and section openers. Used sparingly; one per view.
- **Headline** (serif, semibold): section headings.
- **Title** (serif or sans, medium): sub-section and component headings.
- **Body** (serif/sans, regular, comfortable line-height): reading text. Cap measure at 65-75ch.
- **Label** (mono, small, slight tracking, often uppercase): metadata, severities, field labels, table headers.

### Named Rules
**The Evidence Rule.** Monospace is reserved for anything quoted from the user's real system: code, file paths, finding IDs, severities. Prose never sets itself in mono to look technical, and code is never set in serif to look polished.

## 4. Elevation

Flat by default. Industrial precision means depth is structural, not atmospheric: it comes from hairline rules, tonal shifts between paper layers, and generous spacing, not from drop shadows. Motion is responsive (state feedback and considered transitions, no choreography), so shadows, if they appear at all, are a brief response to interaction, never a resting decoration.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Separation is a 1px hairline or a one-step tonal shift in the paper. A shadow may appear only as a transient response to state (hover, focus, a lifted element mid-drag) and must disappear at rest.

## 5. Do's and Don'ts

### Do:
- **Do** keep the surface ink-on-paper: warm off-white backgrounds, warm near-black text, hairline rules for structure.
- **Do** reserve the redline accent for findings and the single primary action. Its scarcity is what makes it read as a finding.
- **Do** set anything quoted from the user's real system (code, paths, severities) in monospace, and let the serif carry the argument.
- **Do** build depth from hairlines, tonal paper, and spacing. Flat at rest.
- **Do** hold to industrial restraint: if an element does not carry information or an action, remove it.

### Don't:
- **Don't** ship generic AI-SaaS dressing: no purple/indigo gradients, no glassmorphism, no floating blobs, no big-number hero-metric template, no gradient text.
- **Don't** use security clichés: no shield icons, padlocks, hooded hackers, fingerprint scanners, or matrix-green code rain.
- **Don't** go cute or playful: no mascots, no rounded bubbly illustrations, no pastel consumer friendliness.
- **Don't** reach for dark-mode neon to look "serious about security." This system is paper and daylight.
- **Don't** use `#fff` or `#000`, and don't let the redline touch anything that isn't a finding or the primary CTA.
- **Don't** add drop shadows at rest, or `border-left`/`border-right` colored stripes as accents. Structure is hairlines and tonal paper.
