
import Header from "@/components/ui/shared/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className=" flex h-screen justify-center">{children}</main>

    </>
  );
}
