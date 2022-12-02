import React, { useEffect, useRef } from 'react'
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
export default function Canvas({ draw, color, height, width, handleCanvasClick }) {

    const canvas = useRef()


    const createCanvas = (context) => {
        context.fillStyle = color
        switch (draw) {
            case 'square':
                context.fillRect(25, 25, 100, 100)
                break;

            case 'rectangle':
                context.fillRect(25, 25, 125, 100)
                break;

            case 'triangle':
                context.beginPath();
                context.moveTo(0, 50)
                context.lineTo(50, 0)
                context.lineTo(100, 50)
                context.lineTo(0, 50)
                context.fill();
                break;
            case 'arc':

                context.beginPath();
                context.arc(0, 5, 25, 35, 2 * Math.PI);
                context.fill();

                break
            case 'heart':

                context.beginPath();
                context.moveTo(75, 40);
                context.bezierCurveTo(75, 37, 70, 25, 50, 25);
                context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                context.bezierCurveTo(20, 80, 40, 102, 75, 120);
                context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                context.bezierCurveTo(85, 25, 75, 37, 75, 40);
                context.fill();
                break

            case 'circle':
                context.arc(100, 35, 25, 0, 2 * Math.PI);
                context.fill()
                break


            default:
                // circle
                context.arc(100, 35, 25, 0, 2 * Math.PI);
                context.fill()
                break




        }

    }

    useEffect(() => {
        const context = canvas.current.getContext('2d')
        createCanvas(context)

    }, [])







    return (
        <canvas ref={canvas} height={height} width={width} onClick={handleCanvasClick} />
    )
}
