import React from 'react'

function MemoCompo({name}) {
    console.log("MEmo Componet is working");
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoCompo)

