import React, { useState } from 'react'
import Canvas from './common/Canvas.Component'

export default function StarCard({storedData}) {


    const starType = storedData.type
    const starColor = storedData.color
  

    const [cssStyle , setCssStyle] = useState({})
    const [canvasClicked, setCanvasClicked] = useState(true)

   const handleClick = () => {
    canvasClicked === true ? 
        setCssStyle({...cssStyle , opacity: 0.5})
        :
        setCssStyle({...cssStyle, opacity: 1})
    setCanvasClicked(!canvasClicked)


   }


  return (
    
    <div className='star-flex-container'  >
        <div style={cssStyle}>
        <Canvas  draw={starType} color = {starColor} height={100} width={100} />
        <h1 style={{fontSize: '10pt'}}> Name: {storedData?.name}</h1>

        </div>
        
        <button onClick={handleClick}>Transparency </button>

    </div>
 
  )
}
