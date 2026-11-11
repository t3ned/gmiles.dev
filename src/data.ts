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
	tagline: "Owner of Stats.cc, giving 250 million players the tools to track, analyse and improve their performance.",
	summary:
		"I joined Stats.cc as a founding engineer and now run the business. My background is high-performance backend work: complete rewrites in Rust, platforms processing over 3 billion real-time events, and the Kubernetes clusters underneath. These days I work across the whole stack, from Vue frontends to GitOps deployments.",
	location: "Based in England, working remotely",
	email: "hi@gmiles.dev",
	linkedin: "https://linkedin.com/in/gtmmiles",
};

// Ordered by when each layer entered the career: backend first, frontend last
export const stack: StackLayer[] = [
	{
		id: "backend",
		name: "Backend",
		note: "Where I started",
		items: ["Rust", "Node.js & Bun", "REST, GraphQL & gRPC", "Kafka", "OAuth 2.0 & MFA", "Microservices"],
	},
	{
		id: "data",
		name: "Data",
		note: "What pulled me deeper",
		items: ["PostgreSQL", "ClickHouse", "Redis", "MongoDB", "MySQL", "SQLite"],
	},
	{
		id: "infrastructure",
		name: "Infrastructure",
		note: "Then I owned the platform",
		items: ["Kubernetes", "Docker", "GitOps", "CI/CD", "AWS", "Bare metal", "Terraform"],
	},
	{
		id: "frontend",
		name: "Frontend",
		note: "The final piece",
		items: ["Vue & Nuxt", "React & Next.js", "TypeScript", "Tailwind CSS", "Electron"],
	},
];

export const roles: Role[] = [
	{
		company: "Stats.cc",
		title: "Owner, previously Founding Engineer",
		period: "Feb 2024 - Present",
		location: "Remote, UK",
		summary:
			"Joined the founders in 2024 to lead backend architecture and run all of the infrastructure for a gaming statistics platform. Took over the business in October 2026 and now handle everything from infrastructure to product direction and strategy.",
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
			"Four-month contract building an authentication service with OAuth 2.0 and MFA, integrated with the existing legacy systems, alongside my work at Stats.cc.",
		highlights: [
			"OAuth 2.0 + MFA, expanding login options from 1 to 4",
			"Replaced a brittle untyped flow with type-safe auth",
		],
	},
	{
		company: "Enthusiast Gaming",
		title: "Backend Engineer, Tabstats",
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
		title: "Community Management",
		period: "Nov 2020 - Mar 2022",
		location: "Remote, UK",
		summary:
			"Customer support across social accounts and forums before Enthusiast Gaming's $11M acquisition of Tabwire.",
		highlights: [
			"Built tooling to support the team's moderation processes",
			"What players struggled with later shaped my backend priorities",
		],
	},
];

export const contracting = {
	enquirySubject: "Consultation booking",
	pitch: "I take on a small number of contract and commission projects: MVPs, system rewrites, performance work, and full-stack builds.",
	consultation:
		"Consultations are free and take 30 minutes. Email me a few lines on what you need and we'll pick a time.",
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
		qualification: "BSc Entrepreneurship, University of Reading",
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
