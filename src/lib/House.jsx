import React from 'react';
import Student from './Student';

export default function House(props) {
  const { name, logo, students, open, points, toggle, setPoints, resetPoints } =
    props;

  const studentsInstances = students.map(
    ({ name, dateOfBirth, wand, image }) => (
      <Student
        key={name + dateOfBirth}
        name={name}
        wand={wand}
        fav={name === 'Harry Potter'}
        birthdate={dateOfBirth}
        avatar={image}
      />
    ),
  );

  return (
    <div className="House">
      <div>
        {name} ({points} points)
      </div>
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
