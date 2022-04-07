import React from 'react'
import styles1 from "./clear.module.css"
export default function Clear({clr}) {
  return (
    <div><button className= {styles1.clrColor} onClick={clr} >Clear</button>

     </div>
  )
}
