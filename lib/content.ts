/**
 * Site content — single source of truth.
 *
 * Edit copy here; components import named exports. Types live in lib/types.ts.
 * Architecture metadata on each PortfolioProject drives the mini-topology SVG
 * on the project card — keep node coordinates in [0,1] (renderer scales to px).
 */

import type {
  ExperienceItem,
  InternalProject,
  PlanStep,
  PortfolioProject,
  Profile,
  SkillCategory,
  Stat,
} from "./types";

export const PROFILE: Profile = {
  name: "Anmol Pawa",
  handle: "anmol-pawa",
  tagline: "Database Engineer → Software Engineer",
  intent: "FAANG & top-tier startups · 2026",
  location: "Bengaluru, India",
  email: "anmol.pawa.77@gmail.com",
  github: "https://github.com/anmol-pawa",
  linkedin: "https://www.linkedin.com/in/anmolpawa/",
  leetcode: "https://leetcode.com/u/anmolpawa/",
  resume:
    "https://drive.google.com/file/d/1X9m0tsmOu-iomp7pzLfHL3g2hMOsOIo0/view?usp=sharing",
};

/**
 * The hero query: synthesized EXPLAIN ANALYZE that "executes" on mount and
 * resolves to one row — Anmol. Each step is rendered as a plan node in the
 * SVG hero, animated in sequence.
 */
export const HERO_QUERY = `SELECT e.*
FROM   engineers e
WHERE  e.skills @> ARRAY['SQL','Distributed Systems','C++17']
  AND  e.production_years >= 2
  AND  e.targets @> ARRAY['FAANG','top-tier startups']
ORDER  BY e.signal DESC
LIMIT  1;`;

export const HERO_PLAN: PlanStep[] = [
  {
    op: "Limit",
    target: "",
    rows: 1,
    cost: "0.00..0.04",
    depth: 0,
  },
  {
    op: "Sort",
    target: "",
    filter: "Sort Key: e.signal DESC",
    rows: 1,
    cost: "0.03..0.04",
    depth: 1,
  },
  {
    op: "Bitmap Heap Scan",
    target: "engineers e",
    filter: "Recheck Cond: skills @> '{SQL,Distributed Systems,C++17}'",
    rows: 1,
    cost: "0.00..0.02",
    depth: 2,
  },
  {
    op: "Bitmap Index Scan",
    target: "engineers_skills_gin",
    filter: "Index Cond: skills @> '{SQL,Distributed Systems,C++17}'",
    rows: 1,
    cost: "0.00..0.01",
    depth: 3,
  },
];

export const ABOUT_PARAGRAPHS = [
  "Database Administrator at Texas Instruments — ~2.5 years operating production PostgreSQL HA, designing internal automation platforms, and shipping full-stack DBA tooling. 40+ production Oracle migrations executed, 2,000+ support tickets eliminated annually, 12+ months of zero downtime across two HA topologies.",
  "Transitioning to SDE / SWE at FAANG and top-tier startups for 2026. The DBA lens — query planning, index design, ACID semantics, consistency models, replication topologies — translates directly into the systems-thinking signal that distinguishes strong SWE candidates. The work below is the proof.",
  "Bias toward correctness over cleverness, observability before optimization, and systems that fail loud rather than silent. Every portfolio project demonstrates a distinct production concern — agentic RAG, distributed messaging, serverless event flows, multi-language microservices, 3D WebGL.",
];

export const STATS: Stat[] = [
  { value: "40+", label: "Production migrations executed" },
  { value: "2,000+", label: "Support tickets eliminated", unit: "/ year" },
  { value: "90%+", label: "Automation coverage at TI" },
  { value: "10/10", label: "MCA · University Topper" },
  { value: "12+ mo", label: "PostgreSQL HA zero downtime" },
  { value: "6", label: "Production-grade portfolio projects" },
];

