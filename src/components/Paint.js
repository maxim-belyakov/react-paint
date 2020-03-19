import React, {useState, useEffect} from 'react'
import Name from './Name'
import ColorPicker from './ColorPicker'
import randomColor from 'randomcolor'

export default function Paint() {
  const [colors, setColors] = useState([])
  const [activeColor, setActiveColor] = useState("")

  const getColors = () => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
    .then(res => res.json())
    .then(res => {
      console.log('res', res)
      setColors(res.colors.map(color => color.hex.value))
      setActiveColor(res.colors[0].hex.value)
    })
  }

  useEffect(() => {
    getColors()
  }, [])

  

  return (
    <header style={{ borderTop: `10px solid ${activeColor}` }}>
      <div className="app">
        <Name />
      </div>
      <br /><br />
      colors = {colors}
      <br /><br />
      activeColor = {activeColor}
      <br /><br />
      setActiveColor = {setActiveColor}
      <br /><br />
      <div style={{ marginTop: 10 }}>
        <ColorPicker
          colors={colors}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
      </div>
    </header>
  )
}
