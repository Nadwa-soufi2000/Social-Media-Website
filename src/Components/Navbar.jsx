export default function Navbar()
{
    return(
        <div className="w-[80%] h-[80px] bg-[#e7e1e1] flex justify-between items-center px-6 shadow-2xl rounded-[10px]">
          <ul className="flex justify-center items-center gap-4 list-none">
            <li className="font-bold text-[21px] text-[#000000]">Tarmeez</li>
            <li className="font-normal text-[19px] text-[#3f3f3f]">Home</li>
            <li className="font-semibold text-[19px] text-[#aaa9a9]">Profile</li>
          </ul>
          <div className="flex justify-center items-center gap-4">
            <button className="flex justify-center items-center bg-green-500 text-white text-[17px] w-[70px] p-2 rounded-[10px] hover:border-solid hover:border-green-500 hover:border-[2px] hover:bg-white hover:text-green-500 font-semibold">Login</button>
            <button className="flex justify-center items-center bg-green-500 text-white text-[17px] w-[90px] p-2 rounded-[10px]  hover:border-solid hover:border-green-500 hover:border-[2px] hover:bg-white hover:text-green-500 font-semibold">Register</button>
          </div>
        </div>
    )
}