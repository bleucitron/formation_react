import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { increment } = this.props;

    return <button onClick={increment}>Increment</button>;
  }
}

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.update = this.update.bind(this);
  }

  update() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { count } = this.state;

    return (
      <div className='Count'>
        {count}
        <Button increment={this.update} />
      </div>
    );
  }
}

export default Count;
