import React, { useEffect, useRef } from 'react'
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
export default function Canvas(
            { draw, color, height, width, handleCanvasClick, squareOpacity, triangleOpacity, circleOpacity,type }  
            ) {

    const canvas = useRef()


   
    let canvasStyle

    useEffect(() => {
        const context = canvas.current.getContext('2d')
        

        

        console.log("rendered")

        const createMyCanvas = (context) => {
            context.fillStyle = color
            switch (draw) {
                case 'square':
                    context.fillRect(25, 25, 100, 100)
                    context.globalAlpha = squareOpacity
                    break;
    
    
                case 'triangle':
                    context.globalAlpha = triangleOpacity
                    context.beginPath();
                    context.moveTo(0, 50)
                    context.lineTo(50, 0)
                    context.lineTo(100, 50)
                    context.lineTo(0, 50)
                    context.fill();
                    console.log(triangleOpacity, "inside Switch")
    
                    break;
                
       
                case 'circle':
                    context.globalAlpha = circleOpacity
                    context.arc(50, 35, 25, 0, 4 * Math.PI);
                    context.fill()
    
                    break
    
    
                default:
    
    
            }
    
        }

        createMyCanvas(context)
        context.clearRect(0, 0, canvas.width, canvas.height);

     

    }, [squareOpacity, triangleOpacity, circleOpacity])







    return (
        <>
        {type === "square" && <canvas ref={canvas} height={100} width={100} onClick={handleCanvasClick} style={{padding:10,opacity:squareOpacity}} /> }
        {type === "triangle" && <canvas ref={canvas} height={100} width={100} onClick={handleCanvasClick} style={{padding:10,opacity:triangleOpacity}} /> }
        {type === "circle" && <canvas ref={canvas} height={100} width={100} onClick={handleCanvasClick} style={{padding:10,opacity:circleOpacity}} /> }
        </>
    )
}
