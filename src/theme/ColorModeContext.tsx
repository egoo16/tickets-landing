"use client";
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themeDark, themeLight } from "./theme";

// Tipos
export type ColorMode = "light" | "dark" | "system";
type Resolved = "light" | "dark";

interface Ctx {
  mode: ColorMode;
  resolvedMode: Resolved;
  setMode: (m: ColorMode) => void;
}

export const ColorModeContext = React.createContext<Ctx>({
  mode: "system",
  resolvedMode: "light",
  setMode: () => {},
});

function getSystemMode(): Resolved {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ColorModeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [mode, setModeState] = React.useState<ColorMode>("system");
  const [resolvedMode, setResolvedMode] = React.useState<Resolved>("light");

  React.useEffect(() => {
    const saved = (localStorage.getItem("colorMode") as ColorMode) || "system";
    setModeState(saved);
    setResolvedMode(saved === "system" ? getSystemMode() : (saved as Resolved));

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      setResolvedMode(prev => (mode === "system" ? getSystemMode() : prev));
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const setMode = (m: ColorMode) => {
    setModeState(m);
    localStorage.setItem("colorMode", m);
    setResolvedMode(m === "system" ? getSystemMode() : (m as Resolved));
  };

  const theme = resolvedMode === "dark" ? themeDark : themeLight;

  return (
    <ColorModeContext.Provider value={{ mode, resolvedMode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
