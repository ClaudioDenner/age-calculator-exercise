import './AgeCalculator.css'
//import { useState } from 'react'
import iconArrow from '/assets/images/icon-arrow.svg'

function AgeCalculator() {

    //const [statusInputs, setStatusInput] = useState([false, false, false])


    

  return (
    <main className='container'>
        <div className='inputs'>
        <label>
        <span className='titleInput'>DAY</span>
        <input  type='number ' className='input' placeholder='DDDD' min="1" max="31"/>
        <span className='errorMessage'>Must be a valid day</span>
        </label>

        </div>

        <div className='division'>
          <img src={iconArrow} alt='icon Arrow ' className='icon'/>
        </div>

        
    </main>
  )
}

export default AgeCalculator