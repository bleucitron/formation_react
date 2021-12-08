import React from 'react';

class Filters extends React.Component {
  // class Filters extends React.PureComponent {
  shouldComponentUpdate(nextProps) {
    if (this.props.active !== nextProps.active) {
      return true;
    } else return false;
  }

  render() {
    const { active, filter } = this.props;

    console.log('RENDER FILTERS');

    return (
      <button className={active ? 'active' : ''} onClick={filter}>
        Électrique
      </button>
    );
  }
}

export default Filters;
