"use client";

import { useId, useState } from "react";

export type QA = {
  q: string;
  a: string;
};

function FaqRow({ item, defaultOpen }: { item: QA; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  const panelId = `faq-panel-${uid}`;
  const buttonId = `faq-button-${uid}`;

  return (
    <li className="border-t border-hairline">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group grid w-full grid-cols-[1fr_auto] items-baseline gap-x-4 py-5 text-left transition-colors duration-200 ease-out hover:bg-paper-2 sm:gap-x-6 sm:py-6"
        >
          <span className="text-lg font-normal leading-snug text-ink sm:text-xl">
            {item.q}
          </span>
          <span
            aria-hidden="true"
            className={`font-mono text-lg leading-none text-graphite-2 transition-transform duration-300 ease-out ${
              open ? "rotate-45 text-signal" : ""
            }`}
          >
            +
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
          <p className="max-w-[64ch] pr-8 pb-7 text-[1.02rem] leading-relaxed text-graphite">
            {item.a}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function Faq({ items }: { items: QA[] }) {
  return (
    <ol className="mt-10 border-b border-hairline">
      {items.map((item, i) => (
        <FaqRow key={item.q} item={item} defaultOpen={i === 0} />
      ))}
    </ol>
  );
}
