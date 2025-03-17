import Navbar from "../Components/Navbar";
import Posts from "../Components/Posts";

export default function Home()
{
    return(
        <div className="w-full flex justify-center items-center p-3 flex-col gap-8">
            <Navbar /> 
            <Posts/> 
        </div>
    )
}