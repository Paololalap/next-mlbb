import { Header } from "@/components/header/Header";

export default function NonAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header className='mt-10'/>
      {children}
    </>
  );
}
