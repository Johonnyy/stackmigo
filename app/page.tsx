import WaitlistForm from "./components/WaitlistForm";

const SHELL = "mx-auto w-full max-w-5xl px-6 sm:px-8";


type Tier = {
	name: string;
	price: string;
	unit?: string;
	note: string;
};

const addOns: Tier[] = [
	{
		name: "Growth add-on",
		price: "$199",
		note: "De-AI the interface, tighten the copy, fix the obvious SEO and conversion leaks. Standalone or bundled onto a Full Audit.",
	},
	{
		name: "Done-for-you patch",
		price: "$1,200",
		note: "We fix what the audit found, not just flag it. You get back a codebase with the holes closed.",
	},
];

const shield: Tier[] = [
	{
		name: "Shield",
		price: "$99",
		unit: "/mo",
		note: "For pre-revenue builders. Automated monthly re-scan and a delta report on what changed since the last one.",
	},
	{
		name: "Shield+",
		price: "$249",
		unit: "/mo",
		note: "For teams past $5K MRR. Adds a quarterly manual review, a private Slack channel, and a security certificate.",
	},
];

const steps = [
	{
		n: "1",
		text: "You share access. A URL for a surface scan, or the repository for a full review.",
	},
	{
		n: "2",
		text: "An engineer reads it. By hand and with tooling, not a scanner's raw output dumped on you.",
	},
	{
		n: "3",
		text: "You get the report. Every finding ranked by severity, with the exact location and the fix.",
	},
	{
		n: "4",
		text: "We walk it through. A call to make sure the fixes actually land, on every Full Audit.",
	},
];

type Finding = {
	id: string;
	title: string;
	severity: "Critical" | "High";
	consequence: string;
};
const findings: Finding[] = [
	{
		id: "F-01",
		title: "Secret keys shipped to the browser",
		severity: "Critical",
		consequence: "A master key in the browser. Read or write every row.",
	},
	{
		id: "F-02",
		title: "Endpoints that never check who is asking",
		severity: "Critical",
		consequence: "Change the number, read another user's record.",
	},
	{
		id: "F-04",
		title: "String-built SQL queries",
		severity: "High",
		consequence: "One input rewrites the query into a full dump.",
	},
	{
		id: "F-03",
		title: "Row-level security switched off",
		severity: "High",
		consequence: "One public key pages through every tenant's data.",
	},
];

function SeverityTag({ severity }: { severity: "Critical" | "High" }) {
	return (
		<span className="flex items-center gap-2">
			{severity === "Critical" && (
				<span
					aria-hidden="true"
					className="h-1.5 w-1.5 rounded-full bg-redline"
				/>
			)}
			<span
				className={`font-mono text-[0.62rem] uppercase tracking-[0.14em] ${
					severity === "Critical" ? "text-redline" : "text-ink"
				}`}
			>
				{severity}
			</span>
		</span>
	);
}

function FindingIllustration({ id }: { id: string }) {
	const frame =
		"overflow-x-auto border border-hairline bg-paper-3 font-mono text-[0.72rem] leading-relaxed";
	if (id === "F-01") {
		return (
			<div className={frame}>
				<div className="border-b border-hairline px-4 py-2.5 text-graphite-2">
					app.bundle.js · sent to the browser
				</div>
				<div className="px-4 py-3.5 text-ink-soft">
					createClient(url,
					<br />
					&nbsp;&nbsp;&quot;<span className="text-graphite">eyJhbGci…</span>
					<span className="text-redline">service_role</span>&quot;)
				</div>
			</div>
		);
	}
	if (id === "F-02") {
		return (
			<div className={frame}>
				<div className="border-b border-hairline px-4 py-2.5 text-graphite-2">
					GET /api/users/:id
				</div>
				<div className="px-4 py-3.5 text-ink-soft">
					…/users/1041 <span className="text-graphite">200 · you</span>
					<br />
					…/users/<span className="text-redline">1042</span>{" "}
					<span className="text-redline">200 · not you</span>
				</div>
			</div>
		);
	}
	if (id === "F-04") {
		return (
			<div className={frame}>
				<div className="border-b border-hairline px-4 py-2.5 text-graphite-2">
					login form → query
				</div>
				<div className="px-4 py-3.5 text-ink-soft">
					email = <span className="text-redline">&apos; OR 1=1 --</span>
					<br />
					SELECT * FROM users
					<br />
					WHERE email=&apos;
					<span className="text-redline">&apos; OR 1=1 --</span>&apos;
				</div>
			</div>
		);
	}
	return (
		<div className={frame}>
			<div className="border-b border-hairline px-3 py-1.5 text-graphite-2">
				GET /rest/v1/invoices
			</div>
			<div className="px-3 py-2.5 text-ink-soft">
				301 acme <span className="text-graphite">$4,200</span>
				<br />
				302 globex <span className="text-redline">$9,100</span>
				<br />
				303 initech <span className="text-redline">$880</span>
				<br />
				<span className="text-graphite-2">every tenant, one key</span>
			</div>
		</div>
	);
}

