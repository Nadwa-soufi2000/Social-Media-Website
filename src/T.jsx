import Work from "./Work"

export default function T()
{
   

    const Arr = [1,2,3,4,5]
    const show = Arr.map( i => <Work key={i} starNum={i} />)
   
    return (
        <div className="flex justify-center items-center gap-4">
            {show}
        </div>
    )
}