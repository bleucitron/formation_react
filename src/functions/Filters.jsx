import React from 'react';

function Filters(props) {
  const { labels, active, filter } = props;

  const buttons = labels.map(label => (
    <button
      key={label}
      className={label === active ? 'active' : ''}
      onClick={() => filter(label)}
    >
      {label}
    </button>
  ));

  return buttons;
}

export default React.memo(Filters);
