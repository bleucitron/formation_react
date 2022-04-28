import React, { Component } from 'react';

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      idInterval: null,
    };
    this.displayName = this.displayName.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.id === 1) {
  //     const idInterval = setInterval(() => {
  //       console.log('COUCOU', this.props.name);
  //     }, 1000);

  //     this.setState({
  //       idInterval,
  //     });
  //   }
  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.idInterval);
  //   this.setState({ idInterval: null });
  // }

  displayName() {
    console.log('Je suis', this.props.name);
  }

  render() {
    const {
      name,
      weight,
      sprites: { front_default: src },
    } = this.props;

    return (
      <li className="Pokemon" onClick={this.displayName}>
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default Pokemon;
