import DemoForm from "./components/DemoForm";
import Faq, { type QA } from "./components/Faq";

const SHELL = "mx-auto w-full max-w-5xl px-6 sm:px-8";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

type Speaker = "Caller" | "Stackmigo" | "System";

type Line = { who: Speaker; text: string };

type Capability = {
  id: string;
  title: string;
  meta: string; // mono call stamp
  status: string; // outcome badge
  lines: Line[];
  outcome: string;
};

const capabilities: Capability[] = [
  {
    id: "C-01",
    title: "Dispatches the 2 AM emergency",
    meta: "02:47 · after hours",
    status: "Answered · 2 rings",
    lines: [
      { who: "Caller", text: "My water heater burst — there's water everywhere." },
      {
        who: "Stackmigo",
        text: "That's an emergency. I'm texting Mike your address now — he can be there by 8 AM. You're booked.",
      },
    ],
    outcome: "The burst pipe becomes a booked morning job, not a missed call.",
  },
  {
    id: "C-02",
    title: "Books the appointment while you work",
    meta: "11:32 · line busy",
    status: "Booked",
    lines: [
      { who: "Caller", text: "Do you have anything for a cleaning next week?" },
      {
        who: "Stackmigo",
        text: "Tuesday 9:15 or Thursday 2:00 with Dr. Lee — which works? I'll text a confirmation and reminders.",
      },
    ],
    outcome: "Every open slot fills itself, checked against your real calendar.",
  },
  {
    id: "C-03",
    title: "Screens the spam before it reaches you",
    meta: "15:14 · screened",
    status: "Filtered",
    lines: [
      { who: "Caller", text: "Hi, I'm reaching out about your Google Business listing—" },
      {
        who: "Stackmigo",
        text: "We're not looking for marketing services. I'll take this number off the list.",
      },
    ],
    outcome: "Solicitors get declined. You only hear from real customers.",
  },
  {
    id: "C-04",
    title: "Answers three calls at once",
    meta: "12:05 · lunch rush",
    status: "3 at once",
    lines: [
      { who: "System", text: "Line 1 — booking a repair  →  booked" },
      { who: "System", text: "Line 2 — hours & pricing  →  answered" },
      { who: "System", text: "Line 3 — existing customer  →  routed to Sarah" },
    ],
    outcome: "No busy signal, no hold music, no voicemail — ever.",
  },
];

const steps = [
  {
    n: "1",
    title: "Point us at your line",
    text: "Forward your existing number or get a new local one. Nothing changes for your customers — the phone just always gets answered now.",
  },
  {
    n: "2",
    title: "We train it on your business",
    text: "Your services, hours, pricing, service area, and calendar. It learns how you talk and what you'd say, before it answers a single call.",
  },
  {
    n: "3",
    title: "It answers every call",
    text: "Books jobs, screens callers, dispatches emergencies, routes to your team when it should. Day, night, weekend, or three at once.",
  },
  {
    n: "4",
    title: "You get the details",
    text: "Every call summarized by text and email, booked straight into your calendar, and logged in your CRM. You stay in the loop without picking up.",
  },
];

type Plan = {
  name: string;
  aside?: string;
  price: string;
  unit: string;
  blurb: string;
  lines: string[];
  emphasized?: boolean;
};

const plans: Plan[] = [
  {
    name: "After-Hours",
    price: "$149",
    unit: "/mo",
    blurb:
      "Covers the calls you're already missing: nights, weekends, and the ones that ring while every line is busy.",
    lines: [
      "Nights, weekends & overflow",
      "Up to 150 calls / month",
      "Booking + detailed messages",
      "Every call texted to you",
      "Live in 48 hours",
    ],
  },
  {
    name: "Front Desk",
    aside: "The full receptionist",
    price: "$399",
    unit: "/mo",
    blurb:
      "A full-time receptionist that never clocks out. Answers, books, screens, dispatches, and routes — around the clock.",
    lines: [
      "24 / 7 / 365 answering",
      "Up to 600 calls / month",
      "Booking, screening & dispatch",
      "Calendar + CRM sync",
      "Your own local number",
      "Live-transfer to your team",
    ],
    emphasized: true,
  },
];

