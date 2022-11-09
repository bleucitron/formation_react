import React from 'react';

function Lang(props) {
  const { label, toggle } = props;

  console.log('RENDER LANG');

  return <button onClick={toggle}>{label}</button>;
}

export default React.memo(Lang);
