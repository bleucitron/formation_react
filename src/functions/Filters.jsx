import React from 'react';

function Filters(props) {
  const { types, filter, active } = props;

  const buttons = types.map(type => (
    <button
      className={active === type ? 'active' : ''}
      key={type}
      onClick={() => filter(type)}
    >
      {type}
    </button>
  ));

  return <ul className="Filters">{buttons}</ul>;
}

export default React.memo(Filters);
