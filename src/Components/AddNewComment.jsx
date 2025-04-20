import axios from "axios"
import { baseURL, POSTS } from "./Api"
import Cookie from 'cookie-universal'
export const AddComment = async (comment , idPost) =>
{
    const cookie = Cookie()
    const token = cookie.get("media")
      try {
       let res = await axios.post(`${baseURL}/${POSTS}/${idPost}/comments` , 
        { "body" : comment } 
        ,
        {
        headers : {
            Authorization : "Bearer " + token
        }
        })
        console.log(res)
      }catch(err)
      {
        console.log(err)
      }
}