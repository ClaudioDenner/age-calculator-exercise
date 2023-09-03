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
        <input  type='number' className='input' placeholder='DD' />
        <span className='errorMessage'>Must be a valid day</span>
        </label>

        <label>
        <span className='titleInput'>MONTH</span>
        <input  type='number' className='input' placeholder='MM'/>
        <span className='errorMessage'>Must be a valid month</span>
        </label>

        <label>
        <span className='titleInput'>YEAR</span>
        <input  type='number' className='input' placeholder='YYYY'/>
        <span className='errorMessage'>Must be a valid year</span>
        </label>

        </div>

        <div className='division'>
          <img src={iconArrow} alt='button submit' className='button'/>
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