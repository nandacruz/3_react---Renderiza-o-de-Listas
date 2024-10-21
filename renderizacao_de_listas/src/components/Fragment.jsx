function Fragment({propFragment}) {
  return (
    <>
        <h2>React Fragments</h2>
        <p>Os react fragments são interessantes para quando precisamos ter mais de um elemento pai em um componente</p>
        <p>Criamos uma tag vazia que servirá como elemento pai, não alterando a estrutura html</p>
        <h2>Título 1</h2>
        <h3>Título 2</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragment;