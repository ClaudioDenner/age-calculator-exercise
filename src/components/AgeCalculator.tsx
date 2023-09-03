import './AgeCalculator.css'
import { useState } from 'react'
import iconArrow from '/assets/images/icon-arrow.svg'

function AgeCalculator() {

    //const today = new Date();

    const [inputDay, setInputDay] = useState('')
    const [statusInputDay, setStatusInputDay] = useState(false)

    const [inputMonth, setInputMonth] = useState('')
    const [statusInputMonth, setStatusInputMonth] = useState(false)

    const [inputYear, setInputYear] = useState('')
    const [statusInputYear, setStatusInputYear] = useState(false)


    


    const verification = (input: string, rule: string)=>{

      switch(rule){
        case 'rule of day': 
           {
            //
               
              const inputInt = parseInt(input)
              const verify = isNaN(inputInt)
              if(!verify  && inputInt <= 31){
                //
                setInputDay(input)
                setStatusInputDay(false)
              } else {
                //
                setInputDay('')
                setStatusInputDay(true)
              }
           }
        break
        case 'rule of month':
          {
            //
               
              const inputInt = parseInt(input)
              const verify = isNaN(inputInt)
              if(!verify  && inputInt <= 12){
                //
                setInputMonth(input)
                setStatusInputMonth(false)
              } else {
                //
                setInputMonth('')
                setStatusInputMonth(true)
              }
           }
          break
          case 'rule of year':
            {
              //
                 
                const inputInt = parseInt(input)
                const verify = isNaN(inputInt)
                if(!verify  && inputInt <= 2999){
                  //
                  setInputYear(input)
                  setStatusInputYear(false)
                } else {
                  //
                  setInputYear('')
                  setStatusInputYear(true)
                }
             }
            break  
      }

    }

    const submit = ()=>{
      //
     //    const dateInput = new Date(1998, inputMonth, inputDay)
    }

  return (
    <main className='container'>
        <div className='inputs'>
        <label>
        <span className='titleInput'>DAY</span>
        <input  type='text' className={statusInputDay ? 'input input-error': 'input' } placeholder='DD' value={inputDay}   onChange={(e)=> verification(e.target.value, 'rule of day') }/>
        <span className={statusInputDay ? 'errorMessage errorActive': 'errorMessage'}>Must be a valid day</span>
        </label>

        <label>
        <span className='titleInput'>MONTH</span>
        <input  type='text' className={statusInputMonth ? 'input input-error': 'input' } placeholder='MM' value={inputMonth}   onChange={(e)=> verification(e.target.value, 'rule of month') }/>
        <span className={statusInputMonth ? 'errorMessage errorActive': 'errorMessage'}>Must be a valid month</span>
        </label>

        <label>
        <span className='titleInput'>YEAR</span>
        <input  type='text' className={statusInputYear ? 'input input-error': 'input' } placeholder='YYYY' value={inputYear}   onChange={(e)=> verification(e.target.value, 'rule of year') }/>
        <span className={statusInputYear ? 'errorMessage errorActive': 'errorMessage'}>Must be a valid year</span>
        </label>

        </div>

        <div className='division'>
          <img src={iconArrow} alt='button submit' className='button' onClick={submit}/>
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