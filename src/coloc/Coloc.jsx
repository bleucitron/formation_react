import React, { Component } from 'react';

class Coloc extends Component {
  render() {
    return (
      <div className='Coloc'>
        <div className='Humain'>
          <div className='nom'>Romain</div>
          <div className='age'>34</div>
        </div>
      </div>
    );
  }
}

class Coloc extends Component {
  render() {
    return (
      <div className='Coloc'>
        <Logement
          adresse='0 rue de la grenouille'
          ville='Bordeaux'
          surface={120}
        />
        <div className='membres'>
          <Humain nom='Romain' age={34} />
          <Humain nom='Virginie' age={25} />
          <Humain nom='Arthur' age={25} />
          <Animal nom='Cannelle' type='chat' />
        </div>
      </div>
    );
  }
}
