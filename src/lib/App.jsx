import React, { useState } from 'react';
import getNoob from './getNoob';

import House from './House';
import Noob from './Noob';
import NoobForm from './NoobForm';
import studentData from './../_data/harrypotter.json';
import houseData from './../_data/houses.json';

export default function App() {
  const [students, setStudents] = useState(studentData);
  const [selected, setSelected] = useState(); // 'Gryffindor' ou 'Slytherin'
  const [ranking, setRanking] = useState({
    Gryffindor: 100,
    Slytherin: 50,
  });

  const noobs = students.filter(s => !s.house);

  function addNoob(name, ancestry) {
    const noob = getNoob(name, ancestry);

    setStudents(prevNoobs => [...prevNoobs, noob]);
  }

  function toggleHouse(name) {
    setSelected(s => (s === name ? undefined : name));
  }
  function setHousePoints(name) {
    const randomNumber = 5 + Math.floor(Math.random() * 10);
    const randomSign = Math.random() * 2 > 1 ? 1 : -1;

    setRanking(r => {
      return {
        ...r,
        [name]: r[name] + randomSign * randomNumber,
      };
    });
  }
  function resetHousePoints(name) {
    setRanking(r => {
      return {
        ...r,
        [name]: 0,
      };
    });
  }

  const houseInstances = [...houseData]
    .sort((house1, house2) => {
      return -ranking[house1.name] + ranking[house2.name];
    })
    .map(({ name, logo }) => (
      <House
        key={name}
        name={name}
        open={selected === name}
        logo={logo}
        students={students.filter(item => item.house === name)}
        points={ranking[name]}
        toggle={() => toggleHouse(name)}
        setPoints={() => setHousePoints(name)}
        resetPoints={() => resetHousePoints(name)}
      />
    ));

  return (
    <div className="App">
      <NoobForm add={addNoob} />
      <ul className="noobs">
        {noobs.map(({ name, image, dateOfBirth }) => (
          <Noob key={name + dateOfBirth} name={name} avatar={image} />
        ))}
      </ul>
      <div className="houses">{houseInstances}</div>
    </div>
  );
}
