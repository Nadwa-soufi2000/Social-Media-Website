export default function Profile()
{
    return(
        <div>
            <div className=" w-[95%] sm:w-[80%] bg-[#e7e1e1] flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                    <img className="w-[90px] h-[90px]"/>
                    <h3 className="font-bold"></h3>
                </div>
                <div className="flex flex-col justify-start items-center">
                    <p className="text-gray-300"> Posts</p>
                    <p className="text-gray-300"> Comments</p>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center ">
                <h2></h2>
                <div>

                </div>
            </div>
        </div>
    )
}