import React from 'react';
import House from './House';

export default function App() {
  return (
    <div className="App">
      <House
        name="Griffondor"
        logo="https://www.cdiscount.com/pdt2/7/5/0/1/700x700/auc5055789209750/rw/blason-en-carton-maison-gryffondor-harry-potter-61.jpg"
      />
      <House
        name="Serpentard"
        logo="https://yt3.ggpht.com/a/AATXAJxCkzomLk42jyoxPGdCr1P3I3IEawTZIH_Gjw=s900-c-k-c0xffffffff-no-rj-mo"
      />
    </div>
  );
}
