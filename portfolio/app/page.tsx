import { BentoGrid, BentoCard, SkillTag } from "@/components/ui/bento-grid";
import { ActivityHeatmap } from "@/components/ui/heatmap";
import { Terminal, Database, Mic, Lightbulb, Github, Twitter, Linkedin, ArrowUpRight, Mail, Phone, Trophy, Cpu } from "lucide-react";
import { fetchGithubActivity, fetchLeetCodeActivity } from "@/lib/fetch-activity";

export default async function Home() {
  const [githubData, leetcodeData] = await Promise.all([
    fetchGithubActivity(),
    fetchLeetCodeActivity(),
  ]);

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
          {/* 1. About */}
          <BentoCard className="md:col-span-2 md:row-span-1">
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-start justify-between">
                <Terminal className="h-8 w-8 text-zinc-500" />
                <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
                  ABOUT
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <p className="text-zinc-400 text-sm">
                  Building high-performance systems and low-latency trading infrastructure.
                  Obsessed with optimization, clean architecture, and minimalistic design.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* 2. Social media, contact details */}
          <BentoCard className="md:col-span-1 md:row-span-1">
             <div className="flex flex-col h-full justify-between">
              <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2 mb-2">
                Social media, contact details
              </h3>
              <div className="flex flex-col gap-4 items-center justify-center h-full">
                <div className="flex gap-4">
                    <a href="https://github.com/guruprakash273" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="https://twitter.com/guruprakash273" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                        <Twitter className="h-6 w-6" />
                    </a>
                    <a href="https://linkedin.com/in/guruprakash273" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                        <Linkedin className="h-6 w-6" />
                    </a>
                </div>
                <div className="flex flex-col items-center gap-2 text-sm text-zinc-400">
                    <a href="mailto:guruprakash273@gmail.com" className="flex items-center gap-2 hover:text-zinc-200 transition-colors">
                        <Mail className="h-4 w-4" /> guruprakash273@gmail.com
                    </a>
                    <a href="tel:+919080007202" className="flex items-center gap-2 hover:text-zinc-200 transition-colors">
                        <Phone className="h-4 w-4" /> +91 9080007202
                    </a>
                </div>
              </div>
            </div>
          </BentoCard>

           {/* 3. Capstone projects */}
           <BentoCard className="md:col-span-2 min-h-[220px]">
             <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <Database className="h-8 w-8 text-emerald-500" />
                    <span className="text-xs font-mono text-emerald-400/80 bg-emerald-950/30 border border-emerald-900/50 px-2 py-1 rounded">
                      CAPSTONE PROJECTS
                    </span>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg text-zinc-100">Distributed Object Storage</h3>
                            <a href="#s3-deep-dive" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                        <p className="text-zinc-400 text-xs">
                            Scalable, S3-compatible storage with Erasure Coding.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                             <h3 className="font-semibold text-lg text-zinc-100">Algo-Trading Bot</h3>
                             <a href="#algo-deep-dive" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
                                <ArrowUpRight className="h-4 w-4" />
                             </a>
                        </div>
                        <p className="text-zinc-400 text-xs">
                            Low-latency market making bot in Rust.
                        </p>
                    </div>
                </div>
             </div>
           </BentoCard>

           {/* 4. Hobby projects */}
           <BentoCard className="md:col-span-1 min-h-[220px]" variant="creative">
             <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <Mic className="h-6 w-6 text-purple-400" />
                    <span className="text-xs font-mono text-purple-400/80 bg-purple-950/30 border border-purple-900/50 px-2 py-1 rounded">
                      HOBBY PROJECTS
                    </span>
                </div>
                 <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="font-semibold text-sm mb-1 text-zinc-200">Tamil AI Podcast</h3>
                        <p className="text-xs text-zinc-400">
                            Democratizing AI knowledge.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm mb-1 text-zinc-200">Civic-Tech Ideas</h3>
                        <p className="text-xs text-zinc-400">
                            Open-source tools for governance.
                        </p>
                    </div>
                </div>
             </div>
           </BentoCard>

           {/* 5. Open source contributions */}
           <BentoCard className="md:col-span-1 min-h-[220px]">
             <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <Github className="h-6 w-6 text-blue-400" />
                    <span className="text-xs font-mono text-blue-400/80 bg-blue-950/30 border border-blue-900/50 px-2 py-1 rounded">
                      OPEN SOURCE CONTRIBUTIONS
                    </span>
                </div>
                 <div>
                    <h3 className="font-semibold text-lg mb-2 text-zinc-200">Contributions</h3>
                    <p className="text-sm text-zinc-400">
                        Active contributor to high-performance systems and developer tooling ecosystems.
                        Focused on Rust and Go projects.
                    </p>
                </div>
             </div>
           </BentoCard>

           {/* 6. Tech blogs */}
           <BentoCard className="md:col-span-2 min-h-[220px]">
             <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <Lightbulb className="h-6 w-6 text-yellow-400" />
                    <span className="text-xs font-mono text-yellow-400/80 bg-yellow-950/30 border border-yellow-900/50 px-2 py-1 rounded">
                      TECH BLOGS
                    </span>
                </div>
                 <div>
                    <h3 className="font-semibold text-lg mb-2 text-zinc-200">Technical Insights</h3>
                    <p className="text-sm text-zinc-400 mb-4">
                        Deep dives into system architecture, low-latency optimization, and distributed systems patterns.
                        Sharing knowledge on building scalable infrastructure.
                    </p>
                    <a href="#" className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors">
                        Read latest articles &rarr;
                    </a>
                </div>
             </div>
           </BentoCard>

           {/* 7. Tech Achievements */}
           <BentoCard className="md:col-span-1 min-h-[220px]">
             <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <Trophy className="h-6 w-6 text-orange-400" />
                    <span className="text-xs font-mono text-orange-400/80 bg-orange-950/30 border border-orange-900/50 px-2 py-1 rounded">
                      ACHIEVEMENTS
                    </span>
                </div>
                 <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="font-semibold text-sm mb-1 text-zinc-200">Global Rust Hackathon</h3>
                        <p className="text-xs text-zinc-400">
                            Winner - Best Systems Tool category.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm mb-1 text-zinc-200">ICPC Regionalist</h3>
                        <p className="text-xs text-zinc-400">
                            Top 50 team in Asia West continent.
                        </p>
                    </div>
                </div>
             </div>
           </BentoCard>

           {/* 8. Skills & Knowledge */}
           <BentoCard className="md:col-span-2 min-h-[220px]">
             <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <Cpu className="h-6 w-6 text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-400/80 bg-cyan-950/30 border border-cyan-900/50 px-2 py-1 rounded">
                      SKILLS
                    </span>
                </div>
                 <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-lg mb-2 text-zinc-200">Technical Arsenal</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillTag variant="default" glowing>Rust</SkillTag>
                        <SkillTag variant="default" glowing>Go</SkillTag>
                        <SkillTag>C++</SkillTag>
                        <SkillTag>Python</SkillTag>
                        <SkillTag>TypeScript</SkillTag>
                        <SkillTag>System Design</SkillTag>
                        <SkillTag>Distributed Systems</SkillTag>
                        <SkillTag>Kubernetes</SkillTag>
                        <SkillTag>Docker</SkillTag>
                        <SkillTag>Kafka</SkillTag>
                        <SkillTag>PostgreSQL</SkillTag>
                        <SkillTag>AWS</SkillTag>
                        <SkillTag>Terraform</SkillTag>
                        <SkillTag>gRPC</SkillTag>
                        <SkillTag>CI/CD</SkillTag>
                    </div>
                </div>
             </div>
           </BentoCard>

          {/* 9. github activity */}
          <BentoCard className="md:col-span-3">
             <ActivityHeatmap title="github activity" data={githubData} />
          </BentoCard>

          {/* 10. Leetcode Activity */}
          <BentoCard className="md:col-span-3">
             <ActivityHeatmap title="Leetcode Activity" variant="orange" data={leetcodeData} />
          </BentoCard>

        </BentoGrid>
      </div>
    </main>
  );
}
