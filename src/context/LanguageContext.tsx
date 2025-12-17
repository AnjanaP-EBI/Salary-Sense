"use client";

import { createContext, useContext, useState } from "react";

type Language = "en" | "si";

const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
} | null>(null);

// 👇 THIS is useLanguage
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}

// 👇 This provides the state
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
