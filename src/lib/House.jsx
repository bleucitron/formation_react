import React, { useState } from 'react';
import Student from './Student';

export default function House(props) {
  const { name, logo, students, open, toggle } = props;

  const [points, setPoints] = useState(0);

  function givePoints() {
    setPoints(prevPoints => prevPoints + 10);
  }
  function resetPoints() {
    setPoints(0);
  }

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
      <div className="name">{name}</div>

      <img src={logo} alt={name} />
      <button onClick={givePoints}>Give points</button>
      <button onClick={resetPoints}>Reset points</button>
      <div>Points: {points}</div>
      <button onClick={toggle}>Toggle students</button>
      {open ? instances : null}
    </div>
  );
}
