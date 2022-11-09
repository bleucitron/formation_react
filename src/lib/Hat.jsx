import React, { useContext } from 'react';
import Noob from './Noob';
import { translate } from './utils';
import { LangContext } from './contexts';

export default function Hat(props) {
  const { noobs, houses, assignNoob } = props;

  const lang = useContext(LangContext);

  const [toAssign, ...rest] = [...noobs].reverse();

  return (
    <div className="Hat">
      <ul>
        {rest.map(({ name, image, dateOfBirth }) => (
          <Noob key={name + dateOfBirth} name={name} avatar={image} />
        ))}
      </ul>
      <div className="selector">
        <Noob name={toAssign.name} avatar={toAssign.image} />
        {houses.map(h => (
          <button key={h} onClick={() => assignNoob(toAssign, h)}>
            {translate(lang, h)}
          </button>
        ))}
      </div>
    </div>
  );
}
