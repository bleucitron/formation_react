import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <header>Hogwarts</header>
      <main>{children}</main>
      <footer>Copyright blabla</footer>
    </>
  );
}