type AddOn = { name: string; price: string; unit: string; note: string };

const addOns: AddOn[] = [
  {
    name: "Reminders & follow-ups",
    price: "$79",
    unit: "/mo",
    note: "Outbound confirmations, no-show nudges, and review requests. Fewer empty chairs, more five-star reviews.",
  },
  {
    name: "Bilingual answering",
    price: "$49",
    unit: "/mo",
    note: "Every caller handled in English or Spanish by the same receptionist — no separate line, no fumbling.",
  },
  {
    name: "Dedicated number",
    price: "$15",
    unit: "/mo",
    note: "Keep your number or add a new local or toll-free line. We forward it or host it, your choice.",
  },
];

const faqs: QA[] = [
  {
    q: "Will callers know it's not a person?",
    a: "It introduces itself honestly and sounds natural — no robotic script, no \"press 1 for...\" menu. Most callers just get what they need and hang up happy. It's built to be the best version of your front desk on its best day, not a machine pretending to be human.",
  },
  {
    q: "Can it book into my calendar?",
    a: "Yes. It connects to Google Calendar, Calendly, and most practice-management and field-service scheduling tools. It checks real availability, books the slot, and sends the confirmation and reminders — no double-bookings.",
  },
  {
    q: "What about spam and robocalls?",
    a: "Screened before they ever reach you. Solicitors and marketers get politely declined and dropped from the queue. You only hear about real customers, and only in the way you asked to — text, email, or a live transfer.",
  },
  {
    q: "Can I keep my phone number?",
    a: "Yes. Forward your existing line to us and nothing changes for your customers, or get a new local or toll-free number. Either way you keep full control of your number.",
  },
  {
    q: "What happens if it can't handle a call?",
    a: "It never leaves a caller stranded. If something's outside what it knows, it takes a detailed message or transfers live to your team, then texts you the full context immediately so you can follow up fast.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses are live within 48 hours. We train it on your services, hours, pricing, and scheduling first — and you hear it answer a test call before it ever picks up for a real customer.",
  },
];

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

function SectionTag({ code, title }: { code: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[0.7rem] tracking-[0.16em] text-ink">{code}</span>
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-graphite-2">
        {title}
      </span>
    </div>
  );
}

function speakerClass(who: Speaker): string {
  if (who === "Stackmigo") return "text-signal";
  if (who === "System") return "text-graphite-2";
  return "text-graphite";
}

