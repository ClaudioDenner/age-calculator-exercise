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
        <input  type='number ' className='input' placeholder='DD' min="1" max="31"/>
        <span className='errorMessage'>Must be a valid day</span>
        </label>

        <label>
        <span className='titleInput'>MONTH</span>
        <input  type='number ' className='input' placeholder='MM' min="1" max="31"/>
        <span className='errorMessage'>Must be a valid day</span>
        </label>

        <label>
        <span className='titleInput'>YEAR</span>
        <input  type='number ' className='input' placeholder='YYYY' min="1" max="31"/>
        <span className='errorMessage'>Must be a valid day</span>
        </label>

        </div>

        <div className='division'>
          <img src={iconArrow} alt='icon Arrow ' className='icon'/>
        </div>

        <section className='container_result'>
          <div>
            <span>00</span>
            years
          </div>

          <div>
            <span>00</span>
            months
          </div>

          <div>
            <span>00</span>
            days
          </div>
        </section>

        
    </main>
  )
}

export default AgeCalculator