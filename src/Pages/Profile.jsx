import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Cookie from 'cookie-universal'
import { baseURL, POSTS, USERS } from "../Components/Api"
import Navbar from "../Components/Navbar"
import userImg from './../assets/user.png'
import Card from "../Components/Card"

export default function Profile()
{
    const { id } = useParams()
    const[user , setUser] = useState({})
    const[posts , setPosts] = useState([])

    const cookie =  Cookie()
    const userId = cookie.get("userId")
    const token = cookie.get("media")

    useEffect(() => 
    {
        try{
            let res = axios.get(`${baseURL}/${USERS}/${userId}`)
            .then((res) => {setUser(res.data.data) ; console.log(res.data.data)})
        }catch(err){
            console.log(err)
        }
    }, [])

    useEffect(() => 
    {
        try{
           let res = axios.get(`${baseURL}/${USERS}/${userId}/${POSTS}` , 
            {
                headers: {
                    Authorization : "Bearer " + token
                }
            })
            .then(res => {setPosts(res.data.data) ; console.log(res.data.data)} )
        }catch(err) 
        {
            console.log(err)
        }
    }, [])

    const showUserPosts = posts.map(item => 
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
        <div className="w-full flex justify-center items-center p-2 flex-col gap-8">
        <Navbar />
        { user &&
          <div className="w-full justify-center items-center flex flex-col">
            <div className=" w-[95%] sm:w-[80%] bg-[#f1f0f0] flex justify-start gap-9 items-center py-8 pl-8  rounded-[10px] shadow-xl">
                <div className="flex justify-center items-center gap-3">
                   {typeof(user.profile_image) === 'string' ?
                     <img className="w-[90px] h-[90px] rounded-full" src={user.profile_image}/>
                    :
                    <img className="w-[90px] h-[90px] rounded-full" src={userImg}/>
                   }
                    <div>
                        <h3 className="font-bold">{user.email}</h3>
                        <h3 className="font-bold">{user.username}</h3>
                        <h3 className="font-bold">{user.name}</h3>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="flex justify-center items-center gap-2">
                         <p className="text-black text-[20px]">{user.posts_count} </p>
                        <p className="text-gray-400 font-bold">Posts</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <p className="text-black text-[20px]">{user.comments_count}</p>
                        <p className="text-gray-400 font-bold">Comments</p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mt-5 pl-4"><h1>{user.username}’s Posts</h1></div>
                <div className=" xl:w-[90%] w-full flex justify-center items-center flex-wrap flex-col lg:flex-row  px-1 py-3  rounded-[10px] gap-12">
                    {showUserPosts}
                </div>
        </div>}
        </div>
    )
}