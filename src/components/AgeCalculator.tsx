import './AgeCalculator.css'
import { useState } from 'react'
//import iconArrow from '/assets/images/icon-arrow.svg'

function AgeCalculator() {



    const [inputDay, setInputDay] = useState('')
    const [statusInputDay, setStatusInputDay] = useState(false)

    const [inputMonth, setInputMonth] = useState('')
    const [statusInputMonth, setStatusInputMonth] = useState(false)

    const [inputYear, setInputYear] = useState('')
    const [statusInputYear, setStatusInputYear] = useState(false)

    const [quantDays, setQuantDays] = useState<number|string>('--')
    const [quantMoths, setQuantMonths] = useState<number|string>('--')
    const [quantYears, setQuantYears] = useState<number|string>('--')


    


    const verification = (input: string, rule: string)=>{

      switch(rule){
        case 'rule of day': 
           {
            //
               
              const inputInt = parseInt(input)
              const verify = isNaN(inputInt)
              if(!verify  && inputInt <= 31 && inputInt > 0){
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
                if(!verify  && inputInt <= new Date().getFullYear()){
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
      if(statusInputDay || statusInputMonth || statusInputYear){
        //
          setStatusInputDay(true)
          setStatusInputMonth(true)
          setStatusInputYear(true)

          setQuantDays('--')
          setQuantMonths('--')
          setQuantYears('--')
        alert('Insert a date valid in the past 0')


      }
      else{
        //
        if(new Date(`${inputYear}/${inputMonth}/${inputDay}`) > new Date()){
          //
          setStatusInputDay(true)
          setStatusInputMonth(true)
          setStatusInputYear(true)

          setQuantDays('--')
          setQuantMonths('--')
          setQuantYears('--')

          alert('Insert a date in the past 1')



        }
        else {
          if(inputDay === '' || inputMonth === '' || inputYear === ''){
            setStatusInputDay(true)
            setStatusInputMonth(true)
            setStatusInputYear(true)

            setQuantDays('--')
            setQuantMonths('--')
            setQuantYears('--')

            alert('Insert a date in the past 2')
          } else {
            calcTime()
          }
        }
        
      }
    }

    const calcTime = ()=>{
      //
         const dateInput = new Date(`${inputYear}/${inputMonth}/${inputDay}`)
         const birthdayDay = parseInt(inputDay)
         const birthdayMonth = parseInt(inputMonth)
         const birthdayYear = parseInt(inputYear)
         const currentDate = new Date()
         const currentYear = currentDate.getFullYear()
         const currentMonth = currentDate.getMonth()+1
         const currentDay = currentDate.getDate()
        
         const lastBirthday = new Date(`${currentYear}/${birthdayMonth}/${birthdayDay}`)

         const conversionFactorForYear = (1000 * 60 * 60 * 24 * 365)
         const conversionFactorForDay = (1000 * 60 * 60 * 24)

         const diffYears = currentYear - birthdayYear
         const valueForSome = diffYears * conversionFactorForYear
         const dataref = new Date(dateInput.getTime()+valueForSome)
         const quantYearsBisext = (lastBirthday.getTime() - dataref.getTime()) / conversionFactorForDay

         //year
          const diff = currentDate.getTime() - dateInput.getTime()
          const totalDays = (diff/ conversionFactorForDay ) 
          const mediaDaysForYear = totalDays / diffYears
          const years = Math.floor((totalDays) / (365))

          if(currentYear == birthdayYear){
            setQuantYears(0)
            
          } else {
            //
            if(currentMonth >= birthdayMonth && currentDay >= birthdayDay){
              setQuantYears(currentYear-birthdayYear)
           

            }
            else if(currentMonth > birthdayMonth){
              setQuantYears(currentYear-birthdayYear)
             

            } else {
              setQuantYears(currentYear-birthdayYear-1)
            

            }
          }

          //month

          if(currentYear == birthdayYear){
            //
              if(currentMonth == birthdayMonth){
                  setQuantMonths(0)
              } else if(currentMonth > birthdayMonth){
                //
                if(currentDay >= birthdayDay){
                  setQuantMonths(currentMonth - birthdayMonth)
                }
                else {
                  //
                  setQuantMonths(currentMonth - birthdayMonth -1)
                }
                
              }
          } else {
            //
            if(currentMonth  >= birthdayMonth){
              // currentMonth  >=  birthdayMonth
              if(currentDay >= birthdayDay){
                setQuantMonths(currentMonth - birthdayMonth)
                
              } else {
                //
                if(currentMonth == birthdayMonth){
                  setQuantMonths(11)
                  
                } else {
                  setQuantMonths(currentMonth - birthdayMonth -1)
                  
                }

              }
            } else { // currentMonth  <  birthdayMonth
                //
                if(currentDay >= birthdayDay){
                  // 
                  setQuantMonths(12 - birthdayMonth + currentMonth)
                  

                } else {
                  setQuantMonths(12 - birthdayMonth + currentMonth -1)
                  

                }
            }
          }
          
          
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
        <span className={statusInputYear ? 'errorMessage errorActive': 'errorMessage'}>Must be a valid year in the past</span>
        </label>

        </div>

        <div className='division'>
          <button className='button' onClick={submit}>submit</button>
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