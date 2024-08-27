import { Header } from "@/components/header/Header";

export default function NonAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header className='pt-10'/>
      {children}
    </>
  );
}
