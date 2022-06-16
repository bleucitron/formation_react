import React from 'react';

import Pokemon from './Pokemon';

function Header() {
  return <header>COUCOU</header>;
}

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
      return {
        experience: prevState.experience + inc,
      };
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.gainExp, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { experience } = this.state;

    return (
      <div className="TrainedPokemon" onMouseMove={() => this.gainExp(3)}>
        <Pokemon {...this.props} header={<Header />}>
          <div className="experience">{experience}</div>
        </Pokemon>
      </div>
    );
  }
}

export default TrainedPokemon;
