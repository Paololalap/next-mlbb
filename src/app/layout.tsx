import { Toaster } from "@/components/ui/toaster";
import { inter } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - MLBB.gg",
    absolute: "Mobile Legends: Bang Bang Character List",
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
      <body
        className={cn(
          inter.className,
          "container min-h-fit min-w-fit overflow-x-hidden px-0 sm:px-8 mb-10",
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
