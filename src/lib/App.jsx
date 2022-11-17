import React, { useState } from 'react';
import House from './House';
import getNoob from './getNoob';

import data from '../_data/harrypotter.json';

const allHouses = [
  {
    name: 'Gryffindor',
    logo: 'https://s1.qwant.com/thumbr/0x380/9/9/4f75357d1344d6f63ce46b567b2fb1a1acdd6a4de921353f3d32c02c8d0a22/BannerFlag-Gryffindor-HarryPotter-Product-_5-4895205600140.jpg?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1678%2F4201%2Fproducts%2FBannerFlag-Gryffindor-HarryPotter-Product-_5-4895205600140.jpg%3Fv%3D1527289142&q=0&b=1&p=0&a=0',
  },
  {
    name: 'Hufflepuff',
    logo: 'https://s1.qwant.com/thumbr/0x380/b/3/96042420fbbd856bdea5fac6cf458a04a37e4c24dc8b48ff7c9a40bf80020f/AAuE7mD9oQGJMYJBUo_9g5uK6QSGbzTGDNEmYspZXQ=s900-mo-c-c0xffffffff-rj-k-no.jpg?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mD9oQGJMYJBUo_9g5uK6QSGbzTGDNEmYspZXQ%3Ds900-mo-c-c0xffffffff-rj-k-no&q=0&b=1&p=0&a=0',
  },
];

// const housesNames = allHouses.map(h => h.name);
// const entries = housesNames.map(n => [n, 0]);
// const initialRanking = Object.fromEntries(entries);

export default function App() {
  const [allStudents, setAllStudents] = useState(data);
  const [selectedHouse, setSelectedHouse] = useState('Gryffindor');

  function addStudent() {
    const noob = getNoob();

    setAllStudents(prevStudents => [...prevStudents, noob]);
  }
  function toggleHouse(name) {
    setSelectedHouse(prevSelected => (name === prevSelected ? '' : name));
  }

  const gryffindorStudents = allStudents.filter(
    student => student.house === 'Gryffindor',
  );

  const hufflepuffStudents = allStudents.filter(
    student => student.house === 'Hufflepuff',
  );

  const noobs = allStudents.filter(student => !student.house);

  const noobNames = noobs.map(n => (
    <li key={n.name + n.dateOfBirth}>{n.name}</li>
  ));

  return (
    <div className="App">
      <button onClick={addStudent}>Add Student</button>
      <ul className="noobs">{noobNames}</ul>
      <div className="houses">
        <House
          students={gryffindorStudents}
          name="Gryffindor"
          open={selectedHouse === 'Gryffindor'}
          toggle={() => toggleHouse('Gryffindor')}
          logo="https://s1.qwant.com/thumbr/0x380/9/9/4f75357d1344d6f63ce46b567b2fb1a1acdd6a4de921353f3d32c02c8d0a22/BannerFlag-Gryffindor-HarryPotter-Product-_5-4895205600140.jpg?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1678%2F4201%2Fproducts%2FBannerFlag-Gryffindor-HarryPotter-Product-_5-4895205600140.jpg%3Fv%3D1527289142&q=0&b=1&p=0&a=0"
        />
        <House
          students={hufflepuffStudents}
          name="Hufflepuff"
          open={selectedHouse === 'Hufflepuff'}
          toggle={() => toggleHouse('Hufflepuff')}
          logo="https://s1.qwant.com/thumbr/0x380/b/3/96042420fbbd856bdea5fac6cf458a04a37e4c24dc8b48ff7c9a40bf80020f/AAuE7mD9oQGJMYJBUo_9g5uK6QSGbzTGDNEmYspZXQ=s900-mo-c-c0xffffffff-rj-k-no.jpg?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mD9oQGJMYJBUo_9g5uK6QSGbzTGDNEmYspZXQ%3Ds900-mo-c-c0xffffffff-rj-k-no&q=0&b=1&p=0&a=0"
        />
      </div>
    </div>
  );
}
