import AddPetButton from '@/components/petstore-comp/buttons/add-pet-button';
import ContentBlock from '@/components/petstore-comp/content-block';
import PetDetails from '@/components/petstore-comp/pet-details';
import PetList from '@/components/petstore-comp/pet-list';
import SearchForm from '@/components/petstore-comp/search-form';
import Stats from '@/components/petstore-comp/stats';

const DashboardPage = async () => {
  return (
    <main>
      <div className="text-white flex justify-between py-8">
        <section>
          <h1 className="font-medium text-2xl leading-6">
            pet<span className="font-semibold">soft</span>
          </h1>
          <p className="text-lg opacity-80">
            Manage your pet daycare with ease
          </p>
        </section>
        <Stats />
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:h-[600px]">
        <div className="flex flex-col gap-4 col-span-1">
          <div className="h-[45px]">
            <SearchForm />
          </div>

          <div className="relative h-[300px] md:h-full">
            <ContentBlock>
              <PetList />
              <div className="absolute bottom-4 right-4">
                <AddPetButton />
              </div>
            </ContentBlock>
          </div>
        </div>
        <div className="md:col-span-2 md:w-full h-[500px] md:h-full">
          <ContentBlock>
            <PetDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
