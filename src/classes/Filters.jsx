import React from 'react';

class Filters extends React.PureComponent {
  render() {
    const { toggle, active } = this.props;
    const classes = active ? 'active' : '';
    return (
      <button className={classes} onClick={toggle}>
        Électriques
      </button>
    );
  }
}

export default Filters;
