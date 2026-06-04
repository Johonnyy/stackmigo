"use client";

import { useState } from "react";

export type Severity = "Critical" | "High" | "Medium";

export type Finding = {
  id: string;
  title: string;
  severity: Severity;
  evidence: string;
  consequence: string;
};

function severityClass(severity: Severity): string {
  switch (severity) {
    case "Critical":
      return "text-redline";
    case "High":
      return "text-ink";
    default:
      return "text-graphite";
  }
}

function FindingRow({ finding, defaultOpen }: { finding: Finding; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `finding-panel-${finding.id}`;
  const buttonId = `finding-button-${finding.id}`;

  return (
    <li className="border-t border-hairline">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group grid w-full grid-cols-[2.75rem_1fr_auto] items-baseline gap-x-4 py-5 text-left transition-colors duration-200 ease-out hover:bg-paper-2 sm:gap-x-6 sm:py-6"
        >
          <span className="font-mono text-[0.7rem] tracking-wider text-graphite-2 tabular-nums">
            {finding.id}
          </span>
          <span className="text-lg font-normal leading-snug text-ink sm:text-xl">
            {finding.title}
          </span>
          <span className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${
                finding.severity === "Critical" ? "bg-redline" : "bg-transparent"
              }`}
            />
            <span
              className={`font-mono text-[0.65rem] uppercase tracking-[0.14em] ${severityClass(
                finding.severity,
              )}`}
            >
              {finding.severity}
            </span>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden" aria-hidden={!open}>
          <div className="grid grid-cols-[2.75rem_1fr] gap-x-4 pb-7 sm:gap-x-6">
            <span aria-hidden="true" />
            <div>
              <pre className="overflow-x-auto rounded-[2px] bg-paper-3 px-4 py-3 font-mono text-[0.78rem] leading-relaxed text-ink-soft">
                <code>{finding.evidence}</code>
              </pre>
              <p className="mt-4 max-w-[60ch] text-[0.98rem] leading-relaxed text-graphite">
                {finding.consequence}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function FindingsLedger({ findings }: { findings: Finding[] }) {
  return (
    <ol className="mt-12 border-b border-hairline">
      {findings.map((finding, i) => (
        <FindingRow key={finding.id} finding={finding} defaultOpen={i === 0} />
      ))}
    </ol>
  );
}
