"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Brain,
  Cloud,
  Cpu,
  Database,
  Globe2,
  Network,
  Route,
  Search,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

type ProviderKey = "cloudflare" | "aws" | "azure";

type Feature = {
  label: string;
  cloudflare?: string;
  cloudflareDesc?: string;
  aws?: string;
  awsDesc?: string;
  azure?: string;
  azureDesc?: string;
  icon?: ProviderKey;
};

const features: Feature[] = [
  {
    label: "Edge Compute or Serverless",
    cloudflare: "Workers",
    cloudflareDesc: "Run JS/Wasm at 300+ edge POPs worldwide.",
    aws: "Lambda",
    awsDesc: "Serverless compute with tight AWS integration.",
    azure: "Azure Functions",
    azureDesc: "Event-driven serverless in Azure ecosystem.",
    icon: "cloudflare",
  },
  {
    label: "Object / Blob Storage",
    cloudflare: "R2",
    cloudflareDesc: "S3-compatible object storage with zero egress fees.",
    aws: "S3",
    awsDesc: "Highly durable object storage with vast tooling.",
    azure: "Blob Storage",
    azureDesc: "Scalable, reliable object storage on Azure.",
    icon: "aws",
  },
  {
    label: "Relational Databases",
    cloudflare: "D1",
    cloudflareDesc: "SQLite-based serverless DB at the edge.",
    aws: "RDS",
    awsDesc: "Managed relational databases with many engines.",
    azure: "Azure Cosmos DB",
    azureDesc: "Globally distributed, fully managed database.",
    icon: "azure",
  },
  {
    label: "Containers",
    cloudflare: "Workers",
    cloudflareDesc: "Enhance Workers with serverless containers.",
    aws: "ECS / Fargate",
    awsDesc: "Container orchestration and serverless containers.",
    azure: "AKS / Container Instances",
    azureDesc: "Managed Kubernetes and on-demand containers.",
  },
  {
    label: "Workflows",
    cloudflare: "Workflows",
    cloudflareDesc: "Durable orchestration built on Workers.",
    aws: "Step Functions",
    awsDesc: "Serverless workflow orchestration for AWS services.",
    azure: "Logic Apps",
    azureDesc: "Low-code designer for workflow automation.",
  },
  {
    label: "AI / Agents",
    cloudflare: "Cloudflare AI / Agents",
    cloudflareDesc: "Deploy AI workloads and agents at the edge.",
    aws: "Bedrock / Agents for Bedrock",
    awsDesc: "Managed foundation models and agent tooling.",
    azure: "Azure AI Agent Service / Azure OpenAI",
    azureDesc: "Agentic experiences powered by Azure OpenAI.",
  },
  {
    label: "Vector & AI Search",
    cloudflare: "Vectorize",
    cloudflareDesc: "Native vector index for embeddings at the edge.",
    aws: "Bedrock (Vector Search)",
    awsDesc: "Vector search capabilities on Bedrock.",
    azure: "Cognitive Search",
    azureDesc: "Semantic and vector search over your data.",
  },
  {
    label: "Content Delivery Network",
    cloudflare: "Global CDN",
    cloudflareDesc: "Worldwide CDN with automatic caching.",
    aws: "CloudFront",
    awsDesc: "Feature-rich CDN integrated with AWS.",
    azure: "Azure CDN",
    azureDesc: "Global content delivery in Azure network.",
  },
  {
    label: "DNS",
    cloudflare: "Cloudflare DNS",
    cloudflareDesc: "Secure, fast authoritative DNS services.",
    aws: "Route 53",
    awsDesc: "Scalable DNS with traffic routing policies.",
    azure: "Azure DNS",
    azureDesc: "Authoritative DNS for Azure resources.",
  },
  {
    label: "Load Balancing",
    cloudflare: "Argo Smart Routing",
    cloudflareDesc: "Latency-aware routing and load balancing.",
    aws: "AWS ELB",
    awsDesc: "Elastic load balancers for AWS workloads.",
    azure: "Traffic Manager",
    azureDesc: "DNS-based global traffic load balancing.",
  },
];

