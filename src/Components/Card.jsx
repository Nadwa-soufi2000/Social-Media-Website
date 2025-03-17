export default function Card(props)
{
    return(
        <div className="w-[77%] flex justify-center items-center flex-col gap-2 p-5 bg-gray-50 rounded-[20px] shadow-xl">
             <div className="w-full h-[40px] flex justify-start items-center pl-4 gap-3">
                <img className="w-[50px] h-[50px] rounded-full bg-gray-300" src={props.profile_image} alt="not found"/>
                <p className="font-bold text-[18px] text-[#000000]">{props.userName}</p>
             </div>
             <div className="w-full h-[490px] flex justify-center items-center">
                <img className="w-full h-full bg-slate-600" src={props.image} alt="not found"/>
             </div>
             <div className="flex flex-col justify-center items-start gap-2 w-[97%] border-b-2 border-b-black">
                <p className="font-normal text-gray-500 text-[16px]">{props.created_at}</p>
                <h2 className="font-normal text-[#000000] text-[24px]">{props.title}</h2>
                <p className="font-medium text-[#000000] text-[16px]">{props.body}</p>
             </div>
             <div className="w-full h-[40px] flex justify-start items-center pl-4">
                <p>Comments {props.comments_count}</p>
             </div>
        </div>
    )
}