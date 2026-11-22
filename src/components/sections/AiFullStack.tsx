"use client";

import React, { useState } from "react";
import { TechIcon, TechBadge } from "@/components/icons/TechIcons";
import {
  Bot,
  Layers,
  Zap,
  ShieldCheck,
  Code2,
  Database,
  Terminal,
  Cpu,
} from "lucide-react";

export default function AiFullStack() {
  const [activeTab, setActiveTab] = useState<"stream" | "schema" | "rag">("stream");

  return (
    <section
      id="ai-fullstack"
      className="py-24 md:py-32 bg-[#07090E] border-b border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-semibold text-cyan-400 shadow-xs mb-4">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span className="tracking-widest uppercase font-mono font-bold">ENGINEERING DEEP DIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            AI &amp; Full-Stack{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Architecture
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Bridging cutting-edge artificial intelligence with production-ready software engineering: sub-second streaming, strict runtime schema validation, and high-concurrency systems.
          </p>
        </div>

        {/* 2-Column Technical Architecture Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* ========================================================= */}
          {/* PILLAR 1: Autonomous AI & LLM Systems                    */}
          {/* ========================================================= */}
          <div className="glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-cyan-400 tracking-wider block">
                      Architecture 01
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Autonomous AI &amp; LLM Pipelines
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    <TechIcon name="OpenAI" className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    <TechIcon name="Claude" className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Connecting foundation models to live business infrastructure without hallucinations or runaway API bills through structured output contracts and deterministic tool sandboxes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>Streaming Token Delivery with Optimistic UI</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Edge-streamed responses via OpenAI and Claude APIs with optimistic UI rendering, backpressure control, and client cancellation tokens.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Deterministic Zod Schema Contracts</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Guaranteed structured JSON outputs preventing invalid runtime states across database writes and downstream agent tool invocations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                    <Database className="w-4 h-4 text-blue-400" />
                    <span>Vector Semantic Retrieval (pgvector &amp; RAG)</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    High-dimensional vector embedding search stored in PostgreSQL pgvector, filtered by tenant isolation policies.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
              <TechBadge name="OpenAI" label="OpenAI API" />
              <TechBadge name="Claude" label="Claude 3.5" />
              <TechBadge name="Python" label="Python" />
              <TechBadge name="pgvector" label="pgvector" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* PILLAR 2: Deterministic Full-Stack Web Architecture       */}
          {/* ========================================================= */}
          <div className="glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-blue-400 tracking-wider block">
                      Architecture 02
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Full-Stack Next.js 15 &amp; Cloud
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    <TechIcon name="Next.js" className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    <TechIcon name="TypeScript" className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Constructing high-reliability web applications on React 19 and Next.js 15, prioritizing end-to-end type safety, deterministic routing, and cloud database persistence.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>React 19 Server Components (RSC)</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Zero-bundle-size server components rendering directly on edge compute nodes with minimal client JavaScript payload.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span>Supabase, PostgreSQL &amp; MongoDB Modeling</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Relational integrity and document stores with Row-Level Security (RLS), ACID compliance, and migration safety.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span>Docker Containers &amp; Edge Functions</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Reproducible isolated containerized microservices and global edge functions for low-latency request termination.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
              <TechBadge name="Next.js" label="Next.js 15" />
              <TechBadge name="React" label="React 19" />
              <TechBadge name="TypeScript" label="TypeScript" />
              <TechBadge name="Supabase" label="Supabase" />
              <TechBadge name="Docker" label="Docker" />
            </div>
          </div>
        </div>

        {/* Interactive Architecture Console Preview */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.1] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <div>
                <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                  ARCHITECTURAL TELEMETRY // PIPELINE RUNTIME
                </h4>
                <p className="text-xs text-slate-400">
                  Deterministic streaming execution contracts
                </p>
              </div>
            </div>

            {/* Console Tabs */}
            <div className="flex items-center gap-2 bg-[#07090E] p-1 rounded-xl border border-white/[0.08]">
              <button
                onClick={() => setActiveTab("stream")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === "stream"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                TokenStream.ts
              </button>
              <button
                onClick={() => setActiveTab("schema")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === "schema"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ZodContract.ts
              </button>
              <button
                onClick={() => setActiveTab("rag")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === "rag"
                    ? "bg-blue-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                pgvector.sql
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="bg-[#05070B] rounded-2xl p-5 font-mono text-xs text-slate-300 overflow-x-auto border border-white/[0.06]">
            {activeTab === "stream" && (
              <pre className="leading-relaxed">
                <code>
{`// Edge-streamed token pipeline with abort signal
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { openai } from '@/lib/ai/provider';

export async function POST(req: Request) {
  const { prompt, tenantId } = await req.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    stream: true,
    messages: [{ role: 'user', content: prompt }],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}`}
                </code>
              </pre>
            )}

            {activeTab === "schema" && (
              <pre className="leading-relaxed">
                <code>
{`// Deterministic output contract via Zod & Structured Outputs
import { z } from 'zod';

export const AgentActionSchema = z.object({
  action: z.enum(['query_database', 'send_webhook', 'synthesize_report']),
  parameters: z.record(z.string(), z.any()),
  confidenceScore: z.number().min(0).max(1),
  executionSandbox: z.literal('isolated_edge_v8'),
});

export type AgentAction = z.infer<typeof AgentActionSchema>;`}
                </code>
              </pre>
            )}

            {activeTab === "rag" && (
              <pre className="leading-relaxed">
                <code>
{`-- pgvector cosine similarity search with tenant RLS isolation
CREATE OR REPLACE FUNCTION match_documents (
  query_embedding vector(1536),
  match_threshold float,
  match_count int,
  filter_tenant_id uuid
)
RETURNS TABLE (id uuid, content text, similarity float)
LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT doc.id, doc.content, 1 - (doc.embedding <=> query_embedding) AS similarity
  FROM documents doc
  WHERE doc.tenant_id = filter_tenant_id
    AND 1 - (doc.embedding <=> query_embedding) > match_threshold
  ORDER BY similarity DESC
  LIMIT match_count;
END;
$$;`}
                </code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
