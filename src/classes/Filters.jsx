import React from 'react';

function Filters({ types, selected, select }) {
  console.log('SELECTED', selected);

  const boutons = types.map(type => (
    <div
      className={`filter ${selected === type ? 'active' : ''}`}
      onClick={() => select(type)}
      key={type}
    >
      {type}
    </div>
  ));

  return <div className="Filters">{boutons}</div>;
}

export default Filters;
