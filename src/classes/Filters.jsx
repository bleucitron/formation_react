import React from 'react';

function Filters({ select, selected, types }) {
  const buttons = types.map(type => {
    const classes = type === selected ? 'active' : '';

    return (
      <button className={classes} onClick={() => select(type)} key={type}>
        {type}
      </button>
    );
  });

  return <div className='Filters'>{buttons}</div>;
}

export default Filters;
