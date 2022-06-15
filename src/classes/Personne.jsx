import React from 'react';

class Button extends React.Component {
  render() {
    const { handle } = this.props;
    return <button onClick={handle}>vieillir</button>;
  }
}

class Personne extends React.Component {
  constructor() {
    super();

    this.state = {
      age: 12,
    };

    this.vieillir = this.vieillir.bind(this);
  }

  vieillir() {
    this.setState({ age: this.state.age + 1 });
  }

  render() {
    const { age } = this.state;
    const { name } = this.props;

    console.log('AGE', age);

    return (
      <div className="Personne">
        <div>{name}</div>
        <div>{age}</div>
        <button onClick={this.vieillir}>vieillir du parent</button>
        <Button handle={this.vieillir} />
      </div>
    );
  }
}

export default Personne;
