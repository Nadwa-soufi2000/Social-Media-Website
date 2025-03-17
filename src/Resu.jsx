import { useState } from "react"

export default function Resu({children , numOfWords , state})
{
    const[com , setCom] = useState(false)
    return(
        <div className="w-[470px]  bg-gray-400 rounded-[20px] shadow-xl p-6">
          {state === 1 ?
           com ?
           children 
           : 
           children.split(" ").slice(0 , numOfWords).join(" ") + "..."
           :(
           com ?
           children.split(" ").slice(0 , numOfWords).join(" ") + "..."
            :
            children)
           }
          <button className="text-blue-600 text-[20px]" onClick={() => setCom(prev => !prev)}>show 
            {state === 1 ?
            com ? 
            'Less' 
            : 
            'More'
            :
            com ? 
            'More'
            :
            'Less'
            }
            </button>
        </div>
    )
}