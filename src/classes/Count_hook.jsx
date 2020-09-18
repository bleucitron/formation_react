import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function update() {
    setCount(prevCount => prevCount + 1);
  }
  function update2() {
    setCount2(prevCount => prevCount + 10);
  }

  return (
    <div className='Count'>
      {count}
      <div onClick={update}>Click</div>
      {count2}
      <div onClick={update2}>Click</div>
    </div>
  );
}

export default Count;
