"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, ChevronRight, Activity, Zap, Users, Gift, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-[#1a1a1a] bg-surface/50 backdrop-blur-xl flex flex-col pt-8">
        <div className="px-6 mb-12">
          <h1 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
             <Clock className="w-6 h-6 text-primary" />
             AEVITERNUM
          </h1>
          <p className="text-xs text-foreground/50 mt-1 uppercase tracking-widest">Your time is now</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {[
            { name: "Live Markets", icon: Activity, active: true },
            { name: "Flash Bets", icon: Zap },
            { name: "The Collective", icon: Users },
            { name: "Aura Shop", icon: Gift },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                item.active 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto mb-6">
          <div className="bg-surface border border-white/5 rounded-xl p-4">
            <p className="text-xs text-foreground/50 mb-1">Current Balance</p>
            <div className="text-2xl font-semibold flex items-center justify-between">
              $428.50
              <button className="text-xs bg-white text-black px-3 py-1 rounded-full font-bold hover:bg-gray-200 transition-colors">
                Instant Withdraw
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2">
               <div className="flex justify-between items-center text-xs">
                 <span className="text-foreground/50">Aura Points</span>
                 <span className="text-aura font-mono flex items-center gap-1">✨ 1,247</span>
               </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto flex">
        <div className="flex-1 p-8 max-w-4xl mx-auto">
          {/* Sunk Cost / Identity Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-surface to-surface-hover border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            <div className="flex justify-between items-end mb-4 relative z-10">
              <div>
                <p className="text-sm text-foreground/50 mb-1">Prophet Rank</p>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  Silver Seer <span className="text-primary">✦</span>
                </h2>
              </div>
              <div className="text-right">
                <p className="text-sm text-foreground/50 mb-1">Predictions</p>
                <p className="font-mono text-xl">1,247</p>
              </div>
            </div>
            <div className="w-full bg-black/50 rounded-full h-1.5 mb-2 relative z-10">
              <div className="bg-primary h-1.5 rounded-full w-[49.8%]" />
            </div>
            <div className="flex justify-between text-xs text-foreground/50 relative z-10">
              <span>Current</span>
              <span>1,253 to Gold Seer</span>
            </div>
          </motion.div>

          {/* Markets */}
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
             <TrendingUp className="w-5 h-5 text-accent" />
             Active Opportunities
          </h3>
          <div className="grid grid-cols-2 gap-4">
             {/* Card 1 */}
             <motion.div 
               whileHover={{ y: -2, scale: 1.01 }}
               className="bg-surface border border-white/5 p-5 rounded-xl cursor-pointer hover:border-primary/30 transition-all group relative overflow-hidden"
             >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-md font-medium border border-accent/20">BOOSTED 55% WIN RATE</div>
                  <Clock className="w-4 h-4 text-foreground/40" />
                </div>
                <h4 className="font-medium text-lg leading-tight mb-6">BTC/USD hits $95K before 16:00 UTC</h4>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#1a1a1a] hover:bg-primary/20 hover:text-primary transition-colors py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1 border border-white/5">
                    <ArrowUpRight className="w-4 h-4" /> YES 2.1x
                  </button>
                  <button className="flex-1 bg-[#1a1a1a] hover:bg-red-500/20 py-2 hover:text-red-500 transition-colors rounded-lg text-sm font-semibold flex items-center justify-center gap-1 border border-white/5">
                    <ArrowDownRight className="w-4 h-4" /> NO 1.8x
                  </button>
                </div>
             </motion.div>
             
             {/* Card 2 */}
             <motion.div 
               whileHover={{ y: -2, scale: 1.01 }}
               className="bg-surface border border-white/5 p-5 rounded-xl cursor-pointer hover:border-white/10 transition-all"
             >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs px-2 py-1 bg-white/5 text-foreground/70 rounded-md font-medium border border-white/5">FLASH BET</div>
                  <Zap className="w-4 h-4 text-amber-500" />
                </div>
                <h4 className="font-medium text-lg leading-tight mb-6">Next global block hash ends in odd number</h4>
                <div className="flex gap-2">
                  <button className="flex-1 bg-white text-black hover:bg-gray-200 transition-colors py-2 rounded-lg text-sm font-semibold border border-transparent">
                    ODD 1.95x
                  </button>
                  <button className="flex-1 bg-[#1a1a1a] hover:bg-white/10 py-2 transition-colors rounded-lg text-sm font-semibold border border-white/5">
                    EVEN 1.95x
                  </button>
                </div>
             </motion.div>
          </div>
        </div>

        {/* The Pulse (Sidebar right) */}
        <div className="w-80 border-l border-[#1a1a1a] bg-surface/30 px-4 py-6 flex flex-col h-full">
           <div className="flex items-center justify-between mb-6 px-2">
              <h3 className="font-semibold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                The Pulse
              </h3>
              <span className="text-xs text-foreground/50">24,103 online</span>
           </div>
           
           <div className="flex-1 overflow-hidden relative fade-mask">
              <div className="space-y-4 px-2">
                 {[
                   { user: "Alex_23", action: "won $1,450", item: "ETH > $3K", time: "just now", color: "text-green-400" },
                   { user: "SarahQ", action: "cashed out", item: "$800.00 instantly", time: "2s ago", color: "text-primary" },
                   { user: "Anon88", action: "lost", item: "Flash Bet", time: "12s ago", color: "text-red-400/70" },
                   { user: "GoldenBoy", action: "won $42", item: "Community Chest", time: "1m ago", color: "text-aura" }
                 ].map((event, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-sm flex flex-col pb-4 border-b border-white/5 last:border-0"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-foreground/80">{event.user}</span>
                        <span className="text-[10px] text-foreground/40">{event.time}</span>
                      </div>
                      <p className="text-foreground/60 leading-tight">
                        <span className={`font-semibold ${event.color}`}>{event.action}</span> on {event.item}
                      </p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
