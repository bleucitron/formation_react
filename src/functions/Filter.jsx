import React from 'react';

function Filter({ filter, active }) {
  return (
    <button className={active ? 'active' : ''} onClick={filter}>
      Electric
    </button>
  );
}

export default React.memo(Filter);
