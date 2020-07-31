import React from 'react';

function Filters(props) {
  const { types, selected, toggle } = props;

  const buttons = types.map(type => (
    <button
      className={selected === type ? 'active' : ''}
      onClick={() => toggle(type)}
      key={type}
    >
      {type}
    </button>
  ));

  return <div className='Filters'>{buttons}</div>;
}

export default Filters;
