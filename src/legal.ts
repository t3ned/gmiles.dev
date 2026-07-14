export interface LegalSection {
	heading: string;
	paragraphs: string[];
}

export interface LegalDoc {
	slug: string;
	title: string;
	updated: string;
	sections: LegalSection[];
}

export const legalDocs: LegalDoc[] = [
	{
		slug: "privacy",
		title: "Privacy Policy",
		updated: "14 July 2026",
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"gmiles.dev is the personal portfolio and contracting site of George Miles, a sole trader based in England. This site is built to collect as little about you as possible.",
				],
			},
			{
				heading: "What this site collects",
				paragraphs: [
					"No accounts, no cookies, no advertising and no tracking. Your theme preference (light or dark) is stored in your browser's local storage and never leaves your device.",
					"The site is served by Cloudflare, which may process technical data such as IP addresses transiently to deliver the site and protect it from abuse.",
				],
			},
			{
				heading: "What you send me",
				paragraphs: [
					"If you email me, I receive your email address and whatever you include in the message.",
					"If you book a consultation, the booking is handled by Morgen and I receive the details you provide, such as your name, email address and project notes.",
					"If you pay a consultation fee or invoice, payment is processed by Stripe. Your card details go to Stripe directly and never reach me. I receive confirmation of payment and basic billing details.",
				],
			},
			{
				heading: "How I use it",
				paragraphs: [
					"To respond to you, to scope and deliver work, and to keep the records a business is required to keep, such as contracts and invoices. I do not sell your data or add you to marketing lists.",
				],
			},
			{
				heading: "Third-party services",
				paragraphs: [
					"Cloudflare hosts the site, Morgen handles bookings and Stripe handles payments. Each processes your data under its own privacy policy.",
				],
			},
			{
				heading: "Retention",
				paragraphs: [
					"Business records such as contracts and invoices are kept for as long as UK law requires, which is typically six years. Everything else is deleted when it is no longer needed.",
				],
			},
			{
				heading: "Your rights",
				paragraphs: [
					"Under UK GDPR you can ask what I hold about you, ask for corrections, or ask for deletion where the law allows. Email hi@gmiles.dev and I will sort it. You can also complain to the ICO at ico.org.uk.",
				],
			},
			{
				heading: "Changes",
				paragraphs: ["Any changes to this policy will be posted on this page with an updated date."],
			},
		],
	},
	{
		slug: "terms",
		title: "Terms of Service",
		updated: "14 July 2026",
		sections: [
			{
				heading: "About",
				paragraphs: [
					"This site and the services described on it are provided by George Miles, a sole trader based in England. By using the site or booking a consultation you agree to these terms.",
				],
			},
			{
				heading: "Use of the site",
				paragraphs: [
					"The content on this site is provided for general information. It is provided as is, without warranties of accuracy or availability, and may change at any time.",
				],
			},
			{
				heading: "Consultations",
				paragraphs: [
					"Consultations are booked through the booking calendar and carry a fee of £150, which confirms your slot. The fee is credited in full toward your project if we proceed, and refunded if we do not. Full details are in the refund policy.",
					"You can reschedule free of charge with at least 24 hours notice.",
				],
			},
			{
				heading: "Engagements",
				paragraphs: [
					"All project work is subject to contract. Work is fully scoped before it starts, quoted at a fixed price for the agreed scope, and booked in with a 50% deposit. The remaining balance is due when the work is signed off.",
					"These are headline terms. The signed agreement for each engagement is the authoritative document and prevails over this page.",
				],
			},
			{
				heading: "Intellectual property",
				paragraphs: [
					"The content and design of this site belong to George Miles. Ownership of project deliverables is set out in each engagement's contract, and typically transfers to the client on final payment.",
				],
			},
			{
				heading: "Liability",
				paragraphs: [
					"To the extent permitted by law, I accept no liability arising from use of this site. Liability relating to contracted work is governed by the signed agreement for that engagement.",
				],
			},
			{
				heading: "Governing law",
				paragraphs: ["These terms are governed by the laws of England and Wales."],
			},
			{
				heading: "Contact",
				paragraphs: ["Questions about these terms: hi@gmiles.dev"],
			},
		],
	},
	{
		slug: "refunds",
		title: "Refund Policy",
		updated: "14 July 2026",
		sections: [
			{
				heading: "Consultation fees",
				paragraphs: [
					"The £150 consultation fee confirms your booking and is never lost to a genuine enquiry. If we go ahead with your project, the full £150 is credited against your first invoice. If either of us decides not to proceed, it is refunded in full.",
					"You can reschedule free of charge with at least 24 hours notice. If you cancel with less than 24 hours notice or do not attend, the fee may be forfeited.",
				],
			},
			{
				heading: "Project deposits",
				paragraphs: [
					"The 50% deposit books your project in. If you cancel before work has started, the deposit is refunded in full. Once work has started, refunds are governed by the signed agreement and typically account for work already completed.",
				],
			},
			{
				heading: "Final balance",
				paragraphs: [
					"The remaining balance is due when the work is signed off against the acceptance criteria agreed in the contract.",
				],
			},
			{
				heading: "How refunds are processed",
				paragraphs: [
					"Refunds are issued through Stripe to the original payment method, and typically arrive within 5 to 10 business days.",
				],
			},
			{
				heading: "Questions",
				paragraphs: ["If anything here is unclear, email hi@gmiles.dev before booking."],
			},
		],
	},
];
