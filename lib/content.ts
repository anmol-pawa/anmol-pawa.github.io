/**
 * Site content — single source of truth.
 *
 * Edit this file to update any text on the site. Components read from here
 * via plain imports; no CMS, no JSON fetch, all baked at build time.
 */

export const PROFILE = {
  name: "Anmol Pawa",
  tagline: "Database Engineer at Texas Instruments · Transitioning to SDE/SWE",
  intent: "FAANG & top-tier startups · 2026",
  location: "Bengaluru, India",
  email: "anmol.pawa.77@gmail.com",
  github: "https://github.com/anmol-pawa",
  linkedin: "https://www.linkedin.com/in/anmolpawa/",
  leetcode: "https://leetcode.com/u/anmolpawa/",
  resume:
    "https://drive.google.com/file/d/1X9m0tsmOu-iomp7pzLfHL3g2hMOsOIo0/view?usp=sharing",
};

export const ABOUT_PARAGRAPHS = [
  "I'm a Database Administrator at Texas Instruments, Bengaluru with ~2.5 years of production experience designing internal automation platforms, high-availability PostgreSQL infrastructure, and full-stack DBA tooling. My work has executed 40+ production migrations, eliminated 2,000+ tickets/year, and held 12+ months of zero downtime across two HA topologies.",
  "I'm transitioning into Software Engineer / Software Development Engineer roles at FAANG and top-tier startups for 2026. My systems-thinking foundation — query optimization, indexing internals, ACID semantics, distributed consistency — gives me an edge most SWE candidates don't have. The gap I'm filling: algorithmic depth in C++17, system design breadth, and a portfolio of production-grade software I designed and built end-to-end (see below).",
  "I care about correctness over cleverness, observability before optimization, and writing systems that fail loud rather than silent. The portfolio projects below are the proof — each one explores a different production concern (agentic RAG, distributed messaging, serverless event flows, microservices, 3D WebGL).",
];

export const STATS = [
  { value: "40+", label: "Production migrations executed" },
  { value: "2,000+", label: "Support tickets eliminated / year" },
  { value: "90%+", label: "Automation coverage at TI" },
  { value: "10/10", label: "MCA · Rank 1 / University Topper" },
  { value: "12+ mo", label: "PostgreSQL HA zero downtime" },
  { value: "6", label: "Production-grade portfolio projects" },
];

// ── Experience timeline ────────────────────────────────────────────────────
export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Database Administrator · Infrastructure Automation & Backend Engineering",
    company: "Texas Instruments",
    location: "Bengaluru, India",
    period: "Jul 2024 — Present",
    bullets: [
      "Designed a 7-stage Oracle migration automation platform (Preflight → Export → Metadata Extraction → Pre-Import Application → Data Pump Import → Statistics Gathering → Post-Import Validation) on FastAPI + React + Jenkins + Bash; 40+ production migrations executed, 60–70% turnaround reduction, 500–700 engineering hours saved annually.",
      "Built a self-service App DBA portal with FastAPI approval state machines, RBAC, and audit logging — replaced ticket-driven workflows for account creation, password resets, tablespace provisioning. Eliminated 2,000+ tickets/year, 90%+ automation coverage.",
      "Operated two production PostgreSQL HA topologies on Kubernetes: single-cluster with PgPool-II + streaming replication, and multi-cluster active-active with CloudNativePG + pgEdge Spock across two geo-distributed sites. 12+ months of uninterrupted production uptime.",
      "Engineered a phase-aware dual-screen health-validation framework with 6 purpose-built views (pre/post validation & maintenance, comparison, overview) backed by 17 health-check sections per database — automated go/no-go verdict banners per phase.",
    ],
    stack: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "Oracle",
      "SQLAlchemy",
      "CloudNativePG",
      "Kubernetes",
      "Docker",
      "Jenkins",
      "Bash",
      "RHEL/Solaris",
    ],
  },
  {
    role: "Software Engineering Intern · Full-Stack Development",
    company: "Texas Instruments (HPCI Team)",
    location: "Bengaluru, India",
    period: "Jan 2024 — Jun 2024",
    bullets: [
      "Built an internal self-service IT onboarding platform on React + Flask integrating Active Directory, LDAP, UNIX/NIS, and Oracle through backend REST APIs — unified view of access/account/authentication state across heterogeneous environments.",
      "Designed a unified dashboard aggregating 2FA status, AD group access, UNIX account details, and LDAP memberships — eliminated manual checks across multiple tools.",
      "Implemented permissioned self-service workflows with guided steps and validations for user onboarding, project provisioning, and access management.",
    ],
    stack: ["React", "Flask", "REST APIs", "Oracle DB", "Active Directory", "LDAP", "UNIX/NIS", "Docker", "Jenkins"],
  },
];

