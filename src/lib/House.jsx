import React from 'react';
import Student from './Student';

export default function House(props) {
  const logoComp = props.logo ? (
    <img src={props.logo} alt={props.name} />
  ) : null;

  return (
    <div className="House">
      <h2>{props.name}</h2>
      {logoComp}
      <Student
        name="Harry"
        favorite
        birthdate="12-09-2019"
        img="https://www.leseclaireuses.com/ec_content/couv/20171213_harry-potter-coupe-facebook.jpg"
      />
      <Student
        name="Ron"
        birthdate="12-09-2014"
        img="https://imgs.search.brave.com/L2bgwuBd31J8jIbXJs1JkLlzYSH3uoaiJsu7fEE927E/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGU0/NWdpcmwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L3Jvbi13ZWFzbGV5/LW9yZGVyLW9mLXRo/ZS1waG9lbml4LXBv/cnRyYWl0LTguanBn"
      />
    </div>
  );
}
