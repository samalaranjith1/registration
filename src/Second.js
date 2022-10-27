import React, { useContext } from 'react'


function Second({name,setName}) {
  return (
    <div>
        {`second ${name.fullname}`}
        <button onClick={setName}>changeName</button>
        
    </div>
  )
}

export default Second