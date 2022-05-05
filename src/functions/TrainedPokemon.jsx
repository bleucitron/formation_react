import React, { PureComponent } from 'react';

class TrainedPokemon extends PureComponent {
  constructor() {
    super();

    this.state = {
      xp: 0,
      idInterval: null,
    };
    this.gainExp = this.gainExp.bind(this);
  }

  gainExp() {
    this.setState(prevState => ({ xp: prevState.xp + 1 }));
  }

  // componentDidMount() {
  //   const idInterval = setInterval(this.gainExp, 100);

  //   this.setState({
  //     idInterval,
  //   });
  // }

  componentWillUnmount() {
    clearInterval(this.state.idInterval);
  }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.name !== this.props.name) {
  //     return true;
  //   }
  //   if (nextProps.age !== this.props.age) {
  //     return true;
  //   }
  //   if (nextProps.src !== this.props.src) {
  //     return true;
  //   }
  //   if (nextProps.src !== this.props.src) {
  //     return true;
  //   }
  //   if (nextProps.src !== this.props.src) {
  //     return true;
  //   }
  //   if (nextProps.src !== this.props.src) {
  //     return true;
  //   }
  //   if (nextProps.src !== this.props.src) {
  //     return true;
  //   }

  //   return false;
  // }

  render() {
    const { name, src } = this.props;
    const { xp } = this.state;

    console.log('NAME', name);

    return (
      <li className="TrainedPokemon" onMouseMove={this.gainExp}>
        <div className="name">{name}</div>
        <div className="exp">{xp}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
