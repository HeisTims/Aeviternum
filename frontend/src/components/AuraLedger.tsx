"use client";

import { motion } from "framer-motion";
import { History, Shield, TrendingUp, Info } from "lucide-react";

interface LedgerEntry {
  id: string;
  type: "trade" | "contribution" | "bonus" | "burn";
  amount: number;
  label: string;
  timestamp: string;
  positive: boolean;
}

const LEDGER_DATA: LedgerEntry[] = [
  { id: "1", type: "bonus", amount: 250, label: "Persistence Multiplier", timestamp: "14:02", positive: true },
  { id: "2", type: "contribution", amount: -12.5, label: "Collective Infrastructure", timestamp: "13:45", positive: false },
  { id: "3", type: "trade", amount: 450, label: "BTC Option Yield", timestamp: "13:20", positive: true },
  { id: "4", type: "contribution", amount: -8.0, label: "Ecosystem Stability", timestamp: "12:55", positive: false },
  { id: "5", type: "burn", amount: -15.0, label: "Edge Maintenance", timestamp: "11:30", positive: false },
];

export default function AuraLedger() {
  return (
    <div className="bg-surface/50 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full max-h-[500px]">
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/2">
        <h3 className="font-semibold flex items-center gap-2">
          <History className="w-4 h-4 text-aura" />
          Aura Ledger
        </h3>
        <div className="flex items-center gap-1 text-[10px] text-foreground/40 bg-white/5 px-2 py-1 rounded-full border border-white/5">
           <Shield className="w-3 h-3" />
           AUDITED SECURE
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {LEDGER_DATA.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between p-3 rounded-lg bg-white/2 hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                entry.positive ? "bg-primary/20 text-primary border border-primary/20" : "bg-aura/10 text-aura border border-aura/20"
              }`}>
                {entry.type === "contribution" ? <Shield className="w-4 h-4" /> : entry.positive ? "+" : "−"}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground/90">{entry.label}</p>
                <p className="text-[10px] text-foreground/40 font-mono uppercase tracking-tighter">{entry.type} • {entry.timestamp}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-mono font-bold ${entry.positive ? "text-primary" : "text-aura"}`}>
                {entry.positive ? "+" : ""}{entry.amount.toFixed(2)}
              </p>
              <p className="text-[10px] text-foreground/30">POINTS</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 bg-aura/5 border-t border-aura/10">
        <div className="flex items-start gap-2">
           <Info className="w-4 h-4 text-aura mt-0.5 shrink-0" />
           <p className="text-[11px] text-aura/80 leading-tight">
             Contributions support the Collective Edge. Higher contributions increase your Prophet Rank multipliers.
           </p>
        </div>
      </div>
    </div>
  );
}
