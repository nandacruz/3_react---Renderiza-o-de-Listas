import React from 'react';

function Container({children, myValue}) {
  return (
    <>
        <h2>Abraçando conteúdo com componentes</h2>
        <p>Este é o título do Container</p>
        {children}
        <p>O valor é: {myValue}</p>
    </>
    
  );
};

export default Container;