// ── Portfolio projects (personal, public-track) ────────────────────────────
export interface PortfolioProject {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  accent: string;
  /** Repo is private — link points to portfolio doc / demo if available */
  link?: string;
}

export const PORTFOLIO: PortfolioProject[] = [
  {
    name: "frontier-scout",
    tagline: "Microservices agentic RAG over arXiv + GitHub + HN",
    description:
      "4 polyglot microservices (Node.js scraper + Python Celery worker + 3× FastAPI replicas + Next.js web) running a LangGraph state machine that rewrites → retrieves → reranks → synthesizes → reflects. Qdrant 1.18 HNSW + bge-large-en-v1.5 embeddings. RabbitMQ 4.0 topic exchange. NGINX least-conn load balancing. OpenTelemetry traces span Node → AMQP → Python in one Jaeger view.",
    stack: ["LangGraph", "LangChain", "Qdrant", "RabbitMQ", "Celery", "FastAPI", "Node.js", "NGINX", "OpenTelemetry", "Docker"],
    highlights: ["LangGraph reflection loop", "Cross-language distributed tracing", "Both Jenkinsfile + GitHub Actions"],
    accent: "#22d3ee",
  },
  {
    name: "agent-nexus",
    tagline: "Multi-agent AI orchestration with MCP + A2A",
    description:
      "Orchestrator (Claude Sonnet) decomposes tasks and delegates to specialist agents (researcher / coder / analyst) via Anthropic's MCP 1.27.1 + Google's A2A 1.0 protocols. Redis Streams with XREADGROUP consumer groups for at-least-once delivery. Semantic cache (cosine similarity 0.92) with bge-small-en-v1.5. User-based sharding + least-connections LB across agent pool.",
    stack: ["MCP", "A2A", "FastMCP", "Anthropic Claude", "Redis Streams", "FastAPI", "Next.js 15", "sentence-transformers"],
    highlights: ["MCP + A2A end-to-end", "Semantic dedup cache", "Agent fan-out/fan-in pattern"],
    accent: "#a855f7",
  },
  {
    name: "rag-pipeline",
    tagline: "Production RAG with hybrid search + semantic cache",
    description:
      "FastAPI + asyncpg + pgvector HNSW for dense retrieval, rank-bm25 for sparse, Reciprocal Rank Fusion (k=60) for hybrid. Redis semantic cache (cosine 0.92 threshold). Celery async ingestion with SHA-256 deduplication, acks_late reliability, exponential retry backoff. structlog + OpenTelemetry observability. Eval harness measuring precision@k, faithfulness, context recall.",
    stack: ["FastAPI", "PostgreSQL + pgvector", "Redis", "Celery", "Anthropic Claude", "structlog", "OpenTelemetry"],
    highlights: ["RRF hybrid retrieval", "Anthropic prompt caching", "Built-in eval harness"],
    accent: "#34d399",
  },
  {
    name: "aws-serverless-analytics",
    tagline: "URL shortener on 16 AWS free-tier services",
    description:
      "Lambda + API Gateway + DynamoDB single-table + SQS+DLQ + SNS + Step Functions EXPRESS + EventBridge + S3 + CloudFront OAC + Cognito + CloudWatch + X-Ray + SSM + IAM + CloudFormation + CodePipeline. CI/CD via both CodePipeline and GitHub Actions OIDC (no long-lived AWS keys stored in GitHub).",
    stack: ["AWS Lambda", "DynamoDB", "SQS", "SNS", "Step Functions", "CloudFormation", "Cognito", "X-Ray", "GitHub Actions OIDC"],
    highlights: ["16 services, all free tier", "ReportBatchItemFailures pattern", "CodePipeline + GHA side-by-side"],
    accent: "#fb923c",
  },
  {
    name: "daily-dsa",
    tagline: "Daily DSA coaching app with SSE-streamed Claude teaching",
    description:
      "Pulls Question of the Day from LeetCode (GraphQL) + Codeforces (REST) + GFG (BeautifulSoup scrape) concurrently via asyncio.gather. Redis DB-1 problem cache with 24h TTL. Claude Haiku SSE streams an 8-section teaching session (pattern recognition → brute force → optimal → C++17 implementation → edge cases → complexity → interview tips → pattern fingerprint). Next.js 15 frontend with EventSource.",
    stack: ["FastAPI", "Anthropic Claude", "Redis", "Next.js 15", "asyncio", "Server-Sent Events", "C++17"],
    highlights: ["8-section pedagogical prompt", "Concurrent multi-platform fetch", "SSE streaming"],
    accent: "#fbbf24",
  },
  {
    name: "frontier-quest",
    tagline: "Browser-native 3D first-person investigation game",
    description:
      "React Three Fiber 9 + Three.js r170 + @react-three/rapier WASM physics + @react-three/postprocessing (Bloom + ChromaticAberration + Vignette + ACES tone mapping). 3 fully-dressed rooms with reflective floor (MeshReflectorMaterial), HDR environment, procedural humanoid NPCs, animated holo-displays with custom GLSL shaders. Zustand state machine, framer-motion UI transitions. No Unity, no install — npm run dev to play.",
    stack: ["React Three Fiber", "Three.js", "Rapier (WASM)", "GLSL", "Zustand", "Framer Motion", "Next.js 15", "TypeScript"],
    highlights: ["Custom GLSL shaders", "Real-time floor reflections", "HDR environment lighting"],
    accent: "#f472b6",
  },
];

