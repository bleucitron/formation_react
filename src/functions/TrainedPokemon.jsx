import React from 'react';
import { useAutoExp } from '../utils/hooks';

import Pokemon from './Pokemon';

function TrainedPokemon(props) {
  const { exp, gainExp, setExpInterval } = useAutoExp();

  function changeInterval(e, nb) {
    e.stopPropagation();
    setExpInterval(nb);
  }

  const buttons = (
    <div>
      <button onClick={e => changeInterval(e, 500)}>100</button>
      <button onClick={e => changeInterval(e, 1000)}>1000</button>
      <button onClick={e => changeInterval(e, 2000)}>2000</button>
    </div>
  );

  return (
    <div className="TrainedPokemon" onMouseMove={() => gainExp(3)}>
      <Pokemon {...props} buttons={buttons} handleClick={props.releasePokemon}>
        <div className="experience">{exp}</div>
      </Pokemon>
    </div>
  );
}

export default TrainedPokemon;
