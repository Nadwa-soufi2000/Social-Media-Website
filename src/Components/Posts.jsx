import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { baseURL } from "./Api";
import ModalComponent from "./Modal";
import Cookie from 'cookie-universal'

export default function Posts()
{
    const[Data , setData] = useState([]);
    const[show , setShow] = useState(false);
    const[openModal , setOpenModal] = useState(false);

    const cookie = Cookie()
    const getCookie = cookie.get("media")

    const handleClose = () => setShow(false)
    const handleClick = () => {setOpenModal(true) ; setShow(true) ; console.log('open' , openModal)}
        
    useEffect(() => {
        try
        {
            axios.get(`${baseURL}/posts`)
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
       title={item.title}
       userName={item.author.username}
       profile_image={item.author.profile_image}
       image={item.image}
       body={item.body}
       created_at={item.created_at}
       comments_count={item.comments_count}
    />
      )

    return(  
      <>
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