// ── Experience timeline (rendered as a WAL) ────────────────────────────────
export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Database Administrator · Infrastructure Automation & Backend Engineering",
    company: "Texas Instruments",
    location: "Bengaluru, India",
    period: "Jul 2024 — Present",
    lsn: "0/1A2B3C40",
    txid: 4096,
    bullets: [
      "Designed a 7-stage Oracle migration automation platform (Preflight → Export → Metadata Extraction → Pre-Import Application → Data Pump Import → Statistics Gathering → Post-Import Validation) on FastAPI + React + Jenkins + Bash. 40+ production migrations executed, 60–70% turnaround reduction, 500–700 engineering hours saved annually.",
      "Built a self-service App DBA portal with FastAPI approval state machines, RBAC, and audit logging — replaced ticket-driven workflows for account creation, password resets, tablespace provisioning. Eliminated 2,000+ tickets / year, 90%+ automation coverage.",
      "Operate two production PostgreSQL HA topologies on Kubernetes: single-cluster (PgPool-II + streaming replication + automated failover + WAL archiving + PITR) and multi-cluster active-active (CloudNativePG + pgEdge Spock across two geo-distributed sites). 12+ months of uninterrupted production uptime.",
      "Engineered a phase-aware dual-screen health-validation framework: 6 purpose-built views, 17 health-check sections per database, automated go/no-go verdict banners per migration phase.",
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
      "RHEL / Solaris",
    ],
  },
  {
    role: "Software Engineering Intern · Full-Stack Development",
    company: "Texas Instruments · HPCI Team",
    location: "Bengaluru, India",
    period: "Jan 2024 — Jun 2024",
    lsn: "0/19F0AB80",
    txid: 2048,
    bullets: [
      "Built an internal self-service IT onboarding platform on React + Flask integrating Active Directory, LDAP, UNIX/NIS, and Oracle through backend REST APIs — unified view of access / account / authentication state across heterogeneous environments.",
      "Designed a unified dashboard aggregating 2FA status, AD group access, UNIX account details, and LDAP memberships — eliminated manual checks across multiple tools.",
      "Implemented permissioned self-service workflows with guided steps and validations for onboarding, project provisioning, and access management.",
    ],
    stack: [
      "React",
      "Flask",
      "REST APIs",
      "Oracle",
      "Active Directory",
      "LDAP",
      "UNIX / NIS",
      "Docker",
      "Jenkins",
    ],
  },
];

