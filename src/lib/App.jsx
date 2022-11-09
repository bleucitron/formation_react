import React, { useEffect, useState, useCallback } from 'react';
import getNoob from './getNoob';

import House from './House';
import Hat from './Hat';
import NoobForm from './NoobForm';
import Lang from './Lang';
import Layout from './Layout';
import houseData from './../_data/houses.json';
import { LangContext } from './contexts';

export default function App() {
  const [lang, setLang] = useState('en');
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState('Gryffindor'); // 'Gryffindor' ou 'Slytherin'
  const [ranking, setRanking] = useState({
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0,
  });

  useEffect(() => {
    fetch('https://hp-api.herokuapp.com/api/characters/students')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setStudents(data);
      });
  }, []);

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
  function assignHouseToNoob(noob, house) {
    noob.house = house;

    setStudents(s => [...s]);
  }
  const toggleLang = useCallback(
    () => setLang(l => (l === 'en' ? 'fr' : 'en')),
    [],
  );

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
        expell={student => assignHouseToNoob(student)}
      />
    ));

  return (
    <LangContext.Provider value={lang}>
      <Layout>
        <div className="App">
          <Lang
            label={lang === 'fr' ? 'To english' : 'To french'}
            toggle={toggleLang}
          />
          <NoobForm add={addNoob} />
          {noobs.length > 0 && (
            <Hat
              noobs={noobs}
              houses={houseData.map(h => h.name)}
              assignNoob={assignHouseToNoob}
            />
          )}
          <div className="houses">{houseInstances}</div>
        </div>
      </Layout>
    </LangContext.Provider>
  );
}
