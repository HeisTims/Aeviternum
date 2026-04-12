"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, X, RotateCcw, Zap, Heart } from "lucide-react";

export default function RemiAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Simulate Remi appearing after 10 seconds or a "loss"
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-80 bg-surface/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-none">REMI</h4>
                  <p className="text-[10px] text-foreground/50">RECOVERY AGENT</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-foreground/30 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 relative z-10">
              <p className="text-sm text-foreground/80 leading-relaxed">
                "I noticed your rhythm was slightly off. Don't let variance define your edge. I've prepared a <span className="text-primary font-bold">Resilience Pack</span> for you."
              </p>

              <div className="bg-white/5 rounded-xl p-4 border border-white/5 border-dashed">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-xs text-foreground/50">Resilience Bonus</span>
                   <span className="text-xs font-mono text-primary">+150 Aura</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-xs text-foreground/50">Loss Buffer</span>
                   <span className="text-xs font-mono text-accent">Active (5m)</span>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95">
                <RotateCcw className="w-4 h-4" />
                CLAIM RECOVERY
              </button>
              
              <p className="text-[9px] text-center text-foreground/30 uppercase tracking-widest">
                No strings attached. Your edge is our priority.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && showPrompt && (
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="bg-primary/10 border border-primary/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium text-primary flex items-center gap-2 cursor-pointer hover:bg-primary/20 transition-all mb-2"
           onClick={() => setIsOpen(true)}
        >
           <Zap className="w-3 h-3 fill-primary" />
           Remi has an offer for you
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${
          isOpen ? "bg-white text-black" : "bg-gradient-to-tr from-primary to-accent text-white"
        }`}
      >
        <Sparkles className={`w-6 h-6 ${isOpen ? "animate-spin-slow" : ""}`} />
      </motion.button>
    </div>
  );
}