// ── Portfolio projects (the centerpiece) ───────────────────────────────────
export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: "frontier-scout",
    name: "frontier-scout",
    tagline: "Microservices agentic RAG over arXiv + GitHub + HN",
    concept: "LangGraph reflection loop spanning a polyglot service mesh",
    description:
      "4 polyglot microservices (Node.js scraper · Python Celery worker · 3× FastAPI replicas · Next.js web) running a LangGraph state machine that rewrites → retrieves → reranks → synthesizes → reflects. Qdrant 1.18 HNSW + bge-large-en-v1.5 embeddings. RabbitMQ 4.0 topic exchange. NGINX least-conn load balancing. OpenTelemetry traces span Node → AMQP → Python in one Jaeger view.",
    stack: [
      "LangGraph",
      "LangChain",
      "Qdrant",
      "RabbitMQ",
      "Celery",
      "FastAPI",
      "Node.js",
      "NGINX",
      "OpenTelemetry",
      "Docker",
    ],
    highlights: [
      "LangGraph reflection loop",
      "Cross-language distributed tracing",
      "Both Jenkinsfile + GitHub Actions CI",
    ],
    metrics: [
      { label: "Microservices", value: "4 polyglot" },
      { label: "Vector dim", value: "1024 · HNSW" },
      { label: "Trace span", value: "Node → AMQP → Py" },
    ],
    accent: "#22d3ee",
    topology: {
      nodes: [
        { id: "web", label: "Next.js", kind: "client", x: 0.06, y: 0.5 },
        { id: "nginx", label: "NGINX LB", kind: "service", x: 0.28, y: 0.5 },
        { id: "api1", label: "FastAPI", kind: "service", x: 0.5, y: 0.22 },
        { id: "api2", label: "FastAPI", kind: "service", x: 0.5, y: 0.5 },
        { id: "api3", label: "FastAPI", kind: "service", x: 0.5, y: 0.78 },
        { id: "mq", label: "RabbitMQ", kind: "queue", x: 0.72, y: 0.5 },
        { id: "worker", label: "Celery", kind: "service", x: 0.92, y: 0.22 },
        { id: "qdrant", label: "Qdrant", kind: "store", x: 0.92, y: 0.78 },
      ],
      edges: [
        { from: "web", to: "nginx" },
        { from: "nginx", to: "api1" },
        { from: "nginx", to: "api2" },
        { from: "nginx", to: "api3" },
        { from: "api2", to: "mq", label: "AMQP" },
        { from: "mq", to: "worker" },
        { from: "worker", to: "qdrant", label: "HNSW" },
        { from: "api2", to: "qdrant", label: "search" },
      ],
    },
  },
  {
    slug: "agent-nexus",
    name: "agent-nexus",
    tagline: "Multi-agent orchestration with MCP + A2A",
    concept: "Fan-out / fan-in agent topology with semantic dedup cache",
    description:
      "Orchestrator (Claude Sonnet) decomposes tasks and delegates to specialist agents — researcher / coder / analyst — via Anthropic MCP 1.27.1 + Google A2A 1.0. Redis Streams with XREADGROUP consumer groups for at-least-once delivery. Semantic cache (cosine 0.92, bge-small-en-v1.5). User-based sharding + least-connections balancing across the agent pool.",
    stack: [
      "MCP",
      "A2A",
      "FastMCP",
      "Anthropic Claude",
      "Redis Streams",
      "FastAPI",
      "Next.js 15",
      "sentence-transformers",
    ],
    highlights: [
      "MCP + A2A end-to-end",
      "Semantic dedup cache · 0.92 cosine",
      "User-sharded agent fan-out",
    ],
    metrics: [
      { label: "Protocols", value: "MCP 1.27 · A2A 1.0" },
      { label: "Cache hit", value: "~0.92 cos sim" },
      { label: "Delivery", value: "at-least-once" },
    ],
    accent: "#a855f7",
    topology: {
      nodes: [
        { id: "ui", label: "Next.js", kind: "client", x: 0.06, y: 0.5 },
        { id: "orch", label: "Orchestrator", kind: "service", x: 0.32, y: 0.5 },
        { id: "stream", label: "Redis Streams", kind: "queue", x: 0.55, y: 0.5 },
        { id: "research", label: "Researcher", kind: "service", x: 0.82, y: 0.18 },
        { id: "coder", label: "Coder", kind: "service", x: 0.82, y: 0.5 },
        { id: "analyst", label: "Analyst", kind: "service", x: 0.82, y: 0.82 },
      ],
      edges: [
        { from: "ui", to: "orch", label: "SSE" },
        { from: "orch", to: "stream", label: "XADD" },
        { from: "stream", to: "research", label: "XREAD" },
        { from: "stream", to: "coder", label: "XREAD" },
        { from: "stream", to: "analyst", label: "XREAD" },
        { from: "research", to: "orch", bidi: true },
        { from: "coder", to: "orch", bidi: true },
        { from: "analyst", to: "orch", bidi: true },
      ],
    },
  },
  {
    slug: "rag-pipeline",
    name: "rag-pipeline",
    tagline: "Production RAG · hybrid search + semantic cache",
    concept: "Reciprocal-rank fusion of dense + sparse retrieval",
    description:
      "FastAPI + asyncpg + pgvector HNSW for dense retrieval, rank-bm25 for sparse, Reciprocal Rank Fusion (k=60) for hybrid. Redis semantic cache (cosine 0.92 threshold). Celery async ingestion with SHA-256 dedup, acks_late reliability, exponential retry. structlog + OpenTelemetry. Eval harness measures precision@k, faithfulness, context recall.",
    stack: [
      "FastAPI",
      "PostgreSQL · pgvector",
      "Redis",
      "Celery",
      "Anthropic Claude",
      "structlog",
      "OpenTelemetry",
    ],
    highlights: [
      "RRF hybrid retrieval (k=60)",
      "Anthropic prompt caching",
      "Built-in eval harness",
    ],
    metrics: [
      { label: "Index", value: "pgvector HNSW" },
      { label: "Cache hit", value: "Redis semantic" },
      { label: "Ingest", value: "Celery · acks_late" },
    ],
    accent: "#34d399",
    topology: {
      nodes: [
        { id: "client", label: "Client", kind: "client", x: 0.06, y: 0.5 },
        { id: "api", label: "FastAPI", kind: "service", x: 0.3, y: 0.5 },
        { id: "cache", label: "Redis cache", kind: "store", x: 0.55, y: 0.18 },
        { id: "pg", label: "Postgres · pgvector", kind: "store", x: 0.55, y: 0.5 },
        { id: "bm25", label: "rank-bm25", kind: "service", x: 0.55, y: 0.82 },
        { id: "celery", label: "Celery ingest", kind: "service", x: 0.82, y: 0.5 },
      ],
      edges: [
        { from: "client", to: "api" },
        { from: "api", to: "cache", label: "0.92 cos" },
        { from: "api", to: "pg", label: "dense" },
        { from: "api", to: "bm25", label: "sparse" },
        { from: "pg", to: "celery", bidi: true },
      ],
    },
  },
  {
    slug: "aws-serverless-analytics",
    name: "aws-serverless-analytics",
    tagline: "URL shortener on 16 AWS free-tier services",
    concept: "Event-driven serverless with OIDC-secured CI/CD",
    description:
      "Lambda + API Gateway + DynamoDB single-table + SQS + DLQ + SNS + Step Functions EXPRESS + EventBridge + S3 + CloudFront OAC + Cognito + CloudWatch + X-Ray + SSM + IAM + CloudFormation + CodePipeline. CI/CD via both CodePipeline and GitHub Actions OIDC — no long-lived AWS keys stored.",
    stack: [
      "AWS Lambda",
      "DynamoDB",
      "SQS",
      "SNS",
      "Step Functions",
      "CloudFormation",
      "Cognito",
      "X-Ray",
      "GitHub Actions OIDC",
    ],
    highlights: [
      "16 services · all free tier",
      "ReportBatchItemFailures pattern",
      "CodePipeline + GHA side-by-side",
    ],
    metrics: [
      { label: "Services", value: "16 · free tier" },
      { label: "Auth", value: "OIDC · no keys" },
      { label: "Table", value: "DynamoDB single" },
    ],
    accent: "#fb923c",
    topology: {
      nodes: [
        { id: "user", label: "User", kind: "client", x: 0.05, y: 0.5 },
        { id: "cf", label: "CloudFront", kind: "service", x: 0.25, y: 0.5 },
        { id: "apigw", label: "API GW", kind: "service", x: 0.45, y: 0.5 },
        { id: "lambda", label: "Lambda", kind: "service", x: 0.65, y: 0.5 },
        { id: "ddb", label: "DynamoDB", kind: "store", x: 0.85, y: 0.22 },
        { id: "sqs", label: "SQS · DLQ", kind: "queue", x: 0.85, y: 0.5 },
        { id: "sfn", label: "Step Fns", kind: "service", x: 0.85, y: 0.78 },
      ],
      edges: [
        { from: "user", to: "cf" },
        { from: "cf", to: "apigw" },
        { from: "apigw", to: "lambda" },
        { from: "lambda", to: "ddb", label: "single-table" },
        { from: "lambda", to: "sqs" },
        { from: "sqs", to: "sfn", label: "EXPRESS" },
      ],
    },
  },
  {
    slug: "daily-dsa",
    name: "daily-dsa",
    tagline: "Daily DSA coaching · SSE-streamed Claude teaching",
    concept: "Concurrent multi-source fetch + 8-section pedagogical prompt",
    description:
      "Pulls Question of the Day from LeetCode (GraphQL) + Codeforces (REST) + GFG (BeautifulSoup) concurrently via asyncio.gather. Redis DB-1 problem cache, 24h TTL. Claude Haiku SSE streams an 8-section teaching session: pattern recognition → brute force → optimal → C++17 implementation → edge cases → complexity → interview tips → pattern fingerprint. Next.js 15 + EventSource.",
    stack: [
      "FastAPI",
      "Anthropic Claude",
      "Redis",
      "Next.js 15",
      "asyncio",
      "Server-Sent Events",
      "C++17",
    ],
    highlights: [
      "8-section pedagogical prompt",
      "Concurrent multi-platform fetch",
      "SSE token streaming",
    ],
    metrics: [
      { label: "Sources", value: "LC · CF · GFG" },
      { label: "Cache", value: "Redis · 24h TTL" },
      { label: "Stream", value: "SSE · Haiku" },
    ],
    accent: "#fbbf24",
    topology: {
      nodes: [
        { id: "ui", label: "Next.js", kind: "client", x: 0.06, y: 0.5 },
        { id: "api", label: "FastAPI", kind: "service", x: 0.32, y: 0.5 },
        { id: "redis", label: "Redis DB1", kind: "store", x: 0.32, y: 0.85 },
        { id: "lc", label: "LeetCode", kind: "external", x: 0.62, y: 0.18 },
        { id: "cf", label: "Codeforces", kind: "external", x: 0.62, y: 0.5 },
        { id: "gfg", label: "GFG", kind: "external", x: 0.62, y: 0.82 },
        { id: "claude", label: "Claude Haiku", kind: "external", x: 0.92, y: 0.5 },
      ],
      edges: [
        { from: "ui", to: "api", label: "SSE" },
        { from: "api", to: "redis", bidi: true },
        { from: "api", to: "lc", label: "GraphQL" },
        { from: "api", to: "cf", label: "REST" },
        { from: "api", to: "gfg", label: "scrape" },
        { from: "api", to: "claude", label: "stream" },
      ],
    },
  },
  {
    slug: "frontier-quest",
    name: "frontier-quest",
    tagline: "Browser-native 3D first-person investigation game",
    concept: "WebGL + WASM physics + custom GLSL — no Unity, no install",
    description:
      "React Three Fiber 9 + Three.js r170 + @react-three/rapier WASM physics + @react-three/postprocessing (Bloom + ChromaticAberration + Vignette + ACES). 3 fully-dressed rooms with MeshReflectorMaterial floors, HDR environment, procedural humanoid NPCs, animated holo-displays with custom GLSL. Zustand state machine. npm run dev to play.",
    stack: [
      "React Three Fiber",
      "Three.js",
      "Rapier · WASM",
      "GLSL",
      "Zustand",
      "Framer Motion",
      "Next.js 15",
      "TypeScript",
    ],
    highlights: [
      "Custom GLSL shaders",
      "Real-time floor reflections",
      "HDR environment lighting",
    ],
    metrics: [
      { label: "Renderer", value: "R3F 9 · Three r170" },
      { label: "Physics", value: "Rapier WASM" },
      { label: "Postprocess", value: "Bloom · CA · Vignette" },
    ],
    accent: "#f472b6",
    topology: {
      nodes: [
        { id: "browser", label: "Browser", kind: "client", x: 0.08, y: 0.5 },
        { id: "r3f", label: "R3F · Three", kind: "service", x: 0.3, y: 0.5 },
        { id: "rapier", label: "Rapier WASM", kind: "service", x: 0.55, y: 0.22 },
        { id: "glsl", label: "GLSL shaders", kind: "service", x: 0.55, y: 0.78 },
        { id: "zustand", label: "Zustand FSM", kind: "store", x: 0.8, y: 0.5 },
      ],
      edges: [
        { from: "browser", to: "r3f" },
        { from: "r3f", to: "rapier", label: "physics step" },
        { from: "r3f", to: "glsl", label: "uniforms" },
        { from: "r3f", to: "zustand", bidi: true },
      ],
    },
  },
];

