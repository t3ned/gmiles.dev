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
		"I build high-performance distributed systems: platforms processing billions of real-time events on Kubernetes clusters that stay up. The AI wave pulled me up the stack, so now I ship the frontend too.",
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
		title: "Senior Backend Engineer & DevOps",
		period: "Feb 2024 - Present",
		location: "Remote, UK",
		summary:
			"Early member leading backend architecture and infrastructure for a gaming statistics platform on a mission to help 500 million players improve.",
		highlights: [
			"25+ Rust microservices on production Kubernetes",
			"Full system rewrite in Rust: 10x faster, ~20% cheaper",
			"GitOps pipelines shipping releases in under 10 minutes",
		],
	},
	{
		company: "LinkMe",
		title: "Senior Backend Engineer",
		period: "Apr - Jul 2025",
		location: "Remote, UK",
		summary:
			"Four-month contract designing and shipping a TypeScript authentication service, delivered while continuing to lead engineering at Stats.cc.",
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
		company: "Tabwire",
		title: "Operations Engineer",
		period: "Nov 2020 - Mar 2022",
		location: "Remote, UK",
		summary:
			"First production engineering: built internal moderation tooling for team workflows across social platforms and community forums.",
		highlights: [
			"User pain points from support later shaped backend priorities",
			"Joined pre-acquisition; Tabwire sold to Enthusiast for $11M",
		],
	},
];

export const contracting = {
	bookingUrl: "https://book.morgen.so/george",
	pitch: "I take on a small number of contract and commission projects: MVPs, system rewrites, performance work, and full-stack builds.",
	minimum: "£750",
	capacity:
		"I keep client slots deliberately limited. Live availability is on the booking calendar: if you can see a slot, I can take you on.",
	consultation: "Consultations are £150, credited in full toward your project. If we don't go ahead, it's refunded.",
	terms: [
		{ term: "Subject to contract", detail: "every engagement starts with a signed agreement" },
		{ term: "Fully scoped", detail: "we agree exactly what's being built before work starts" },
		{ term: "Fixed quote", detail: "one price for the agreed scope, no surprises" },
		{ term: "50% deposit", detail: "half up front to book the work in" },
		{ term: "Balance on delivery", detail: "the rest is due when the work is signed off" },
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
			"Best Business and Management Student (Entrepreneurship)",
			"Dean's Excellence Award Entrepreneurship",
			"Greenshoots Seed Finance Award 2026",
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
