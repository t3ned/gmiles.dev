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
	awards?: { name: string; about: string }[];
}

const bookingUrl = "https://cal.com/gmiles";

export const profile = {
	name: "George Miles",
	role: "Managing Director, stats.cc",
	companyUrl: "https://stats.cc",
	// Search result title and snippet for the home page
	metaTitle: "George Miles · Engineer & Managing Director, stats.cc",
	description:
		"George Miles, Managing Director of stats.cc and a backend-first full-stack engineer. Rust, distributed systems and modern frontend. Free 30 minute consultation.",
	summary:
		"I start with the people using our product and work back to the code. I've built real-time pipelines that handle billions of events and the infrastructure that keeps them running, and these days I ship the product on top as well.",
	photoQuip: "Hey, you're too close to my face.",
	location: "England",
	timeZone: "Europe/London",
	remote: "Remote, worldwide",
	email: "hi@gmiles.dev",
	linkedin: "https://linkedin.com/in/gtmmiles",
	resumeUrl:
		"mailto:hi@gmiles.dev?subject=Resume%20request&body=Hi%20George%2C%0A%0AI%20found%20gmiles.dev%20and%20would%20like%20a%20copy%20of%20your%20resume.%0A%0AName%3A%0ACompany%3A%0ARole%20in%20mind%3A%0A%0AThanks",
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

// Replies for the stack terminal easter egg. Lines that are URLs render as links
export const terminal: Record<string, string[]> = {
	help: [
		"whoami     who is this",
		"ls         list sections",
		"cd <dir>   jump to a section",
		"hire       book a free call",
		"clear      clear the screen",
	],
	whoami: ["George Miles, Managing Director at stats.cc"],
	ls: ["experience  stack  education  hire"],
	hire: ["Free 30 minute consultation, no commitment:", bookingUrl],
	"sudo hire george": ["[sudo] password for visitor: ********", "Access granted.", bookingUrl],
	"rm -rf /": ["Nice try."],
	exit: ["There is no escape. Try hire instead."],
	coffee: ["418 I'm a teapot"],
	vim: ["You are now trapped. Just kidding, this is not vim."],
};

export const roles: Role[] = [
	{
		company: "Stats.cc",
		title: "Managing Director",
		period: "Oct 2026 – Present",
		summary:
			"Took over the business I helped build. Now leading everything from infrastructure, backend and frontend to product direction and business strategy, on a mission to give 250 million gamers the tools to track, analyse and improve their performance.",
		highlights: [
			"Own product direction and business strategy end to end",
			"Still hands-on across infrastructure, backend and frontend",
			"Implementing user feedback in real time",
		],
	},
	{
		company: "Stats.cc",
		title: "Founding Engineer",
		period: "Feb 2024 – Present",
		summary:
			"Joined the founders after building a similar side project around the same time. Led backend architecture and built and ran all of the infrastructure, then moved into full stack to ship frontend features too.",
		highlights: [
			"25+ microservices on production Kubernetes",
			"Full system rewrite in Rust: 10x faster, ~20% cheaper",
			"Databases holding tens of billions of records",
			"GitOps pipelines shipping releases in under 7 minutes",
		],
	},
	{
		company: "Linkme",
		title: "Backend Engineer",
		period: "Apr – Jul 2025",
		summary:
			"Architected a TypeScript authentication service and integrated it with legacy systems, delivered while continuing to lead engineering at Stats.cc.",
		highlights: [
			"OAuth 2.0 + MFA, expanding login options from 1 to 4",
			"Replaced a brittle untyped flow with type-safe auth",
			"Worked on a high-performance Rust service",
		],
	},
	{
		company: "Enthusiast Gaming",
		title: "Backend Engineer · Tabstats",
		period: "Mar 2022 – Jan 2023",
		summary: "Engineered high-performance backend services powering real-time player statistics and analysis.",
		highlights: [
			"Backend service ingesting 3B+ in-game events in real time",
			"Built the app's match event processing and storage for fast local querying",
		],
	},
	{
		company: "Enthusiast Gaming",
		title: "Community Management · Tabwire",
		period: "Nov 2020 – Mar 2022",
		summary:
			"Provided responsive support across Tabwire's social accounts and forums, and built tooling for the team's moderation processes.",
		highlights: [
			"Improved the moderation pipeline",
			"User pain points from support later shaped backend priorities",
			"Joined before Enthusiast Gaming acquired Tabwire for $11M",
		],
	},
];

export const contracting = {
	bookingUrl,
	title: "Need something built?",
	pitch: "I take on a small number of contract projects, so each one gets proper focus. New builds from scratch, or new features, rewrites and performance work on what you already have.",
	cta: { title: "Free 30 minute consultation", detail: "Talk through what you need, no commitment." },
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
		period: "2023 – 2026",
		detail: "Graduated top of my class, studying business strategy, finance and team management while building Stats.cc.",
		headline: "First",
		headlineNote: "Honours",
		awards: [
			{
				name: "Best Overall Performance Business",
				about: "Awarded by the Dean for the best overall academic performance across the business programme.",
			},
			{
				name: "Best Business and Management Student (Entrepreneurship and Innovation)",
				about: "The top student on the Entrepreneurship and Innovation pathway.",
			},
			{
				name: "Dean's Excellence Award Entrepreneurship",
				about: "The Dean's award for outstanding achievement in entrepreneurship.",
			},
			{
				name: "Henley Greenshoots Seed Finance Award 2026",
				about: "Seed funding from Henley's Greenshoots programme, which backs promising student ventures.",
			},
		],
	},
	{
		name: "Bexhill College",
		qualification: "A-Levels",
		period: "2020 – 2022",
		detail: "Where it all started. I landed my first freelance dev work here, and building side projects is what sparked my interest in business.",
		headline: "AAB",
		headlineNote: "A-Levels",
		subjects: [
			{ subject: "Computer Science", grade: "A" },
			{ subject: "Business Studies", grade: "A" },
			{ subject: "English Language", grade: "B" },
		],
	},
];