// ── Skills (rendered as a B-tree index) ────────────────────────────────────
export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    code: "LANG",
    icon: "code",
    skills: ["Python", "C++17", "TypeScript", "JavaScript", "SQL", "Bash", "Groovy"],
  },
  {
    name: "Databases",
    code: "DB",
    icon: "database",
    skills: [
      "PostgreSQL",
      "pgvector",
      "Oracle",
      "Qdrant",
      "Redis",
      "DynamoDB",
      "Replication",
      "WAL · PITR",
      "Query Optimization",
      "Indexing internals",
    ],
  },
  {
    name: "Backend & APIs",
    code: "API",
    icon: "server",
    skills: [
      "FastAPI",
      "Flask",
      "REST",
      "SSE",
      "WebSocket",
      "GraphQL",
      "gRPC",
      "SQLAlchemy",
      "Celery",
      "Redis Streams",
    ],
  },
  {
    name: "AI · Agents · RAG",
    code: "AI",
    icon: "sparkles",
    skills: [
      "Anthropic Claude",
      "MCP",
      "A2A",
      "LangChain",
      "LangGraph",
      "sentence-transformers",
      "Hybrid RAG",
      "Semantic Cache",
      "HNSW",
    ],
  },
  {
    name: "Frontend",
    code: "FE",
    icon: "monitor",
    skills: [
      "React 19",
      "Next.js 15",
      "Tailwind v4",
      "Framer Motion",
      "React Three Fiber",
      "Three.js",
      "Zustand",
    ],
  },
  {
    name: "Cloud · Infra",
    code: "CLD",
    icon: "cloud",
    skills: [
      "AWS · Lambda · DynamoDB · SQS · Step Fns",
      "Docker",
      "Kubernetes",
      "CloudNativePG",
      "NGINX",
      "Jenkins",
      "GitHub Actions OIDC",
    ],
  },
  {
    name: "Distributed Systems",
    code: "DS",
    icon: "network",
    skills: [
      "OpenTelemetry → Jaeger",
      "RabbitMQ",
      "Microservices",
      "L4 / L7 Load Balancing",
      "Sharding",
      "Circuit Breaker · Retry · Idempotency",
    ],
  },
  {
    name: "CS Foundations",
    code: "CS",
    icon: "cpu",
    skills: [
      "Algorithms · C++17",
      "Data Structures",
      "System Design",
      "ACID · Isolation",
      "Consistency Models",
      "Concurrency · asyncio · threads · goroutines",
      "OS · Networking",
    ],
  },
];

