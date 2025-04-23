import { NavLink } from "react-router";

export default function Card(props)
{
    return(
        <NavLink to={`/postDetails/${props.id}`} className="lg:w-[40%] no-underline md:[50%] sm:w-[40%] w-[95%] flex justify-center items-center flex-col gap-4 p-3 md:p-4 bg-[#dee3f3] rounded-[20px] shadow-xl hover:opacity-[0.8] hover:duration-[0.8s] hover:scale-[1.1]" id={props.id}>
             <div className="w-full lg:h-[40px] flex lg:flex-row flex-col justify-start lg:items-center items-start pl-0 lg:pl-4 gap-3">
                <img className="w-[50px] h-[50px] rounded-full bg-gray-100 border-[1px] border-white" src={props.profile_image} alt=""/>
                <p className="font-bold text-[13px] md:text-[18px] text-[#000000]">{props.userName}</p>
             </div>
             <div className="w-full h-[220px] md:h-[300px] lg:h-[350px] flex justify-center items-center">
                <img className="w-full h-full bg-white" src={props.image} alt="not found"/>
             </div>
             <div className="flex flex-col justify-center items-start gap-2 w-[97%] border-b-2 border-b-[#c4c1c1]">
                <p className="font-normal text-gray-500 text-[16px]">{props.created_at}</p>
                {
                  props.title ? <h2 className="font-normal text-[#000000] text-[17px] sm:text-[20px] md:text-[24px]">{props.title}</h2>
                  : <h2 className="font-normal text-[#000000] text-[17px] sm:text-[20px] md:text-[24px] w-full h-[28px]"></h2>
                }
                
                <p className="font-medium text-[#000000] w-[full] text-[13px] md:text-[16px]">{props.body}</p>
             </div>
             <div className="w-full h-[40px] flex justify-start items-center pl-4">
                <p>Comments {props.comments_count}</p>
             </div>
        </NavLink>
    )
}