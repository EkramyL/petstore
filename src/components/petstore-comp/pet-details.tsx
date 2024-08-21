'use client';

import { usePetContext } from '@/lib/hooks';
import Image from 'next/image';

const PetDetails = () => {
  const { selectedPet } = usePetContext();

  return (
    <section className="w-full h-full">
      {!selectedPet ? (
        <div className="h-full flex items-center justify-center">
          <p className="font-medium text-xl">no pet selected</p>
        </div>
      ) : (
        <>
          <div className="flex items-center px-8 py-5 border-b border-black/10 bg-white">
            <Image
              src={selectedPet?.imageUrl}
              height={75}
              width={75}
              alt="image"
              className="w-[75px] h-[75px] rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold ml-5">{selectedPet?.name}</h2>
          </div>

          <div className="flex justify-around py-10 text-center">
            <div>
              <h3 className="font-medium uppercase text-zinc-700 text-[13px]">
                {' '}
                Owner Name
              </h3>
              <p className="text-zinc-800 text-lg">{selectedPet?.ownerName}</p>
            </div>
            <div>
              <h3 className="font-medium uppercase text-zinc-700 text-[13px]">
                Age
              </h3>
              <p className="text-zinc-800 text-lg">{selectedPet?.age}</p>
            </div>
          </div>

          <div className="px-8 py-5 border border-black/10 bg-white mx-9 mb-8 rounded-md">
            {selectedPet?.notes}
          </div>
        </>
      )}
    </section>
  );
};

export default PetDetails;
