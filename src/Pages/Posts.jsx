import { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { baseURL, POSTS } from "../Components/Api";
import ModalComponent from "../Components/Modal";
import Cookie from 'cookie-universal'

export default function Posts()
{
    const[Data , setData] = useState([]);
    const[show , setShow] = useState(false);
    const[openModal , setOpenModal] = useState(false);
    

    const cookie = Cookie()
    const getCookie = cookie.get("media")
    localStorage.removeItem('added')

    const handleClose = () => setShow(false)
    const handleClick = () => {setOpenModal(true) ; setShow(true) ; console.log('open' , openModal)}
        
    useEffect(() => {
        try
        {
            axios.get(`${baseURL}/${POSTS}?limit=40`)
           .then((res) => {
               setData(res.data.data)
               console.log(res)
           })
        }catch(err)
        {
            console.log(err)
            console.log(Data)
        }
    }, [])
    
    const showPosts = Data.map((item) =>    
     <Card 
       key={item}
       id={item.id}
       title={item.title}
       userName={item.author.username}
       profile_image={item.author.profile_image}
       image={item.image}
       body={item.body}
       created_at={item.created_at}
       comments_count={item.comments_count}
       authorId={item.author.id}
    />
  )
    
     

    return(  
      <>
        <div className="w-[90%] sm:w-[75%] flex justify-start items-center"><h1 className="text-[18px] md:text-[30px] lg:text-[45px] text-shadow text-shadow-x-2 text-shadow-y-2 text-shadow-blur-2 text-zinc-500">Latest Posts</h1></div>
        <div className="xl:w-[90%] w-full flex justify-center items-center flex-wrap flex-col lg:flex-row  px-1 py-3  rounded-[10px] gap-9">
            {showPosts}
        </div>
        {
            openModal &&
            <ModalComponent 
                 show={show}
                 handleClose={handleClose}
                 ButtonName="Create"
             />
        }
        { getCookie &&
             <button className="fixed bottom-[5%] right-[5%] w-[50px] h-[50px] shadow-xl rounded-full text-white bg-green-500 text-[30px] text-center font-bold" onClick={handleClick}>+</button>
        }
     </>
    )
}