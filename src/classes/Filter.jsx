import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { filter, active } = this.props;
    return (
      <button className={active ? 'active' : ''} onClick={filter}>
        Electric
      </button>
    );
  }
}

export default Filter;
