"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PulseEvent {
  id: string;
  user: string;
  action: string;
  item: string;
  time: string;
  color: string;
}

const INITIAL_EVENTS: PulseEvent[] = [
  { id: "1", user: "Alex_23", action: "won $1,450", item: "ETH > $3K", time: "just now", color: "text-green-400" },
  { id: "2", user: "SarahQ", action: "cashed out", item: "$800.00 instantly", time: "2s ago", color: "text-primary" },
  { id: "3", user: "Anon88", action: "lost", item: "Flash Bet", time: "12s ago", color: "text-red-400/70" },
  { id: "4", user: "GoldenBoy", action: "won $42", item: "Community Chest", time: "1m ago", color: "text-aura" }
];

const MOCK_NAMES = ["TraderX", "CryptoQueen", "NightOwl", "EdgeLord", "AuraSeeker", "BullWhale"];
const MOCK_ACTIONS = [
  { action: "won $620", color: "text-green-400" },
  { action: "lost", color: "text-red-400/70" },
  { action: "cashed out", color: "text-primary" },
  { action: "taxed", color: "text-aura" },
  { action: "doubled", color: "text-accent" }
];
const MOCK_ITEMS = ["BTC Flash", "Aura Chest", "Solana Pivot", "Gas Rebate", "Collective Pool"];

export default function ThePulse() {
  const [events, setEvents] = useState<PulseEvent[]>(INITIAL_EVENTS);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent: PulseEvent = {
        id: Math.random().toString(36).substr(2, 9),
        user: MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)],
        ...MOCK_ACTIONS[Math.floor(Math.random() * MOCK_ACTIONS.length)],
        item: MOCK_ITEMS[Math.floor(Math.random() * MOCK_ITEMS.length)],
        time: "just now",
        color: MOCK_ACTIONS[Math.floor(Math.random() * MOCK_ACTIONS.length)].color, // Simple fix for type
      };
      
      setEvents(prev => [newEvent, ...prev.slice(0, 7)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-80 border-l border-[#1a1a1a] bg-surface/30 px-4 py-6 flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between mb-6 px-2">
        <h3 className="font-semibold flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          The Pulse
        </h3>
        <span className="text-xs text-foreground/50">24,103 online</span>
      </div>
      
      <div className="flex-1 relative">
        <div className="space-y-4 px-2 overflow-hidden h-[calc(100vh-200px)]">
          <AnimatePresence initial={false}>
            {events.map((event) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: 20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: "auto" }}
                exit={{ opacity: 0, x: -20, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-sm flex flex-col pb-4 border-b border-white/5 last:border-0 overflow-hidden"
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
          </AnimatePresence>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
