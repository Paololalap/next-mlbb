import { inter } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    template: "%s - MLBB.gg",
    absolute: "MLBB.gg",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "container px-0 sm:px-8")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
