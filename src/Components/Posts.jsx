import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function Posts()
{
    const[Data , setData] = useState([]);
    useEffect(() => {
        try
        {
            axios.get("https://tarmeezAcademy.com/api/v1/posts")
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
        <div className="w-[80%] flex justify-between items-center flex-col px-6  rounded-[10px] gap-9">
            {showPosts}
        </div>
    )
}