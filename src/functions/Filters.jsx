import React from 'react';

function Filters({ labels, filter, activeLabel }) {
  const buttons = labels.map(label => (
    <button
      onClick={() => filter(label)}
      className={activeLabel === label ? 'active' : ''}
      key={label}
    >
      {label}
    </button>
  ));

  return <div className="Filters">{buttons}</div>;
}

export default React.memo(Filters);
