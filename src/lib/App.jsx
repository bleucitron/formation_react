import React from 'react';

import House from './House';
import data from './../_data/harrypotter.json';

export default function App() {
  const griffondorStudents = data.filter(item => item.house === 'Gryffindor');
  const slytherinStudents = data.filter(item => item.house === 'Slytherin');

  return (
    <div className="App">
      <House
        name="Griffondor"
        students={griffondorStudents}
        logo="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/608x608/products/88361/91122/Harry-Potter-Gryffindor-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__95823.1507640354.jpg?c=2"
      />
      <House
        name="Serpentard"
        students={slytherinStudents}
        logo="https://www.bebegavroche.com/media/catalog/product/cache/1/thumbnail/1200x/040ec09b1e35df139433887a97daa66f/b/l/blason-serpentard-harry-potter_2.jpg"
      />
    </div>
  );
}
