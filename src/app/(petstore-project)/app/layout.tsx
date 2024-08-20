import AppFooter from '@/components/petstore-comp/app-footer';
import AppHeader from '@/components/petstore-comp/app-header';
import BackgroundPattern from '@/components/petstore-comp/background-pattern';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BackgroundPattern />
      <div className="max-w-[1050px] mx-auto px-4 flex flex-col min-h-screen">
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </div>
  );
}
