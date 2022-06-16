import React from 'react';

class TrainedPokemon extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      experience: 100,
    };

    this.gainExp = this.gainExp.bind(this);
  }

  gainExp(inc = 10) {
    this.setState(prevState => {
      return { experience: prevState.experience + inc };
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.gainExp, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { experience } = this.state;

    return (
      <Pokemon pokemon={this.props} handleMouseMove={() => this.gainExp(3)}>
        <div className="experience">{experience}</div>
      </Pokemon>
    );
  }
}

export default TrainedPokemon;
