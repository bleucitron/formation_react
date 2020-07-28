import React, { Component } from 'react';

class Filters extends Component {
  render() {
    const { filter } = this.props;

    return (
      <div className='Filters'>
        {<button onClick={filter}>Electric</button>}
      </div>
    );
  }
}

export default Filters;
