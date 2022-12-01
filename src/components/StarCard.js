import React, { useState } from 'react'
import Canvas from './common/Canvas.Component'

export default function StarCard({storedData}) {

    const starType = storedData.type
    const starColor = storedData.color
    const style = {
        backgroundColor: starColor,
        height: '800px',
        width: '800px',
        border: '3px solid black',
        margin: '10px auto',
    }

    const [cssStyle , setCssStyle] = useState(style)
    const [canvasClicked, setCanvasClicked] = useState(false)

   const handleClick = () => {
    setCanvasClicked(!canvasClicked)
        // eslint-disable-next-line no-unused-expressions
    canvasClicked === true ? 
        setCssStyle({...cssStyle , opacity: 0.5})
        :
        setCssStyle({...cssStyle, opacity: 1})


   }


   

   
   

  return (
    <>
   <div className= '' style= {cssStyle}>

        
        <h1 style={{fontSize: '10pt'}}>  Star Name: {storedData?.name}</h1>
        <h2  style={{fontSize: '10pt'}}>    Family: {storedData?.family}</h2>
        <h2  style={{fontSize: '10pt'}}>    Status: {storedData?.status}</h2>
        <h3  style={{fontSize: '10pt'}}>    Type: {storedData.type}</h3>   


    </div>

<Canvas draw={starType} color = {starColor} height={180} width={180} handleCanvasClick={handleClick} />




    </>
 
  )
}
