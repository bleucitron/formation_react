import React, { useContext } from 'react';

import LangContext from '../utils/context';
import dict from '../utils/dict';

function Filters(props) {
  const { types, text, search, toggle, selectedType } = props;
  const lang = useContext(LangContext);

  const buttons = types.map(t => (
    <button
      className={t === selectedType ? 'active' : ''}
      onClick={() => toggle(t)}
      key={t}
    >
      {lang === 'fr' ? dict[t] ?? t : t}
    </button>
  ));

  return (
    <>
      {buttons}
      <input value={text} onChange={search} />
    </>
  );
}

export default React.memo(Filters);
