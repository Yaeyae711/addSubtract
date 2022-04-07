import React from 'react'
import stl from './inp.module.css'

export default function Inputfield({value,inputChangeHandler}) {
  return (
    <div>
      <input className={stl.inp} type="text" placeholder="Enter the number" value={value} onChange={inputChangeHandler}/>
    </div>
  )
}
