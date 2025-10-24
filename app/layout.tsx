import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valasys Story Prompt Builder",
  description:
    "Generate action-driven Instagram Story prompts that spotlight Valasys Media UAE."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
