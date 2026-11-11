export interface StackLayer {
	id: string;
	name: string;
	note: string;
	items: string[];
}

export interface Role {
	company: string;
	title: string;
	period: string;
	location: string;
	summary: string;
	highlights: string[];
}

export interface School {
	name: string;
	qualification: string;
	period: string;
	detail?: string;
	headline: string;
	headlineNote: string;
	subjects?: { subject: string; grade: string }[];
	awards?: string[];
}

export const profile = {
	name: "George Miles",
	role: "Senior Backend Engineer",
	tagline: "Backend at the core. Full stack from the ground up.",
	summary:
		"I own and run Stats.cc, and I build high-performance distributed systems: platforms processing billions of real-time events on Kubernetes clusters that stay up. The AI wave pulled me up the stack, so now I ship the frontend too.",
	location: "England · remote, worldwide",
	email: "hi@gmiles.dev",
	linkedin: "https://linkedin.com/in/gtmmiles",
};

// Ordered by when each layer entered the career: backend first, frontend last
export const stack: StackLayer[] = [
	{
		id: "backend",
		name: "backend",
		note: "where I started",
		items: ["Rust", "Node.js & Bun", "REST, GraphQL & gRPC", "Kafka", "OAuth 2.0 & MFA", "Microservices"],
	},
	{
		id: "data",
		name: "data",
		note: "what pulled me deeper",
		items: ["PostgreSQL", "ClickHouse", "Redis", "MongoDB", "MySQL", "SQLite"],
	},
	{
		id: "infrastructure",
		name: "infrastructure",
		note: "then I owned the platform",
		items: ["Kubernetes", "Docker", "GitOps", "CI/CD", "AWS", "Bare metal", "Terraform"],
	},
	{
		id: "frontend",
		name: "frontend",
		note: "the final piece",
		items: ["Vue & Nuxt", "React & Next.js", "TypeScript", "Tailwind CSS", "Electron"],
	},
];

export const roles: Role[] = [
	{
		company: "Stats.cc",
		title: "Owner",
		period: "Oct 2026 - Present",
		location: "Remote, UK",
		summary:
			"Took over the business I helped build. Now leading everything from infrastructure, backend and frontend to product direction and business strategy, on a mission to give 250 million gamers the tools to track, analyse and improve their performance.",
		highlights: [
			"Own product direction and business strategy end to end",
			"Still hands-on across infrastructure, backend and frontend",
		],
	},
	{
		company: "Stats.cc",
		title: "Founding Engineer",
		period: "Feb 2024 - Present",
		location: "Remote, UK",
		summary:
			"Joined the founders after building a similar side project around the same time. Led backend architecture and built and ran all of the infrastructure, then moved into full stack to ship frontend features too.",
		highlights: [
			"25+ Rust microservices on production Kubernetes",
			"Full system rewrite in Rust: 10x faster, ~20% cheaper",
			"GitOps pipelines shipping releases in under 10 minutes",
		],
	},
	{
		company: "Linkme",
		title: "Backend Engineer",
		period: "Apr - Jul 2025",
		location: "Remote, UK",
		summary:
			"Four-month contract architecting a TypeScript authentication service and integrating it with legacy systems, delivered while continuing to lead engineering at Stats.cc.",
		highlights: [
			"OAuth 2.0 + MFA, expanding login options from 1 to 4",
			"Replaced a brittle untyped flow with type-safe auth",
		],
	},
	{
		company: "Enthusiast Gaming",
		title: "Backend Engineer · Tabstats",
		period: "Mar 2022 - Jan 2023",
		location: "Remote, UK",
		summary: "Engineered high-performance backend services powering real-time player statistics and analysis.",
		highlights: [
			"Real-time processing of 3B+ in-game events",
			"Scaled the merged platform after the $11M Tabwire acquisition",
		],
	},
	{
		company: "Enthusiast Gaming",
		title: "Community Management · Tabwire",
		period: "Nov 2020 - Mar 2022",
		location: "Remote, UK",
		summary:
			"Joined Tabwire before the acquisition, providing responsive support across social accounts and forums, and built tooling for the team's moderation processes.",
		highlights: [
			"User pain points from support later shaped backend priorities",
			"Joined pre-acquisition; Tabwire sold to Enthusiast for $11M",
		],
	},
];

export const contracting = {
	bookingUrl: "https://cal.com/gmiles",
	pitch: "I take on a small number of contract projects: new builds from scratch, or new features, rewrites and performance work on what you already have.",
	points: [
		"Consultations are free. Book a 30 minute call and we'll talk through what you need.",
		"Quoted fixed or hourly, whichever suits the work.",
		"I only work with a few clients at a time, so I can give each project proper focus.",
	],
	terms: [
		{ term: "Subject to contract", detail: "every engagement starts with a signed agreement" },
		{ term: "Fully scoped", detail: "we agree exactly what's being built before work starts" },
		{ term: "Fixed or hourly", detail: "one price for a defined scope, or an hourly rate for ongoing work" },
		{ term: "50% deposit", detail: "half of the quote or estimate up front to book the work in" },
		{ term: "Balance on delivery", detail: "the rest is invoiced when the work is signed off" },
	],
};

export const schools: School[] = [
	{
		name: "Henley Business School",
		qualification: "BSc Entrepreneurship · University of Reading",
		period: "2023 - 2026",
		detail: "Business strategy, finance, and team management, studied alongside full-time engineering work.",
		headline: "First",
		headlineNote: "honours",
		awards: [
			"Best Overall Performance Business",
			"Best Business and Management Student (Entrepreneurship and Innovation)",
			"Dean's Excellence Award Entrepreneurship",
			"Henley Greenshoots Seed Finance Award 2026",
		],
	},
	{
		name: "Bexhill College",
		qualification: "A-Levels",
		period: "2020 - 2022",
		headline: "AAB",
		headlineNote: "a-levels",
		subjects: [
			{ subject: "Computer Science", grade: "A" },
			{ subject: "Business Studies", grade: "A" },
			{ subject: "English Language", grade: "B" },
		],
	},
];
