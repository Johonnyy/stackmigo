"use client";

import { useId, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm() {
  const emailId = useId();
  const stackId = useId();
  const errorId = useId();

  const [email, setEmail] = useState("");
  const [stack, setStack] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) {
      setFieldError("Enter your email so we can reach you.");
      return;
    }
    if (!EMAIL_RE.test(trimmed)) {
      setFieldError("That doesn't look like an email yet. Example: you@company.com");
      return;
    }

    setFieldError(null);
    setStatus("submitting");

    try {
      // Waitlist capture is stubbed pending backend wiring (form endpoint / list).
      // The flow, validation, and states are real; the network call is not yet.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-t border-ink pt-7"
      >
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-redline">
          On the list
        </p>
        <p className="mt-3 max-w-[46ch] text-xl leading-snug text-ink">
          You&apos;re in line. We&apos;ll email{" "}
          <span className="font-mono text-base text-ink-soft">{email.trim()}</span>{" "}
          when an audit slot opens.
        </p>
        <p className="mt-3 max-w-[46ch] text-[0.95rem] leading-relaxed text-graphite">
          No list, no drip sequence. One message, when there&apos;s a spot.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border-t border-ink pt-7">
      <div className="flex flex-col gap-6 sm:max-w-md">
        <div>
          <label
            htmlFor={emailId}
            className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-graphite"
          >
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldError) setFieldError(null);
            }}
            aria-invalid={fieldError ? true : undefined}
            aria-describedby={fieldError ? errorId : undefined}
            disabled={status === "submitting"}
            className="mt-2 w-full border-b border-hairline-strong bg-transparent pb-2 font-mono text-base text-ink placeholder:text-graphite-2 transition-colors duration-200 focus:border-redline focus:outline-none disabled:opacity-60"
          />
        </div>

        <div>
          <label
            htmlFor={stackId}
            className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-graphite"
          >
            What did you build it with?{" "}
            <span className="normal-case tracking-normal text-graphite-2">(optional)</span>
          </label>
          <input
            id={stackId}
            name="stack"
            type="text"
            placeholder="Next.js + Supabase, Cursor, v0, ..."
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            disabled={status === "submitting"}
            className="mt-2 w-full border-b border-hairline-strong bg-transparent pb-2 font-mono text-base text-ink placeholder:text-graphite-2 transition-colors duration-200 focus:border-redline focus:outline-none disabled:opacity-60"
          />
        </div>

        {fieldError && (
          <p id={errorId} role="alert" className="font-mono text-[0.8rem] leading-relaxed text-redline-deep">
            {fieldError}
          </p>
        )}

        {status === "error" && (
          <p role="alert" className="font-mono text-[0.8rem] leading-relaxed text-redline-deep">
            That didn&apos;t send. Check your connection and try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2.5 self-start bg-redline px-7 py-3.5 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-paper transition-colors duration-200 ease-out hover:bg-redline-deep focus-visible:bg-redline-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Joining the list" : "Join the waitlist"}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
          >
            &rarr;
          </span>
        </button>
      </div>
    </form>
  );
}
