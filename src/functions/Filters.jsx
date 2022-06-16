import React from 'react';

function Filters(props) {
  const { text, search, toggle, active } = props;
  const classes = active ? 'active' : '';
  return (
    <>
      <button className={classes} onClick={toggle}>
        Électriques
      </button>
      <input value={text} onChange={search} />
    </>
  );
}

export default React.memo(Filters);
