import React from 'react'
import styles2 from "./sub.module.css"

export default function Subtraction({sub}) {
  return (
    <div><button className={styles2.subColor}  onClick={sub}>Subtract</button></div>
  )
}
