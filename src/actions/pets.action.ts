'use server';

export const getAllPets = async () => {
  const respons = await fetch(
    'https://bytegrad.com/course-assets/projects/petsoft/api/pets'
  );
  if (!respons.ok) {
    throw new Error('could not fetch data');
  }
  const data = respons.json();

  return data;
};
