import { BentoGrid, BentoCard, SkillTag } from "@/components/ui/bento-grid";
import { ActivityHeatmap } from "@/components/ui/heatmap";
import { Terminal, Database, Bot, Mic, Lightbulb, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-7xl space-y-8 pt-8 md:pt-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Guru Prakash KS
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-mono">
            Systems Engineer & Algorithmic Trader
          </p>
        </header>

        <BentoGrid>
          {/* Hero / About Section */}
          <BentoCard className="md:col-span-2 md:row-span-1">
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-start justify-between">
                <Terminal className="h-8 w-8 text-zinc-500" />
                <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
                  ABOUT
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Engineering with Precision</h3>
                <p className="text-zinc-400 text-sm">
                  Building high-performance systems and low-latency trading infrastructure.
                  Obsessed with optimization, clean architecture, and minimalistic design.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Socials */}
          <BentoCard className="md:col-span-1 md:row-span-1">
             <div className="flex flex-col h-full justify-between">
              <div className="flex items-start justify-between">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center h-full">
                <a href="#" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                    <Github className="h-6 w-6" />
                </a>
                <a href="#" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                    <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                    <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </BentoCard>

           {/* Capstone 1: S3 Storage */}
           <BentoCard className="md:col-span-2 min-h-[220px]">
             <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <Database className="h-8 w-8 text-emerald-500" />
                    <span className="text-xs font-mono text-emerald-400/80 bg-emerald-950/30 border border-emerald-900/50 px-2 py-1 rounded">
                      CAPSTONE
                    </span>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-2 text-zinc-100">Distributed Object Storage</h3>
                    <p className="text-zinc-400 text-sm mb-4 max-w-lg">
                        A scalable, S3-compatible object storage system built from scratch. Features Erasure Coding,
                        distributed consistency, and high availability.
                    </p>
                    <a href="#s3-deep-dive" className="inline-flex items-center text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors group/link">
                        Technical Deep Dive <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                </div>
             </div>
           </BentoCard>

           {/* Hobby 1: Tamil AI Podcast */}
           <BentoCard className="md:col-span-1 min-h-[220px]" variant="creative">
             <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <Mic className="h-6 w-6 text-purple-400" />
                    <span className="text-xs font-mono text-purple-400/80 bg-purple-950/30 border border-purple-900/50 px-2 py-1 rounded">
                      CREATIVE
                    </span>
                </div>
                 <div>
                    <h3 className="font-semibold text-lg mb-1 text-zinc-200">Tamil AI Podcast</h3>
                    <p className="text-xs text-zinc-400">
                        Democratizing AI knowledge for the Tamil-speaking community. Weekly episodes on LLMs and GenAI.
                    </p>
                </div>
             </div>
           </BentoCard>

           {/* Capstone 2: Algo Trading */}
           <BentoCard className="md:col-span-2 min-h-[220px]">
             <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <Bot className="h-8 w-8 text-emerald-500" />
                    <span className="text-xs font-mono text-emerald-400/80 bg-emerald-950/30 border border-emerald-900/50 px-2 py-1 rounded">
                      CAPSTONE
                    </span>
                </div>
                <div>
                    <h3 className="font-semibold text-xl mb-2 text-zinc-100">Algo-Trading Bot</h3>
                    <p className="text-zinc-400 text-sm mb-4 max-w-lg">
                        Low-latency market making bot written in Rust. Implements custom order book management
                        and execution strategies on centralized exchanges.
                    </p>
                    <a href="#algo-deep-dive" className="inline-flex items-center text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors group/link">
                        Technical Deep Dive <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                </div>
             </div>
           </BentoCard>

           {/* Hobby 2: Civic Tech */}
           <BentoCard className="md:col-span-1 min-h-[220px]" variant="creative">
             <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <Lightbulb className="h-6 w-6 text-purple-400" />
                    <span className="text-xs font-mono text-purple-400/80 bg-purple-950/30 border border-purple-900/50 px-2 py-1 rounded">
                      IMPACT
                    </span>
                </div>
                 <div>
                    <h3 className="font-semibold text-lg mb-1 text-zinc-200">Civic-Tech Ideas</h3>
                    <p className="text-xs text-zinc-400">
                        Open-source tools for better governance and community engagement. Technology for social good.
                    </p>
                </div>
             </div>
           </BentoCard>

           {/* Knowledge Graph */}
           <BentoCard className="md:col-span-3 min-h-[200px]">
             <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h3 className="font-mono text-sm tracking-wider text-zinc-400">THE KNOWLEDGE GRAPH</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Systems */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Systems</h4>
                        <div className="flex flex-wrap gap-2">
                            <SkillTag glowing={true}>Rust</SkillTag>
                            <SkillTag>C++</SkillTag>
                            <SkillTag>Go</SkillTag>
                            <SkillTag>Linux Kernel</SkillTag>
                            <SkillTag>eBPF</SkillTag>
                            <SkillTag>Docker</SkillTag>
                        </div>
                    </div>

                    {/* Web */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Web</h4>
                        <div className="flex flex-wrap gap-2">
                            <SkillTag glowing={true}>Next.js</SkillTag>
                            <SkillTag>React</SkillTag>
                            <SkillTag>TypeScript</SkillTag>
                            <SkillTag>Tailwind CSS</SkillTag>
                            <SkillTag>PostgreSQL</SkillTag>
                            <SkillTag>Redis</SkillTag>
                        </div>
                    </div>

                    {/* Finance */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">Finance</h4>
                        <div className="flex flex-wrap gap-2">
                            <SkillTag glowing={true}>QuantLib</SkillTag>
                            <SkillTag>Python</SkillTag>
                            <SkillTag>Pandas</SkillTag>
                            <SkillTag>Time Series</SkillTag>
                            <SkillTag>Smart Contracts</SkillTag>
                            <SkillTag>Solana</SkillTag>
                        </div>
                    </div>
                </div>
             </div>
           </BentoCard>

          {/* Activity Heatmap */}
          <BentoCard className="md:col-span-3">
             <ActivityHeatmap />
          </BentoCard>

          {/* LeetCode Heatmap */}
          <BentoCard className="md:col-span-3">
             <ActivityHeatmap title="LeetCode Progress" variant="orange" />
          </BentoCard>

        </BentoGrid>
      </div>
    </main>
  );
}
