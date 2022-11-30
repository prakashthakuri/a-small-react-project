import React, { useState } from 'react'
import mockData from '../mockData.json'
import Button from './common/Button.Component'
import Input from './common/Input.Component'

export default function Star() {

    const PopularStars = mockData
    const NumberOfStars = PopularStars.star.length

    console.log(PopularStars.star.length, "length")
      
        const [inputValue, setInputValue ] = useState('')
        const [errorMessage, setErrorMessage] = useState('')
        const [storedStarObj, setStoredStarObj] = useState({})

        const randomMultipleValue = (arr, num) => {
            const shuffle= [...arr].sort(() => 0.5 - Math.random())

            return shuffle.slice(0,num)

        }

       

        const inputOnChange = (e) => {
            const value = e.target.value.replace(/\D/g, '')
            setInputValue(Number(value))

            console.log(inputValue < NumberOfStars)

        }
        
         const onButtonClick = () => {

            if (inputValue > NumberOfStars || inputValue === 0) setErrorMessage("Error! Select the available number of stars")
            else setErrorMessage(null)


            const newStoredData = PopularStars.star[Math.floor(Math.random(NumberOfStars)* inputValue)]
            console.log(newStoredData)

            console.log(randomMultipleValue(PopularStars.star, inputValue), "this is what i need")


            
        }



  return (
    <div className='card'>
    <h1> Stars from Context API and Hooks</h1>
    <h2>Welcome to Webpage galaxy. There are {NumberOfStars} known in our current galaxy.</h2>
    
    <Input 
        placeholder="N"
        value={inputValue}
        inputOnChange= {inputOnChange}
             />

     <Button 
        label = "Submit"
        handleClick={onButtonClick}
        />


    <h3>
    {errorMessage}
    </h3>      
    </div>

  )
}

