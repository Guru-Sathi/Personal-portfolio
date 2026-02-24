import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { ActivityHeatmap } from "@/components/ui/heatmap";
import { Terminal, Cpu, LineChart, Code2, Github, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-7xl space-y-8 pt-8 md:pt-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            John Doe
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

           {/* Project 1 */}
           <BentoCard className="md:col-span-1 min-h-[200px]">
             <div className="flex flex-col h-full justify-between">
                <Cpu className="h-6 w-6 text-zinc-500" />
                <div>
                    <h3 className="font-mono text-sm mb-1 text-emerald-400">01. ENGINE</h3>
                    <p className="text-xs text-zinc-500">Custom matching engine written in Rust.</p>
                </div>
             </div>
           </BentoCard>

           {/* Project 2 */}
           <BentoCard className="md:col-span-1 min-h-[200px]">
             <div className="flex flex-col h-full justify-between">
                <LineChart className="h-6 w-6 text-zinc-500" />
                 <div>
                    <h3 className="font-mono text-sm mb-1 text-emerald-400">02. QUANT</h3>
                    <p className="text-xs text-zinc-500">ML-driven market making strategies.</p>
                </div>
             </div>
           </BentoCard>

           {/* Project 3 */}
           <BentoCard className="md:col-span-1 min-h-[200px]">
             <div className="flex flex-col h-full justify-between">
                <Code2 className="h-6 w-6 text-zinc-500" />
                 <div>
                    <h3 className="font-mono text-sm mb-1 text-emerald-400">03. PROTOCOL</h3>
                    <p className="text-xs text-zinc-500">Decentralized exchange protocol on Solana.</p>
                </div>
             </div>
           </BentoCard>

          {/* Activity Heatmap */}
          <BentoCard className="md:col-span-3">
             <ActivityHeatmap />
          </BentoCard>

        </BentoGrid>
      </div>
    </main>
  );
}
