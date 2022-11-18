import React, { useContext } from 'react';
import Student from './Student';

import trad from '../_data/fr.json';

import { LangContext } from './contexts';

export default function House(props) {
  const {
    name,
    logo,
    first,
    students,
    open,
    toggle,
    points,
    givePoints,
    resetPoints,
  } = props;

  const lang = useContext(LangContext);

  const instances = students.map(student => (
    <Student
      name={student.name}
      date={student.dateOfBirth}
      picture={student.image}
      key={student.name}
    />
  ));

  return (
    <div className="House">
      {first ? <div>Leader</div> : null}
      <div className="name">{lang === 'fr' ? trad[name] : name}</div>

      <img src={logo} alt={name} />
      <button onClick={givePoints}>Give points</button>
      <button onClick={resetPoints}>Reset points</button>
      <div>Points: {points}</div>
      <button onClick={toggle}>Toggle students</button>
      {open ? instances : null}
    </div>
  );
}
