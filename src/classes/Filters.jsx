import React, { PureComponent } from 'react';

class Filters extends PureComponent {
  render() {
    const { types, filter, active } = this.props;

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
}

export default Filters;
