import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const appRoot = ReactDOM.createRoot(document.getElementById('root'));

function Time() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect', count);

    return () => console.log('clean effect', count);
  }, [count]);

  return <div onClick={() => setCount(c => c + 1)}>{count}</div>;
}

function App() {
  return (
    <div>
      <Time />
    </div>
  );
}

appRoot.render(<App />);
