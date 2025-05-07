import axios from "axios"
import { baseURL, POSTS } from "./Api"
import Cookie from 'cookie-universal'
export const UpdatePost = async (idPost , newData) => 
{
    const cookie = Cookie()
    const token = cookie.get("media")
    console.log(newData)
    try {
        let res = await axios.post(`c` , newData , 
            {
                headers : {
                   Authorization : "Bearer " + token
                }
            }
        )
        console.log(res)
        window.location.pathname=`/postDetails/${idPost}`
    }catch(err){
        console.log(err)
    }
}