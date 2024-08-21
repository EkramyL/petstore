import AppFooter from '@/components/petstore-comp/app-footer';
import AppHeader from '@/components/petstore-comp/app-header';
import BackgroundPattern from '@/components/petstore-comp/background-pattern';
import Providers from '../providers';
import { getAllPets } from '@/actions/pets.action';
import { Pet } from '@/lib/types';

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data: Pet[] = await getAllPets();

  return (
    <div>
      <BackgroundPattern />
      <div className="max-w-[1050px] mx-auto px-4 flex flex-col min-h-screen">
        <Providers data={data}>
          <AppHeader />
          {children}
          <AppFooter />
        </Providers>
      </div>
    </div>
  );
}
