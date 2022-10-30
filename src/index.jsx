import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const appRoot = ReactDOM.createRoot(document.getElementById('root'));

function MonFormulaire() {
  const [value, setValue] = useState('Romain');

  function updateValue(e) {
    setValue(e.target.value);
  }

  return (
    <form>
      <textarea value={value} onInput={updateValue} />
      <p>Vous vous appelez {value}.</p>
    </form>
  );
}

appRoot.render(<MonFormulaire />);
