import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Minnesota ICE Shooting Incident - Interactive Information Portal",
  description: "Comprehensive, interactive website providing verified information about the Minnesota ICE shooting incident, including timeline, fact-checking, and official statements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
        <footer className="bg-slate-800 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm">
              This website provides factual information about the Minnesota ICE shooting incident.
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Information compiled from verified news sources and official statements.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
