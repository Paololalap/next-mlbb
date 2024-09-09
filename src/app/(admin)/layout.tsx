import { AuthProvider } from "@/providers/providers";
import { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container pt-10">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