// ── Internal (TI) work — production proof ──────────────────────────────────
export const INTERNAL_WORK: InternalProject[] = [
  {
    name: "Database Automation Hub",
    blurb:
      "End-to-end Oracle migration orchestration. 7-stage pipeline coordinated across React, FastAPI with WebSocket progress streaming, python-jenkins orchestration, Groovy Jenkinsfiles, and Bash on Oracle hosts via SSH. Metadata extracted as structured CSV/SQL artifacts (tablespaces, roles, profiles, grants, synonyms, DB links, MV refresh groups).",
    impact:
      "40+ production migrations · 60–70% turnaround reduction · 500–700 engineering hours saved annually",
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
      "Two production HA topologies on Kubernetes. Single-cluster: StatefulSets + PgPool-II + streaming replication + automated failover + WAL archiving + PITR + PgExporter. Multi-cluster active-active: CloudNativePG operator + pgEdge Spock cross-site replication, 2+1 instance topology, static NFS PV/PVC, SeaweedFS WAL archiving, NFS UID alignment for RHEL/UBI.",
    impact: "12+ months of uninterrupted production uptime across both topologies",
    stack: [
      "PostgreSQL",
      "CloudNativePG",
      "pgEdge Spock",
      "PgPool-II",
      "Kubernetes",
      "NFS",
      "SeaweedFS",
    ],
  },
];
