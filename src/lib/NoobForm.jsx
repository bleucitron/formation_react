import React, { useState } from 'react';

export default function NoobForm(props) {
  const { add } = props;

  const [name, setName] = useState('');
  const [ancestry, setAncestry] = useState('0');

  function submit(e) {
    e.preventDefault();
    add(name, ancestry);

    setName('');
    setAncestry('0');
  }

  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
      <select value={ancestry} onChange={e => setAncestry(e.target.value)}>
        <option value="0">half-blood</option>
        <option value="1">pure-blood</option>
        <option value="2">mugglborn</option>
      </select>
      <button onClick={submit}>Add custom student</button>
    </form>
  );
}
