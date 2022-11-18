import React, { useEffect, useState } from 'react';
import House from './House';
import NoobForm from './NoobForm';
import getNoob from './getNoob';
import { LangContext } from './contexts';

import { useExp } from './hooks';

import houseData from '../_data/houses.json';

const url = 'https://hp-api.herokuapp.com/api/characters/students';

const housesNames = houseData.map(h => h.name);
const entries = housesNames.map(n => [n, 0]);
const initialRanking = Object.fromEntries(entries);

function AutoCount() {
  const [value] = useExp(1000);
  return <div>{value}</div>;
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [allStudents, setAllStudents] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState('Gryffindor');
  const [ranking, setRanking] = useState(initialRanking);

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(d => setAllStudents(d));
  }, []);

  function addStudent() {
    const noob = getNoob();

    setAllStudents(prevStudents => {
      return [...prevStudents, noob];
    });
  }
  function addCustomStudent(name, ancestry) {
    const noob = getNoob(name, ancestry);

    setAllStudents(prevStudents => {
      return [...prevStudents, noob];
    });
  }
  function toggleHouse(name) {
    setSelectedHouse(prevSelected => {
      return name === prevSelected ? '' : name;
    });
  }
  function givePoints(name) {
    setRanking(prevRanking => {
      const newRanking = { ...prevRanking };
      const nbPoints = newRanking[name];

      newRanking[name] = nbPoints + 10;

      return newRanking;
    });
  }
  function resetPoints(name) {
    setRanking(prevRanking => {
      const newRanking = { ...prevRanking };
      newRanking[name] = 0;

      return newRanking;
    });
  }
  function isFirst(name) {
    const values = Object.values(ranking);

    return ranking[name] === Math.max(...values);
  }

  const noobs = allStudents.filter(student => !student.house);

  const noobNames = noobs.map(n => (
    <li key={n.name + n.dateOfBirth}>
      {n.name} - {n.ancestry}
    </li>
  ));

  const houseInstances = houseData.map(house => {
    const students = allStudents.filter(
      student => student.house === house.name,
    );

    return (
      <House
        key={house.name}
        students={students}
        name={house.name}
        first={isFirst(house.name)}
        open={selectedHouse === house.name}
        toggle={() => toggleHouse(house.name)}
        points={ranking[house.name]}
        givePoints={() => givePoints(house.name)}
        resetPoints={() => resetPoints(house.name)}
        logo={house.logo}
      />
    );
  });

  return (
    <div className="App">
      <AutoCount />
      <LangContext.Provider value={lang}>
        <menu>
          <button
            className={lang === 'fr' ? 'active' : ''}
            onClick={() => setLang('fr')}
          >
            Fr
          </button>
          <button
            className={lang === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
          >
            En
          </button>
        </menu>
        <button onClick={addStudent}>Add Student</button>
        <NoobForm add={addCustomStudent} />

        <ul className="noobs">{noobNames}</ul>
        <div className="houses">{houseInstances}</div>
      </LangContext.Provider>
    </div>
  );
}
