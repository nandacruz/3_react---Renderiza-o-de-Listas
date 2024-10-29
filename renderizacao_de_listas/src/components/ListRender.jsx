import React, { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);  

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Pedro", age: 44},
        {id: 3, name: "Josias", age: 23},        

    ]);

    

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };
    
  return (
    <div>
         <div>ListRender</div>
         <p>A propriedade Key e obrigatoria quando se trata do uso de listas, já que o React precisa de uma chave única em cada um dos itens iterados, 
            caso o contrário ele apresentará um warning.
         </p>

         <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
         </ul>

         <p>Conteúdo, quando estamos trabalhando com dados, geralmente o id já vem de fontes de externas - bd - logo, podemos
            trabalhar utilizando como chave o próprio dado já estabelecido - este também já corrige o warning-
         </p>

         <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
         </ul>
         <button onClick={deleteRandom}>Delete random user</button>

         <p>Previus state e um recurso que permite pegar o dado em seu valor original dentro de um set de dado</p>
         <p>Muito utilizado para modificar listas</p>

    </div>
   
  );
};

export default ListRender;