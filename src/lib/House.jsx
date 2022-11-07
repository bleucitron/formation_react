import React from 'react';
import Student from './Student';

export default function House(props) {
  const { name, logo, students } = props;

  const studentsInstances = students.map(student => (
    <Student
      key={student.name}
      name={student.name}
      wand={student.wand}
      fav={student.name === 'Harry Potter'}
      birthdate={student.dateOfBirth}
      avatar={student.image}
    />
  ));

  return (
    <div className="House">
      <div>{name}</div>
      <img src={logo} alt={name} />
      <ul>{studentsInstances}</ul>
    </div>
  );
}
