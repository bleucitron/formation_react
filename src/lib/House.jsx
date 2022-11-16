import React from "react";
import Student from "./Student";

export default function House(props) {
  const { name, logo, students } = props;

  const instances = students.map((student) => (
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
      {instances}
    </div>
  );
}
