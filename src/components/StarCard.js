import React, { useState } from 'react'
import Canvas from './common/Canvas.Component'

export default function StarCard({storedData, squareOpacity, triangleOpacity, circleOpacity}) {


    const starType = storedData.type
    const starColor = storedData.color
    const height = storedData.positionX
    const width = storedData.positionY

    console.log("starCard", squareOpacity, triangleOpacity)
   


  return (
    
        <Canvas  draw={starType} color = {starColor} height={height} width={width}  squareOpacity={squareOpacity} triangleOpacity= {triangleOpacity} circleOpacity= {circleOpacity} >
        <span style={{fontSize: '10pt'}}> Name: {storedData?.name}</span>

        </Canvas>
      
  )
}
