import Footer from "@/components/ui/shared/footer";
import Header from "@/components/ui/shared/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="min-h-full flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
