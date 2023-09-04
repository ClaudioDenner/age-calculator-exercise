import './AgeCalculator.css'
import { useState } from 'react'
import iconArrow from '/assets/images/icon-arrow.svg'

function AgeCalculator() {



    const [inputDay, setInputDay] = useState('')
    const [statusInputDay, setStatusInputDay] = useState(false)

    const [inputMonth, setInputMonth] = useState('')
    const [statusInputMonth, setStatusInputMonth] = useState(false)

    const [inputYear, setInputYear] = useState('')
    const [statusInputYear, setStatusInputYear] = useState(false)

    const [quantDays, setQuantDays] = useState(0)
    const [quantMoths, setQuantMonths] = useState(0)
    const [quantYears, setQuantYears] = useState(0)


    


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
         const dateInput = new Date(`${inputYear}/${inputMonth}/${inputDay}`)
         const aniversaryDay = parseInt(inputDay)
         const aniversaryMonth = parseInt(inputMonth)
         const curretDate = new Date()
         const currentYear = curretDate.getFullYear()
         const currentMonth = curretDate.getMonth()+1 
         //const currentDay = curretDate.getDate()


        

         const divisorForYear = (1000 * 60 * 60 * 24 * 365)
         const divisorForDay = (1000 * 60 * 60 * 24)

          //year
         const yearAbsolute = Math.floor(Math.abs((dateInput.getTime() - curretDate.getTime()) / divisorForYear))
         setQuantYears(yearAbsolute)

         const lastAniversary = new Date(`${currentMonth > aniversaryMonth ? currentYear : currentYear -1}/${aniversaryMonth}/${aniversaryDay}`)
         
         //month
         const diffBetweenCurrentMonthAndMonthLastAniversary = Math.floor(((curretDate.getTime() -  lastAniversary.getTime()) / divisorForDay) * 12 / 365)
         setQuantMonths(diffBetweenCurrentMonthAndMonthLastAniversary)

         //day
         const lastMonthComplete = new Date(`${currentMonth === 1 ? currentYear -1 : currentYear}/${ currentMonth ===1 ? 12 : currentMonth-1}/${aniversaryDay}`).getTime()
         const diffInDaysBetweenCurrentDateAndlastMonthComplete = Math.floor(( curretDate.getTime()- lastMonthComplete) / divisorForDay )
         setQuantDays(diffInDaysBetweenCurrentDateAndlastMonthComplete)






         
         
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
            <span>{quantYears}</span>
            years
          </div>

          <div>
            <span>{quantMoths}</span>
            months
          </div>

          <div>
            <span>{quantDays}</span>
            days
          </div>
        </section>

        
    </main>
  )
}

export default AgeCalculator