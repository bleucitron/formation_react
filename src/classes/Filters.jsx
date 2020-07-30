import React from 'react';

function Filters(props) {
  const { isActive, toggle } = props;

  const classes = isActive ? 'active' : '';

  return (
    <button className={classes} onClick={toggle}>
      Filtrer
    </button>
  );
}

export default Filters;
