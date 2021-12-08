import React from 'react';

function Filters(props) {
  const { active, filter } = props;

  console.log('RENDER FILTERS');

  return (
    <button className={active ? 'active' : ''} onClick={filter}>
      Électrique
    </button>
  );
}

export default React.memo(Filters);
