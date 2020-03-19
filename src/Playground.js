import React, { useState } from 'react'
import randomColor from 'randomcolor'

export default function Playground() {
  const [count, setCount] = useState(0)
  return (
    <div>{count}</div>
  )
}