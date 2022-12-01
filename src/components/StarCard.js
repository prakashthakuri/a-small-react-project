import React, { useState, useRef, useEffect} from 'react'

export default function StarCard({storedData}) {

    console.log(storedData, "stored star card")

    const style = {
        backgroundColor: storedData?.color,
        height: '800px',
        width: '800px',
        border: '3px solid black',
        margin: '10px auto'
    }
    // const c = document.getElementById("canvas")
    // const ctx = c.getContext("2d")
    // ctx.beginPath()
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    // ctx.stroke();

    const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])

   
   

  return (
    <>
   <div className= '' style= {style}>

        
        <h1 style={{fontSize: '10pt'}}>  Star Name: {storedData?.name}</h1>
        <h2  style={{fontSize: '10pt'}}>    Family: {storedData?.family}</h2>
        <h2  style={{fontSize: '10pt'}}>    Status: {storedData?.status}</h2>
        <h3  style={{fontSize: '10pt'}}>    Type: {storedData.type}</h3>   


    </div>

    <button
    type='button'
    >

    </button>
    <canvas ref={canvasRef} />


    </>
 
  )
}
