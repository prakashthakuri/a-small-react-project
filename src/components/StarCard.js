import React, { useState } from 'react'
import Canvas from './common/Canvas.Component'

export default function StarCard({storedData}) {


    const starType = storedData.type
    const starColor = storedData.color
    // const canvasOpacity = {
    //     opacity: 1
    // }

    const [cssStyle , setCssStyle] = useState({})
    const [canvasClicked, setCanvasClicked] = useState(false)

   const handleClick = () => {
    setCanvasClicked(!canvasClicked)
    canvasClicked === true ? 
        setCssStyle({...cssStyle , opacity: 0.5})
        :
        setCssStyle({...cssStyle, opacity: 1})


   }


   

   
   

  return (
    
   <div className= 'star-flex' >
    <div className='star-flex-container' style={cssStyle} >
        <Canvas  draw={starType} color = {starColor} handleCanvasClick={handleClick} />
    </div>
    <h1 style={{fontSize: '10pt'}}> Name: {storedData?.name}</h1>




    </div>
 
  )
}
