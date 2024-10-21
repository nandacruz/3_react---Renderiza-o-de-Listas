import React from 'react'

const ShowUserName = (props) => {


  return (
    <div>
        <h2>Trabalhando com props</h2>
        <h2>O nome do usuário:</h2><p>{props.name}</p>
    </div>
  )
}

export default ShowUserName