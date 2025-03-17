import { useState } from 'react'
import {FaRegStar} from 'react-icons/fa6'
import {FaStar} from 'react-icons/fa6'

export default function Work({ starNum })
{
    const[State , setState] = useState(null)
   // const [clickStar , setClickStar ]= useState(false)

    const onEnter = (num) => {
       if(num)
       setState(true)
     }
 
     const onLeave = (num) => {
         if(num)
         setState(false)
     }

     const clickStars = (num) => 
     {
        console.log(document.getElementById(num).id)
        if(num <= document.getElementById(num).id )
        {
            setState(null)
           // setClickStar(true)
           // console.log(clickStar)
        } 
     }
    
    return(
        
        <div 
           className="flex justify-center items-center pt-4  gap-3 w-[40px]" 
           id={starNum} 
           onClick={() => clickStars(starNum)}
           onMouseEnter={() => onEnter(starNum)} 
           onMouseLeave={() => onLeave(starNum)}
        >
           {
            State ? 
            <FaStar className='text-[40px] duration-100' /> 
            :
            <FaRegStar className='text-[40px] duration-100' /> 
            }
        </div>

    )
}