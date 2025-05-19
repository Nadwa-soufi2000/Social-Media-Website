import {motion} from 'framer-motion'

export default function Loading()
{
    return(
        <div className="w-full h-screen flex justify-center items-center">
            <div className='relative w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]'>
                <motion.span animate={{rotate: 360  , repeat: Infinity }} transition={{duration: 1}} className='absolute box-border top-0 left-0 w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] block border-solid border-[#c3e5e5] border-[8px] border-t-[8px] borde-t-solid border-t-[#3494db] rounded-full '></motion.span>
            </div>
        </div>
    )
}