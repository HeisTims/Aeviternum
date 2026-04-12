"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AppState {
  balance: number;
  aura: number;
  updateBalance: (amount: number) => void;
  updateAura: (amount: number) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState(428.50);
  const [aura, setAura] = useState(1247);

  const updateBalance = (amount: number) => setBalance(prev => prev + amount);
  const updateAura = (amount: number) => setAura(prev => prev + amount);

  return (
    <AppContext.Provider value={{ balance, aura, updateBalance, updateAura }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppStore must be used within an AppProvider");
  }
  return context;
}
