import React from 'react';

function Message({msg}) {
  return (
    <div>
      <h2>State Lift</h2>
      <p>A mensagem é: {msg}</p>
    </div>
  );
};

export default Message;