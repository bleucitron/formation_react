import { faker } from '@faker-js/faker';

function random(n) {
  return Math.floor(Math.random() * n);
}

const ancestryById = {
  0: 'half-blood',
  1: 'pure-blood',
  2: 'muggleborn',
};

export default function getNoob(name, ancestryId) {
  const genderRand = random(2);
  const gender = genderRand ? 'male' : 'female';

  name ??= faker.name.fullName({ sex: gender });
  const actor = faker.name.fullName({ sex: gender });
  const birthdate = faker.date
    .birthdate({
      min: 1976,
      max: 1985,
      mode: 'year',
    })
    .toLocaleDateString()
    .replaceAll('/', '-');

  const ancestryRand = ancestryId ?? random(3);
  const ancestry = ancestryById[ancestryRand];

  return {
    name,
    house: undefined,
    dateOfBirth: birthdate,
    yearOfBirth: parseInt(birthdate.split('-')[2]),
    wizard: true,
    ancestry,
    patronus: undefined,
    eyeColor: faker.color.human(),
    hairColor: faker.color.human(),
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor,
    alive: true,
    image: faker.image.avatar(),
  };
}
