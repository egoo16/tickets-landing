import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ColorModeProvider } from "@/theme/ColorModeContext";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Eventos | Tickets",
  description: "Encuentra y compra boletos para eventos, venues y artistas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ColorModeProvider>
            <NavBar />
            {children}
          </ColorModeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
