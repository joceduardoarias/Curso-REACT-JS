import React from 'react'


export const ContadorApp = () => {
  return (
    <>
        <h1>Contador App</h1>
        <button onClick={function(e){console.log(e)}}>Contador</button>
        <p>0</p>        
    </>
  )
}

export default ContadorApp