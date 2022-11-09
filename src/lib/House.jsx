import React, { Fragment, useContext } from 'react';
import Student from './Student';
import { LangContext } from './contexts';
import { translate } from './utils';

export default function House(props) {
  const {
    name,
    logo,
    students,
    open,
    points,
    toggle,
    setPoints,
    resetPoints,
    expell,
  } = props;

  const lang = useContext(LangContext);

  const studentsInstances = students.map(student => {
    const { name, dateOfBirth, image, wand } = student;
    return (
      <Fragment key={name + dateOfBirth}>
        <Student
          name={name}
          wand={wand}
          fav={name === 'Harry Potter'}
          birthdate={dateOfBirth}
          avatar={image}
        />
        <button onClick={() => expell(student)}>Expell</button>
      </Fragment>
    );
  });

  return (
    <div className="House">
      <div>
        {translate(lang, name)} ({points} points)
      </div>
      <div>Nb of students: {students.length}</div>
      <img src={logo} alt={name} />
      <section className="buttons">
        <button onClick={setPoints}>Change Points</button>
        <button onClick={resetPoints}>Reset</button>
        <button onClick={toggle}>Toggle Students</button>
      </section>
      {open && <ul>{studentsInstances}</ul>}
    </div>
  );
}