const providerHeader = {
  cloudflare: {
    title: "Cloudflare",
    bg: "from-orange-400 to-orange-500",
    border: "border-orange-300",
  },
  aws: {
    title: "Amazon Web Services",
    bg: "from-amber-400 to-amber-500",
    border: "border-amber-300",
  },
  azure: {
    title: "Azure",
    bg: "from-sky-400 to-sky-500",
    border: "border-sky-300",
  },
} satisfies Record<ProviderKey, { title: string; bg: string; border: string }>;

function ProviderIcon({ provider }: { provider: ProviderKey }) {
  const base = "h-5 w-5";
  switch (provider) {
    case "cloudflare":
      return <Zap className={`${base} text-orange-500`} />;
    case "aws":
      return <Server className={`${base} text-amber-500`} />;
    case "azure":
      return <Cloud className={`${base} text-sky-500`} />;
    default:
      return <Globe2 className={base} />;
  }
}

function CellIcon({ label }: { label: string }) {
  const base = "h-4 w-4";
  switch (label) {
    case "Edge Compute or Serverless":
      return <Cpu className={`${base} text-emerald-500`} />;
    case "Object / Blob Storage":
      return <Box className={`${base} text-amber-500`} />;
    case "Relational Databases":
      return <Database className={`${base} text-sky-600`} />;
    case "Containers":
      return <Server className={`${base} text-orange-500`} />;
    case "Workflows":
      return <Route className={`${base} text-violet-500`} />;
    case "AI / Agents":
      return <Brain className={`${base} text-rose-500`} />;
    case "Vector & AI Search":
      return <Search className={`${base} text-indigo-500`} />;
    case "Content Delivery Network":
      return <Globe2 className={`${base} text-teal-500`} />;
    case "DNS":
      return <Network className={`${base} text-cyan-500`} />;
    case "Load Balancing":
      return <Zap className={`${base} text-lime-500`} />;
    default:
      return <Globe2 className={base} />;
  }
}