function SectionTag({ code, title }: { code: string; title: string }) {
	return (
		<div className="flex items-baseline gap-3">
			<span className="font-mono text-[0.7rem] tracking-[0.16em] text-ink">
				{code}
			</span>
			<span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-graphite-2">
				{title}
			</span>
		</div>
	);
}

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
						<a
							href="#findings"
							className="hidden transition-colors hover:text-ink sm:inline"
						>
							What we find
						</a>
						<a
							href="#pricing"
							className="hidden transition-colors hover:text-ink sm:inline"
						>
							Pricing
						</a>
						<a
							href="#who"
							className="hidden transition-colors hover:text-ink md:inline"
						>
							Who
						</a>
						<a
							href="#waitlist"
							className="text-ink transition-colors hover:text-redline"
						>
							Join waitlist
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
							Security &amp; liability audits for AI-built apps
						</p>
						<h1 className="rise rise-2 mt-6 text-[clamp(2.5rem,6vw,4.25rem)] font-normal leading-[1.02] tracking-tight text-ink">
							Find what your app gives away before someone else does.
						</h1>
						<p className="rise rise-3 mt-7 max-w-[54ch] text-lg leading-relaxed text-graphite">
							{
								"Stackmigo reviews AI-built apps for the security and liability gaps that ship with fast code: exposed secrets, missing authorization, unsafe data access. You get a precise report of what is wrong, where it lives, and how to close it. Read by an engineer, not a dashboard."
							}
						</p>
						<div className="rise rise-4 mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
							<a
								href="#waitlist"
								className="group inline-flex items-center gap-2.5 bg-redline px-7 py-3.5 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-paper transition-colors duration-200 ease-out hover:bg-redline-deep"
							>
								Join the waitlist
								<span
									aria-hidden="true"
									className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
								>
									&rarr;
								</span>
							</a>
							<a
								href="#findings"
								className="font-mono text-[0.78rem] uppercase tracking-widest text-ink underline decoration-hairline-strong underline-offset-4 transition-colors hover:decoration-redline"
							>
								See what we look for
							</a>
						</div>
						<p className="mt-8 font-mono text-[0.72rem] tracking-wide text-graphite-2">
							Taking a limited number of audits at a time.
						</p>
					</div>

					{/* Report stamp: the field-report masthead as on-brand imagery */}
					<div className="rise rise-3 lg:col-span-5">
						<div className="border border-hairline bg-paper-2">
							<div className="flex items-center justify-between border-b border-hairline px-5 py-3">
								<span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-graphite">
									Pre-audit sample
								</span>
								<span className="font-mono text-[0.68rem] tracking-[0.16em] text-graphite-2">
									REV 2026.1
								</span>
							</div>
							<dl className="divide-y divide-hairline font-mono text-[0.82rem]">
								{[
									["Subject", "AI-built web app"],
									["Method", "Manual review + tooling"],
									["Scope", "Auth · API · data · deps"],
								].map(([k, v]) => (
									<div
										key={k}
										className="flex items-baseline justify-between gap-4 px-5 py-3.5"
									>
										<dt className="uppercase tracking-[0.12em] text-graphite-2">
											{k}
										</dt>
										<dd className="text-right text-ink-soft">{v}</dd>
									</div>
								))}
								<div className="flex items-baseline justify-between gap-4 px-5 py-3.5">
									<dt className="uppercase tracking-[0.12em] text-graphite-2">
										Findings
									</dt>
									<dd className="flex items-center gap-2 text-right text-ink">
										<span
											aria-hidden="true"
											className="h-1.5 w-1.5 rounded-full bg-redline"
										/>
										8 patterns flagged
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</section>

				{/* The stakes */}
				<section className="border-t border-hairline bg-paper">
					<div className={`${SHELL} py-20 sm:py-24`}>
						<SectionTag code="S-01" title="The stakes" />
						<h2 className="mt-6 max-w-[20ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
							Speed has a cost nobody quotes you.
						</h2>
						<div className="mt-8 grid max-w-[64ch] gap-5 text-[1.05rem] leading-relaxed text-graphite">
							<p>
								{
									"AI-assisted development collapsed the time between an idea and something running in production. It did not collapse the work of making that thing safe to run. The review that used to sit between writing code and shipping it now often does not happen at all."
								}
							</p>
							<p>
								{
									"So what ships is software that works in the demo and leaks in production: credentials baked into the client, endpoints that never check who is asking, database rules that trust the caller completely. None of it announces itself. It waits until a real user, or someone hunting for it, finds the opening first."
								}
							</p>
						</div>
					</div>
				</section>

				{/* What we find */}
				<section
					id="findings"
					className="scroll-mt-20 border-t border-hairline bg-paper"
				>
						<div className={`${SHELL} py-20 sm:py-24`}>
							<SectionTag code="S-02" title="What we find" />
							<h2 className="mt-6 max-w-[18ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
								What we look for.
							</h2>
							<p className="mt-6 max-w-[58ch] text-[1.05rem] leading-relaxed text-graphite">
								{
									"A sample of the failure patterns we find most often in AI-built apps. Yours will have its own."
								}
							</p>
							<div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
								{findings.map((f) => (
									<article
										key={f.id}
										className="flex flex-col gap-6 bg-paper p-8 sm:p-9"
									>
										<div className="flex items-baseline justify-between gap-3">
											<span className="font-mono text-[0.7rem] tracking-wider text-graphite-2">
												{f.id}
											</span>
											<SeverityTag severity={f.severity} />
										</div>
										<h3 className="text-xl leading-snug text-ink">
											{f.title}
										</h3>
										<FindingIllustration id={f.id} />
										<p className="text-[0.95rem] leading-relaxed text-graphite">
											{f.consequence}
										</p>
									</article>
								))}
							</div>
							<p className="mt-7 font-mono text-[0.82rem] leading-relaxed text-graphite-2">
								{
									"Four shown. A Full Audit checks far more, against your actual code."
								}
							</p>
						</div>
				</section>

				{/* Pricing */}
				<section
					id="pricing"
					className="scroll-mt-20 border-t border-hairline bg-paper"
				>
					<div className={`${SHELL} py-20 sm:py-24`}>
						<SectionTag code="S-04" title="What it costs" />
						<h2 className="mt-6 max-w-[16ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
							Fixed prices, no &ldquo;contact sales.&rdquo;
						</h2>
						<p className="mt-6 max-w-[56ch] text-[1.05rem] leading-relaxed text-graphite">
							{
								"You know exactly what you are paying, and what you get, before anything starts."
							}
						</p>

						{/* Two flagship audits */}
						<div className="mt-12 grid gap-px border border-hairline bg-hairline lg:grid-cols-2">
							{/* Starter */}
							<div className="flex flex-col bg-paper p-8">
								<div className="flex items-baseline justify-between gap-4">
									<h3 className="text-xl text-ink">Starter Audit</h3>
									<span className="font-mono text-2xl tabular-nums text-ink">
										$149
									</span>
								</div>
								<p className="mt-4 max-w-[40ch] text-[0.98rem] leading-relaxed text-graphite">
									{
										"A read before you commit. Surface scan, no codebase access, delivered as an async walkthrough."
									}
								</p>
								<ul className="mt-6 border-t border-hairline font-mono text-[0.8rem] text-ink-soft">
									{[
										"Surface scan, no repo access",
										"Async Loom walkthrough",
										"48-hour turnaround",
									].map((line) => (
										<li key={line} className="border-b border-hairline py-3">
											{line}
										</li>
									))}
								</ul>
							</div>

							{/* Full, emphasized */}
							<div className="flex flex-col bg-paper-2 p-8">
								<div className="flex items-baseline justify-between gap-4">
									<h3 className="flex items-center gap-3 text-xl text-ink">
										Full Audit
										<span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-graphite-2">
											The core review
										</span>
									</h3>
									<span className="font-mono text-2xl tabular-nums text-ink">
										$499
									</span>
								</div>
								<p className="mt-4 max-w-[40ch] text-[0.98rem] leading-relaxed text-graphite">
									{
										"The real thing. Codebase access and a security deep review, with a report and a call to walk it through."
									}
								</p>
								<ul className="mt-6 border-t border-hairline-strong font-mono text-[0.8rem] text-ink-soft">
									{[
										"Codebase access, manual review",
										"Auth · API · data rules · dependencies",
										"Full branded report + 1-hour call",
										"5 business days",
									].map((line) => (
										<li key={line} className="border-b border-hairline py-3">
											{line}
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Add-ons */}
						<h3 className="mt-14 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-graphite">
							Add to your audit
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
									</span>
									<p className="col-span-2 max-w-[64ch] text-[0.96rem] leading-relaxed text-graphite">
										{t.note}
									</p>
								</li>
							))}
						</ul>

						{/* Shield */}
						<h3 className="mt-14 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-graphite">
							Stay covered
						</h3>
						<ul className="mt-5 border-t border-hairline">
							{shield.map((t) => (
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
							{"Audits are booked from the waitlist while we are at capacity."}
						</p>
					</div>
				</section>

				{/* Who reads your code */}
				<section
					id="who"
					className="scroll-mt-20 border-t border-hairline bg-paper"
				>
					<div
						className={`${SHELL} grid gap-12 py-20 sm:py-24 lg:grid-cols-12`}
					>
						<div className="lg:col-span-7">
							<SectionTag code="S-05" title="Who reads your code" />
							<h2 className="mt-6 max-w-[16ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
								A person, not a dashboard.
							</h2>
							<div className="mt-8 grid max-w-[60ch] gap-5 text-[1.05rem] leading-relaxed text-graphite">
								<p>
									{
										"Stackmigo is John Patino. A computer engineer out of the University of Maryland, with six-plus years building and shipping production software. The background that ships fast is the same one that knows where fast breaks."
									}
								</p>
								<p>
									{
										"Your audit is done by that person, read line by line, not handed to a scanner and emailed back. When the report says a thing is wrong, someone who has shipped the same kind of app stands behind it."
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
								].map(([k, v]) => (
									<div key={k} className="border-b border-hairline py-4">
										<dt className="uppercase tracking-[0.14em] text-graphite-2">
											{k}
										</dt>
										<dd className="mt-1.5 text-ink-soft">{v}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				</section>

				{/* Waitlist */}
				<section
					id="waitlist"
					className="scroll-mt-20 border-t border-hairline bg-paper"
				>
					<div className={`${SHELL} py-20 sm:py-28`}>
						<SectionTag code="S-06" title="Get in line" />
						<h2 className="mt-6 max-w-[18ch] text-[clamp(1.75rem,3.6vw,2.5rem)] font-normal leading-[1.08] tracking-tight text-ink">
							Get in line for an audit.
						</h2>
						<p className="mt-6 mb-10 max-w-[52ch] text-[1.05rem] leading-relaxed text-graphite">
							{
								"We take a limited number of audits at a time. Leave your email and what you built; you will be first to know when a slot opens."
							}
						</p>
						<WaitlistForm />
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
							Security and liability audits for AI-built apps.
						</p>
					</div>
					<div className="flex flex-col gap-3 font-mono text-[0.72rem] uppercase tracking-widest text-graphite sm:items-end">
						<nav className="flex gap-6">
							<a href="#findings" className="transition-colors hover:text-ink">
								What we find
							</a>
							<a href="#pricing" className="transition-colors hover:text-ink">
								Pricing
							</a>
							<a href="#waitlist" className="transition-colors hover:text-ink">
								Waitlist
							</a>
						</nav>
						<p className="text-graphite-2">&copy; 2026 Stackmigo</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
