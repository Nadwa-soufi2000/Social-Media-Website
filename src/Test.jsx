export default function Test(props)
{
    const check = (id) =>
    {
       
        const p = document.getElementById(`para${id}`);
        localStorage.setItem('key' , p.id);
        console.log(localStorage.getItem("key"))
        if(p.innerHTML === props.plus)
        p.innerHTML = props.muns;
        else
        p.innerHTML = props.plus

        let container = document.getElementById(`container${id}`)
        if(container.classList.contains("flex"))
        {
            container.classList.remove("flex")
            container.classList.add("hidden")
        }
        else
        {
            container.classList.remove("hidden")
            container.classList.add("flex")
        }
        
        localStorage.setItem("key2" , p.id)
        for(let i = 0 ; i < 3 ; i++)
          {
              const other = document.getElementById(`para${i}`)
              const cont = document.getElementById(`container${i}`)
              if(localStorage.getItem("key2") !== other.id) 
                {
                  if(other.innerHTML === props.muns && cont.classList.contains("flex"))
                     other.innerHTML = props.plus;
                  if(cont.classList.contains("flex"))
                      {
                        cont.classList.remove("flex")
                        cont.classList.add("hidden")
                    }
                }
          }

    }


    return(
        <div className="flex justify-center items-center flex-col gap-6 w-[30%] border-[1px] border-solid border-red-600 rounded-[20px] p-3" onClick={() => check(props.num)} id={props.num}>
            <div className="flex justify-around items-center w-full">
                <p>{props.num}</p>
                <h1>{props.title}</h1>
                <p id={`para${props.num}`}>{props.plus}</p>
            </div>
            <div className="hidden justify-center items-center" id={`container${props.num}`}>
                <p className="text-center">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Perspiciatis quidem sit porro exercitationem sequi cumque officiis nobis,
                     eius aspernatur omnis numquam velit. Esse quod nesciunt dolore nobis distinctio 
                     quam amet?
                </p>
            </div>
        </div>
    )
}