import React, { useState, Fragment } from 'react';

export default function NoobForm(props) {
  const { add } = props;

  const [name, setName] = useState();
  const [ancestry, setAncestry] = useState();

  const textButton =
    name || ancestry
      ? `Ajouter ${name ?? ''} ${ancestry ?? ''}`
      : 'Ajouter au pif';

  const radios = ['muggleborn', 'pure-blood', 'half-blood'].map(a => (
    <Fragment key={a}>
      <label htmlFor={a}>{a}</label>
      <input
        name="ancestry"
        id={a}
        type="radio"
        value={a}
        checked={ancestry === a}
        onChange={e => setAncestry(e.target.value)}
      />
    </Fragment>
  ));

  return (
    <div className="NoobForm">
      <form
        onSubmit={e => {
          e.preventDefault();
          add(name, ancestry);
          setName('');
          setAncestry();
        }}
      >
        <input value={name} onInput={e => setName(e.target.value)} />
        {radios}
        <button type="submit">{textButton}</button>
      </form>
    </div>
  );
}
