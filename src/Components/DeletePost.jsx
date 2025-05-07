import axios from 'axios'
import Cookie from 'cookie-universal'
import { baseURL, POSTS } from './Api'
export const DeletePost = async (idPost) =>
{
    const cookie = Cookie()
    const token = cookie.get("media")

    try{
        let res = await axios.delete(`${baseURL}/${POSTS}/${idPost}` , 
            {
                headers:{
                    Authorization: "Bearer " + token
                }
            }
        )
        console.log(res)
        window.location.pathname = '/'
    }catch(err)
    {
        console.log(err)
    }
}