export type Tag = 'AI/LLM' | 'Data Engineering' | 'ETL' | 'Automation' | 'Cloud Architecture' | 'AWS' | 'Cost Optimisation' | 'Migration' | 'Databricks' | 'dbt' | 'Lakehouse' | 'Fintech' | 'API' | 'Product' | 'SaaS' | 'Full-Stack' | 'Platform';

export interface Project {
  id: string;
  title: string;
  tags: Tag[];
  shortDesc: string;
  problem: string;
  whatIDid: string;
  impact: string;
  tech: string;
  isSideProject?: boolean;
  isInProgress?: boolean;
}

export const projects: Project[] = [
  {
    id: 'multi-client-platform',
    title: 'Multi-Client Data Platform',
    tags: ['Platform', 'Data Engineering', 'AWS', 'Cloud Architecture'],
    shortDesc: 'Designed and built an end-to-end multi-tenant analytics data platform from scratch, powering BI and data capability for dozens of clients across multiple industries.',
    problem: 'Small and mid-sized businesses needed proper BI and data capability but could not afford to build an in-house data team. Each client had different source systems, data shapes, and reporting requirements, yet the platform had to serve them all securely and reliably.',
    whatIDid: 'Architected and built the entire platform from the ground up as the sole backend engineer in the early years: the AWS cloud infrastructure, a multi-tenant data lakehouse with per-client database isolation, 100+ ETL pipelines and API integrations, a reporting layer, and a metadata-driven ingestion engine. Designed the security model so no client data is ever mixed. Owned every technology, licensing, and budget decision from day one.',
    impact: 'Platform now processes 60M+ rows per day across 26 databases, 100+ schemas, and 1,800+ tables. Serves dozens of clients across allied health, fintech, media, HR, and food manufacturing. A single engineer-led platform that replaced the need for each client to build their own data team.',
    tech: 'AWS (EC2, S3, Lambda, Bedrock, Control Tower), SQL Server, Databricks, dbt, SSIS, CData, custom ETL framework, Tableau, API integrations',
  },
  {
    id: 'ai-dashboard',
    title: 'AI-Powered Dashboard Framework',
    tags: ['AI/LLM', 'Product'],
    shortDesc: 'A framework that generates client BI dashboards from natural-language prompts, cutting build time from a week to two hours.',
    problem: 'Building client dashboards in traditional BI tools was slow and rigid. Each custom dashboard took roughly a week to design, brand and build.',
    whatIDid: 'Designed and built an in-application framework where a prompt, plus a prompt-engineering layer, generates the dashboard directly as HTML and JavaScript connected to the data warehouse. Users can request new visualisations or modifications in natural language. It connects to multiple AI providers with a model dropdown.',
    impact: 'Dashboard build time dropped from about a week to two hours. Removed the dependency on traditional BI tooling for a large class of dashboards.',
    tech: 'LLM APIs (Claude, OpenAI, Gemini), AWS Bedrock, HTML/JS, SQL, custom prompt engineering, data warehouse integration',
  },
  {
    id: 'smart-etl',
    title: 'Smart ETL Engine',
    tags: ['Data Engineering', 'ETL', 'Automation'],
    shortDesc: 'A metadata-driven ingestion engine that automated client onboarding and cut onboarding time by 85%.',
    problem: 'Every new client arrived with their own data sources and APIs. Onboarding meant repetitive, bespoke pipeline building, slow and full of duplicated code.',
    whatIDid: 'Built a metadata-driven, template-based engine that extracts data from client applications and performs automated transformations into the data warehouse. New integrations are configured rather than hand-coded, removing redundancy.',
    impact: 'Cut client onboarding time by 85% and eliminated repeated code across integrations, letting a small team scale to many clients.',
    tech: 'AWS, SQL Server, custom ETL framework, API integrations, metadata-driven design',
  },
  {
    id: 'self-serve',
    title: 'Self-Serve Onboarding Platform',
    tags: ['Product', 'SaaS', 'Automation', 'Full-Stack'],
    shortDesc: 'A self-serve experience where clients sign up, connect integrations, and get dashboards and mailouts generated automatically.',
    problem: 'The sales cycle was slowed by clients asking how to see their numbers before committing. Full consulting onboarding took weeks, so prospects could not easily try the product.',
    whatIDid: 'Built an end-to-end self-serve experience: clients sign up, connect their own integrations (Xero, Google Analytics, and others), and an automated pipeline builds their dashboards and mailouts immediately. Twelve integrations live.',
    impact: 'Gave prospects a working trial of their own data before committing to custom work, directly addressing the biggest sales friction point.',
    tech: 'AWS, automated pipelines, API integrations, self-serve sign-up, AI-assisted development',
  },
  {
    id: 'aws-modernisation',
    title: 'AWS Modernisation Programme',
    tags: ['Cloud Architecture', 'AWS', 'Cost Optimisation', 'Migration'],
    shortDesc: 'Led the move to a multi-account AWS architecture, cutting infrastructure costs in half.',
    problem: 'The platform ran on a legacy single-account AWS setup with limited cost visibility and governance as it scaled.',
    whatIDid: 'Led the modernisation to a multi-account AWS Control Tower architecture with separate dev, prod and shared accounts and centralised billing. Directed the external delivery partner, owned all architecture decisions, and migrated the data and Tableau servers with no client disruption.',
    impact: 'Cut infrastructure costs by 50% and gave the business proper cost visibility, governance and scalability.',
    tech: 'AWS Control Tower, multi-account architecture, EC2, S3, billing/cost management, Terraform (via partner), migration planning',
  },
  {
    id: 'databricks-migration',
    title: 'Databricks & dbt Lakehouse Migration',
    tags: ['Data Engineering', 'Databricks', 'dbt', 'Lakehouse', 'Migration'],
    shortDesc: 'Leading the migration of the data platform from a legacy stack to a modern Databricks and dbt lakehouse.',
    problem: "The platform's transformation layer ran on legacy SQL Server, CData and SSIS pipelines, harder to maintain, version, and scale.",
    whatIDid: 'Building the business case and leading the migration to a Databricks and dbt lakehouse with a medallion (bronze/silver/gold) architecture and version-controlled transformations. Researching, selecting tooling, configuring a hybrid Databricks setup with compute in AWS, and migrating clients hands-on.',
    impact: 'A more maintainable, version-controlled, scalable transformation layer. (In progress.)',
    tech: 'Databricks, dbt, AWS, Delta Lake, medallion architecture, SQL',
    isInProgress: true,
  },
  {
    id: 'xero-finance',
    title: 'Xero Finance Automation',
    tags: ['Data Engineering', 'Fintech', 'Automation', 'API'],
    shortDesc: 'A finance and billing product built on the Xero API that automates 9,000+ transactions a month.',
    problem: 'Clients spent days each month aggregating operational data in spreadsheets, applying business rules, and manually creating bills and journals in Xero.',
    whatIDid: 'Built a finance product over 6+ years on the Xero API: a custom ledger system, a budget-vs-actual upload system, financial report generation, and an automated billing pipeline that pushes bills, invoices and journals straight into Xero with built-in error reporting and client review before push.',
    impact: 'Replaced days of manual work with a fully automated pipeline handling 9,000+ transactions per month.',
    tech: 'Xero API, SQL, AWS, custom rule engine, rate-limit handling',
  },
];
