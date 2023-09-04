import React, {useEffect, usestate} from 'react'

function Countapp() {
    const[count,setcount]=usestate(0)
    useEffect(()=>{
        document.title=`user clicked ${count}times`
    })
  return (
    <div>
      countApp
      <h4>userclicked on button for {count}times</h4>
      <button onClick={()=>setcount(count+1)}>
      count{count}</button>
    </div>
  )
}

export default Countapp
