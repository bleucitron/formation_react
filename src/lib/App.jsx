import React from "react";
import House from "./House";

import data from "../_data/harrypotter.json";

export default function App() {
  const gryffindorStudents = data.filter(
    (student) => student.house === "Gryffindor"
  );

  const hufflepuffStudents = data.filter(
    (student) => student.house === "Hufflepuff"
  );
  return (
    <div className="App">
      <House
        students={gryffindorStudents}
        name="Griffondor"
        logo="https://s1.qwant.com/thumbr/0x380/9/9/4f75357d1344d6f63ce46b567b2fb1a1acdd6a4de921353f3d32c02c8d0a22/BannerFlag-Gryffindor-HarryPotter-Product-_5-4895205600140.jpg?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1678%2F4201%2Fproducts%2FBannerFlag-Gryffindor-HarryPotter-Product-_5-4895205600140.jpg%3Fv%3D1527289142&q=0&b=1&p=0&a=0"
      />
      <House
        students={hufflepuffStudents}
        name="Poufsouffle"
        logo="https://s1.qwant.com/thumbr/0x380/b/3/96042420fbbd856bdea5fac6cf458a04a37e4c24dc8b48ff7c9a40bf80020f/AAuE7mD9oQGJMYJBUo_9g5uK6QSGbzTGDNEmYspZXQ=s900-mo-c-c0xffffffff-rj-k-no.jpg?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mD9oQGJMYJBUo_9g5uK6QSGbzTGDNEmYspZXQ%3Ds900-mo-c-c0xffffffff-rj-k-no&q=0&b=1&p=0&a=0"
      />
    </div>
  );
}