function CallCard({ cap }: { cap: Capability }) {
  return (
    <article className="flex flex-col gap-6 bg-paper p-8 sm:p-9">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-[0.7rem] tracking-wider text-graphite-2">{cap.id}</span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-graphite">
          {cap.status}
        </span>
      </div>

      <h3 className="text-xl leading-snug text-ink">{cap.title}</h3>

      {/* Transcript = the evidence, set in mono */}
      <div className="overflow-hidden border border-hairline bg-paper-3">
        <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-graphite-2">
            {cap.meta}
          </span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
        </div>
        <div className="flex flex-col gap-3 px-4 py-4 font-mono text-[0.74rem] leading-relaxed">
          {cap.lines.map((line, i) => (
            <div key={i} className="grid grid-cols-[5.5rem_1fr] gap-x-3">
              <span
                className={`uppercase tracking-[0.08em] ${speakerClass(line.who)}`}
              >
                {line.who === "Caller" ? "Caller" : line.who === "System" ? "" : "Stackmigo"}
              </span>
              <span className="text-ink-soft">{line.text}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[0.95rem] leading-relaxed text-graphite">{cap.outcome}</p>
    </article>
  );
}

const equalizer = [7, 13, 5, 16, 9, 20, 11, 6, 14];

function LineStatusCard() {
  const stats: [string, string][] = [
    ["Calls answered", "47"],
    ["Booked", "31"],
    ["After-hours", "9"],
    ["Avg. pickup", "1.8 rings"],
  ];
  return (
    <div className="border border-hairline bg-paper-2">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-graphite">
          Line status
        </span>
        <span className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
          <span aria-hidden="true" className="live-dot h-1.5 w-1.5 rounded-full bg-signal" />
          Live
        </span>
      </div>
      <dl className="divide-y divide-hairline font-mono text-[0.82rem]">
        {stats.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
            <dt className="uppercase tracking-[0.12em] text-graphite-2">{k}</dt>
            <dd className="text-right text-ink-soft tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="flex items-center gap-4 border-t border-hairline px-5 py-4">
        <div aria-hidden="true" className="flex h-6 items-end gap-[3px]">
          {equalizer.map((h, i) => (
            <span
              key={i}
              className={`w-[3px] ${i === 3 || i === 5 ? "bg-signal" : "bg-graphite-2"}`}
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
        <span className="font-mono text-[0.72rem] tracking-wide text-graphite-2">
          now: answering line 2
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-hairline bg-paper">
        <div className={`${SHELL} flex h-16 items-center justify-between`}>
          <a href="#top" className="text-lg tracking-tight text-ink">
            Stackmigo
          </a>
          <nav className="flex items-center gap-7 font-mono text-[0.72rem] uppercase tracking-widest text-graphite">
            <a href="#calls" className="hidden transition-colors hover:text-ink sm:inline">
              What it handles
            </a>
            <a href="#how" className="hidden transition-colors hover:text-ink md:inline">
              How it works
            </a>
            <a href="#pricing" className="hidden transition-colors hover:text-ink sm:inline">
              Pricing
            </a>
            <a href="#demo" className="text-ink transition-colors hover:text-signal">
              Book a demo
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section
          className={`${SHELL} grid gap-14 pt-20 pb-24 sm:pt-28 lg:grid-cols-12 lg:gap-10`}
        >
          <div className="lg:col-span-7">
            <p className="rise rise-1 font-mono text-[0.74rem] uppercase tracking-[0.16em] text-graphite">
              AI receptionists &amp; 24/7 answering
            </p>
            <h1 className="rise rise-2 mt-6 text-[clamp(2.5rem,6vw,4.25rem)] font-normal leading-[1.02] tracking-tight text-ink">
              Never let another call go to voicemail.
            </h1>
            <p className="rise rise-3 mt-7 max-w-[56ch] text-lg leading-relaxed text-graphite">
              {
                "Stackmigo answers every call to your business — books the job, screens the caller, dispatches the emergency, and texts you the details. Day, night, weekend, or three at once. Set up by an engineer, not a signup wizard."
              }
            </p>
            <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#demo"
                className="group inline-flex items-center gap-2.5 bg-signal px-7 py-3.5 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-paper transition-colors duration-200 ease-out hover:bg-signal-deep"
              >
                Book a demo
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </a>
              <a
                href="#calls"
                className="font-mono text-[0.78rem] uppercase tracking-widest text-ink underline decoration-hairline-strong underline-offset-4 transition-colors hover:decoration-signal"
              >
                See it answer a call
              </a>
            </div>
            <p className="mt-8 font-mono text-[0.72rem] tracking-wide text-graphite-2">
              Onboarding a limited number of businesses each week.
            </p>
          </div>

          {/* The live line: signature evidence element */}
          <div className="rise rise-3 lg:col-span-5 lg:pt-2">
            <LineStatusCard />
            <p className="mt-3 font-mono text-[0.7rem] leading-relaxed text-graphite-2">
              A single day on one customer&apos;s line.
            </p>
          </div>
        </section>

        {/* The stakes */}
        <section className="border-t border-hairline bg-paper">
          <div className={`${SHELL} py-20 sm:py-24`}>
            <SectionTag code="S-01" title="The cost of a missed call" />
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
              The call you miss is the customer your competitor keeps.
            </h2>
            <div className="mt-8 grid max-w-[64ch] gap-5 text-[1.05rem] leading-relaxed text-graphite">
              <p>
                {
                  "Most people who reach a voicemail don't leave one. They hang up and dial the next number on the list. For a plumber at 9 PM or a dental office at lunch, that isn't a lost call — it's a booked job that quietly went to someone else, and you never even knew the phone rang."
                }
              </p>
              <p>
                {
                  "After hours, during the rush, when every line is already busy: that is exactly when the calls that matter come in, and exactly when no one is there to pick up. Stackmigo is there. Every time. And one booked job a month usually pays for the whole year."
                }
              </p>
            </div>
          </div>
        </section>

        {/* What it handles */}
        <section id="calls" className="scroll-mt-20 border-t border-hairline bg-paper">
          <div className={`${SHELL} py-20 sm:py-24`}>
            <SectionTag code="S-02" title="What it handles" />
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
              Real calls, handled the way you would.
            </h2>
            <p className="mt-6 max-w-[58ch] text-[1.05rem] leading-relaxed text-graphite">
              {
                "A few of the calls Stackmigo takes every day, drawn from home-services and medical practices. Yours will sound like your business — trained on your services, your hours, your calendar."
              }
            </p>
            <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              {capabilities.map((cap) => (
                <CallCard key={cap.id} cap={cap} />
              ))}
            </div>
            <p className="mt-7 font-mono text-[0.82rem] leading-relaxed text-graphite-2">
              {"Booking, screening, dispatch, routing, messages, follow-up — one receptionist."}
            </p>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="scroll-mt-20 border-t border-hairline bg-paper">
          <div className={`${SHELL} py-20 sm:py-24`}>
            <SectionTag code="S-03" title="How it works" />
            <h2 className="mt-6 max-w-[18ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
              Live in 48 hours, then it just answers.
            </h2>
            <ol className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              {steps.map((s) => (
                <li key={s.n} className="flex flex-col gap-4 bg-paper p-8 sm:p-9">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.82rem] tabular-nums text-signal">
                      {s.n.padStart(2, "0")}
                    </span>
                    <h3 className="text-xl leading-snug text-ink">{s.title}</h3>
                  </div>
                  <p className="max-w-[46ch] text-[0.98rem] leading-relaxed text-graphite">
                    {s.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 border-t border-hairline bg-paper">
          <div className={`${SHELL} py-20 sm:py-24`}>
            <SectionTag code="S-04" title="What it costs" />
            <h2 className="mt-6 max-w-[16ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
              Flat monthly pricing, no &ldquo;contact sales.&rdquo;
            </h2>
            <p className="mt-6 max-w-[56ch] text-[1.05rem] leading-relaxed text-graphite">
              {
                "You know exactly what you pay and what you get. No contracts, no setup fee, cancel anytime."
              }
            </p>

            <div className="mt-12 grid gap-px border border-hairline bg-hairline lg:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col p-8 ${plan.emphasized ? "bg-paper-2" : "bg-paper"}`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="flex items-center gap-3 text-xl text-ink">
                      {plan.name}
                      {plan.aside && (
                        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-graphite-2">
                          {plan.aside}
                        </span>
                      )}
                    </h3>
                    <span className="font-mono text-2xl tabular-nums text-ink">
                      {plan.price}
                      <span className="text-graphite-2">{plan.unit}</span>
                    </span>
                  </div>
                  <p className="mt-4 max-w-[42ch] text-[0.98rem] leading-relaxed text-graphite">
                    {plan.blurb}
                  </p>
                  <ul
                    className={`mt-6 border-t font-mono text-[0.8rem] text-ink-soft ${
                      plan.emphasized ? "border-hairline-strong" : "border-hairline"
                    }`}
                  >
                    {plan.lines.map((line) => (
                      <li key={line} className="border-b border-hairline py-3">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            <h3 className="mt-14 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-graphite">
              Add to any plan
            </h3>
            <ul className="mt-5 border-t border-hairline">
              {addOns.map((t) => (
                <li
                  key={t.name}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 border-b border-hairline py-5"
                >
                  <span className="text-lg text-ink">{t.name}</span>
                  <span className="font-mono text-lg tabular-nums text-ink">
                    {t.price}
                    <span className="text-graphite-2">{t.unit}</span>
                  </span>
                  <p className="col-span-2 max-w-[64ch] text-[0.96rem] leading-relaxed text-graphite">
                    {t.note}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[58ch] font-mono text-[0.82rem] leading-relaxed text-graphite-2">
              {"Calls past your plan are $0.75 each. We onboard a limited number of businesses each week — book a demo to hold a slot."}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 border-t border-hairline bg-paper">
          <div className={`${SHELL} py-20 sm:py-24`}>
            <SectionTag code="S-05" title="The obvious questions" />
            <h2 className="mt-6 max-w-[18ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
              What you&apos;re probably wondering.
            </h2>
            <Faq items={faqs} />
          </div>
        </section>

        {/* Who runs it */}
        <section id="who" className="scroll-mt-20 border-t border-hairline bg-paper">
          <div className={`${SHELL} grid gap-12 py-20 sm:py-24 lg:grid-cols-12`}>
            <div className="lg:col-span-7">
              <SectionTag code="S-06" title="Who sets it up" />
              <h2 className="mt-6 max-w-[16ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
                Configured by a person, not a wizard.
              </h2>
              <div className="mt-8 grid max-w-[60ch] gap-5 text-[1.05rem] leading-relaxed text-graphite">
                <p>
                  {
                    "Stackmigo is John Patino. A computer engineer out of the University of Maryland with six-plus years shipping production software. Your receptionist is trained and tuned by that person — on your services, your hours, your calendar — not dropped into a self-serve form and left to guess."
                  }
                </p>
                <p>
                  {
                    "So when a call comes in at 2 AM, the thing that answers was set up by someone who understood your business first, and who stands behind how it handles the ones that matter."
                  }
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:pt-2">
              <dl className="border-t border-ink font-mono text-[0.82rem]">
                {[
                  ["Lead", "John Patino"],
                  ["Training", "Computer Engineer, U. of Maryland"],
                  ["Shipping", "6+ years, production software"],
                  ["Setup", "Done for you, live in 48 hours"],
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-hairline py-4">
                    <dt className="uppercase tracking-[0.14em] text-graphite-2">{k}</dt>
                    <dd className="mt-1.5 text-ink-soft">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Get started */}
        <section id="demo" className="scroll-mt-20 border-t border-hairline bg-paper">
          <div className={`${SHELL} py-20 sm:py-28`}>
            <SectionTag code="S-07" title="Get your line answered" />
            <h2 className="mt-6 max-w-[18ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
              Book a demo and hear it answer.
            </h2>
            <p className="mt-6 mb-10 max-w-[52ch] text-[1.05rem] leading-relaxed text-graphite">
              {
                "Tell us what your business does and we'll set up a receptionist trained on it. On the call, you'll hear it take a live one before you decide anything."
              }
            </p>
            <DemoForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-hairline bg-paper-2">
        <div
          className={`${SHELL} flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between`}
        >
          <div>
            <p className="text-lg tracking-tight text-ink">Stackmigo</p>
            <p className="mt-2 max-w-[40ch] text-[0.92rem] leading-relaxed text-graphite">
              AI receptionists and 24/7 answering for businesses that live on the phone.
            </p>
          </div>
          <div className="flex flex-col gap-3 font-mono text-[0.72rem] uppercase tracking-widest text-graphite sm:items-end">
            <nav className="flex gap-6">
              <a href="#calls" className="transition-colors hover:text-ink">
                What it handles
              </a>
              <a href="#pricing" className="transition-colors hover:text-ink">
                Pricing
              </a>
              <a href="#demo" className="transition-colors hover:text-ink">
                Book a demo
              </a>
            </nav>
            <p className="text-graphite-2">&copy; 2026 Stackmigo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
