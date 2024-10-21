import React, { useState } from 'react'

function ConditionalRender() {

  const[x] = useState(false);

  const [name,setName] = useState("Matheus");

  return (
    <div>
        <h2>Trabalhando com condicionais</h2>
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}


        <h2>If ternário</h2>
        {name == "João" ? (
            <div>
                <p>O nome é João</p>
            </div>
        ) : (
            <div>
                Nome não encontrado
            </div>
        )}
        <button onClick={() => setName("João")}>Clica aqui!</button>
    </div>
  )
}

export default ConditionalRender