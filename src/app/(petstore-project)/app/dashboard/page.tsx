import { getAllPets } from '@/actions/pets.action';
import ContentBlock from '@/components/petstore-comp/content-block';
import PetDetails from '@/components/petstore-comp/pet-details';
import PetList from '@/components/petstore-comp/pet-list';
import SearchForm from '@/components/petstore-comp/search-form';

const DashboardPage = async () => {
  const data = await getAllPets();

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
        <section className="text-center">
          <p className="text-2xl font-bold">2</p>
          <p className=" text-lg font-medium opacity-80">current guests</p>
        </section>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:h-[600px]">
        <div className="flex flex-col gap-4 col-span-1">
          <div className="h-[45px]">
            <SearchForm />
          </div>

          <div className="h-[300px] md:h-full">
            <ContentBlock>
              <PetList pets={data} />
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