// ── Skills ────────────────────────────────────────────────────────────────
export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    icon: "code",
    skills: ["Python", "C++17", "TypeScript", "JavaScript", "SQL", "Bash", "Groovy"],
  },
  {
    name: "Backend & APIs",
    icon: "server",
    skills: ["FastAPI", "Flask", "REST", "SSE", "WebSocket", "GraphQL", "gRPC", "SQLAlchemy", "Celery", "Redis Streams"],
  },
  {
    name: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "pgvector", "Oracle", "Qdrant", "Redis", "DynamoDB", "Replication", "WAL/PITR", "Query Optimization", "Indexing internals"],
  },
  {
    name: "AI / ML / Agents",
    icon: "sparkles",
    skills: ["Anthropic Claude", "MCP", "A2A", "LangChain", "LangGraph", "sentence-transformers", "RAG", "Semantic Cache", "Vector Search (HNSW)"],
  },
  {
    name: "Frontend",
    icon: "monitor",
    skills: ["React 19", "Next.js 15", "Tailwind v4", "Framer Motion", "React Three Fiber", "Three.js", "Zustand", "Material UI"],
  },
  {
    name: "Cloud & Infra",
    icon: "cloud",
    skills: ["AWS (Lambda · DynamoDB · SQS · Step Functions · CloudFormation)", "Docker", "Kubernetes", "CloudNativePG", "NGINX", "Jenkins", "GitHub Actions", "OIDC"],
  },
  {
    name: "Systems & Distributed",
    icon: "network",
    skills: ["Distributed Tracing (OpenTelemetry → Jaeger)", "RabbitMQ", "Microservices", "Load Balancing (L4/L7)", "Sharding", "Circuit Breaker / Retry / Idempotency"],
  },
  {
    name: "CS Foundations",
    icon: "cpu",
    skills: ["Algorithms (C++17)", "Data Structures", "System Design", "ACID / Isolation", "Consistency Models", "Concurrency (asyncio · threads · goroutines)", "OS / Networking"],
  },
];

// ── Internal work at TI (the production proof) ─────────────────────────────
export interface InternalProject {
  name: string;
  blurb: string;
  impact: string;
  stack: string[];
}

export const INTERNAL_WORK: InternalProject[] = [
  {
    name: "Database Automation Hub",
    blurb:
      "End-to-end Oracle migration orchestration replacing manual Data Pump workflows. 7-stage pipeline coordinated across React frontend, FastAPI with WebSocket progress streaming, python-jenkins orchestration, Groovy Jenkinsfiles, and Bash on Oracle hosts via SSH. Metadata extraction (tablespaces, roles, profiles, grants, synonyms, DB links, MV refresh groups) as structured CSV/SQL artifacts.",
    impact: "40+ production migrations · 60–70% turnaround reduction · 500–700 engineering hours saved annually",
    stack: ["FastAPI", "React", "WebSockets", "python-jenkins", "Groovy", "Oracle", "Bash"],
  },
  {
    name: "Self-Service App DBA Portal",
    blurb:
      "Centralized self-service portal replacing ticket-driven DBA workflows with FastAPI approval state machines, RBAC, and comprehensive audit logging. Automated account creation, password resets, tablespace provisioning, and privilege management across Oracle environments.",
    impact: "2,000+ support tickets eliminated annually · 90%+ automation coverage",
    stack: ["FastAPI", "React", "Oracle", "State Machines", "RBAC", "Audit Logging"],
  },
  {
    name: "PostgreSQL HA Platform",
    blurb:
      "Two production HA topologies on Kubernetes: single-cluster (StatefulSets + PgPool-II + streaming replication + automated failover + WAL archiving + PITR + PgExporter monitoring); and multi-cluster active-active (CloudNativePG operator + pgEdge Spock cross-site replication, 2+1 instance topology, static NFS PV/PVC, SeaweedFS WAL archiving, NFS UID alignment for RHEL/UBI).",
    impact: "12+ months of uninterrupted production uptime across both topologies",
    stack: ["PostgreSQL", "CloudNativePG", "pgEdge Spock", "PgPool-II", "Kubernetes", "NFS", "SeaweedFS"],
  },
];
