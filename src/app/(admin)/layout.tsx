import { AuthProvider } from "@/providers/providers";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="container pt-10">{children}</div>
    </AuthProvider>
  );
}