function FeatureCell({
  text,
  description,
  label,
  isActive,
}: {
  text?: string;
  description?: string;
  label: string;
  isActive: boolean;
}) {
  if (!text) {
    return <div className="h-12 rounded-md bg-slate-50/40" />;
  }
  return (
    <div
      className={`flow-cell group flex h-16 items-center gap-2 rounded-md border px-3 text-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-md
      ${isActive ? "bg-slate-50 text-slate-900 border-emerald-300 shadow-md ring-2 ring-emerald-200" : "bg-slate-800 text-slate-200 border-slate-600 opacity-95"}`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 shadow-sm ring-1 ring-slate-200 transition-transform duration-300
        ${isActive ? "animate-pulse scale-110" : "scale-100"}`}
      >
        <CellIcon label={label} />
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-[13px] font-semibold">{text}</span>
        {description && (
          <span className="mt-0.5 line-clamp-2 text-[11px] font-normal text-slate-500">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}

export default function TestFlowchartPage() {
  const [activeProvider, setActiveProvider] =
    useState<ProviderKey>("cloudflare");

  useEffect(() => {
    const order: ProviderKey[] = ["cloudflare", "aws", "azure"];
    let index = 0;
    const id = setInterval(() => {
      index = (index + 1) % order.length;
      setActiveProvider(order[index]);
    }, 2200);

    return () => clearInterval(id);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100/80 px-4 py-10">
      <div className="w-full max-w-4xl rounded-3xl bg-white/90 p-6 shadow-xl ring-1 ring-slate-200 font-['Roboto',sans-serif]">
        {/* Top title bar */}
        <header className="mb-4 flex flex-col items-center justify-center gap-2 border-b border-slate-200 pb-3 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-9 items-center rounded-full bg-gradient-to-r from-emerald-500 via-amber-400 to-sky-500 px-5 text-base font-semibold text-white shadow-sm">
              <span>Cloudflare</span>
              <span className="mx-1">vs</span>
              <span>AWS</span>
              <span className="mx-1">vs</span>
              <span>Azure</span>
            </div>
          </div>
          <div className="mt-1 flex w-full max-w-xl items-center justify-between text-xs text-slate-500">
            <span>Feature &amp; capability comparison</span>
            <span className="flex items-center gap-3">
              <span className="hidden text-[11px] text-slate-400 sm:inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1">
                <ShieldCheck className="h-3 w-3" />
                <span>Static UI demo</span>
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                Created by Dr. Partha Majumder
              </span>
            </span>
          </div>
        </header>

        {/* Table-style comparison */}
        <div className="animated-border overflow-hidden rounded-2xl border-2 border-dotted border-slate-700 bg-slate-900 shadow-sm">
          <table className="min-w-full border-collapse text-xs">
            <thead className="bg-slate-800 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
              <tr>
                <th className="w-[26%] border-b border-slate-700 px-3 py-2 text-left">
                  Feature or capability
                </th>
                <th className="w-[24%] border-b border-slate-700 px-0 py-0">
                  <div
                    className={`flex items-center justify-between rounded-xl border-l border-y px-3 py-2 text-[11px] font-semibold text-slate-900 bg-gradient-to-r ${providerHeader.cloudflare.bg} ${
                      activeProvider === "cloudflare"
                        ? "shadow-md ring-2 ring-orange-200 scale-[1.02]"
                        : ""
                    } transition-transform duration-300`}
                  >
                    <span>Cloudflare</span>
                    <ProviderIcon provider="cloudflare" />
                  </div>
                </th>
                <th className="w-[24%] border-b border-slate-200 px-0 py-0">
                  <div
                    className={`flex items-center justify-between rounded-xl border-l border-y px-3 py-2 text-[11px] font-semibold text-slate-900 bg-gradient-to-r ${providerHeader.aws.bg} ${
                      activeProvider === "aws"
                        ? "shadow-md ring-2 ring-amber-200 scale-[1.02]"
                        : ""
                    } transition-transform duration-300`}
                  >
                    <span>AWS</span>
                    <ProviderIcon provider="aws" />
                  </div>
                </th>
                <th className="w-[24%] border-b border-slate-200 px-0 py-0">
                  <div
                    className={`flex items-center justify-between rounded-xl border-l border-y px-3 py-2 text-[11px] font-semibold text-slate-900 bg-gradient-to-r ${providerHeader.azure.bg} ${
                      activeProvider === "azure"
                        ? "shadow-md ring-2 ring-sky-200 scale-[1.02]"
                        : ""
                    } transition-transform duration-300`}
                  >
                    <span>Azure</span>
                    <ProviderIcon provider="azure" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={feature.label}
                  className={idx % 2 === 0 ? "bg-slate-900" : "bg-slate-800"}
                >
                  {/* Feature label */}
                  <td className="border-t border-slate-700 px-3 py-2 align-top">
                    <div className="text-[11px] font-medium text-slate-200">
                      <span className="leading-snug">{feature.label}</span>
                    </div>
                  </td>

                  {/* Cloudflare cell */}
                  <td className="border-t border-slate-200 px-3 py-2 align-top">
                    <FeatureCell
                      text={feature.cloudflare}
                      description={feature.cloudflareDesc}
                      label={feature.label}
                      isActive={activeProvider === "cloudflare"}
                    />
                  </td>

                  {/* AWS cell */}
                  <td className="border-t border-slate-200 px-3 py-2 align-top">
                    <FeatureCell
                      text={feature.aws}
                      description={feature.awsDesc}
                      label={feature.label}
                      isActive={activeProvider === "aws"}
                    />
                  </td>

                  {/* Azure cell */}
                  <td className="border-t border-slate-200 px-3 py-2 align-top">
                    <FeatureCell
                      text={feature.azure}
                      description={feature.azureDesc}
                      label={feature.label}
                      isActive={activeProvider === "azure"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
