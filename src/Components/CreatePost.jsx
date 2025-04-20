import axios from 'axios'
import Cookie from 'cookie-universal'
import { baseURL, POSTS } from './Api'

const cookie = Cookie()
const getCookie = cookie.get("media")

export const createPost = async (dataNewPost) => 
{
    try {
        let res = await axios.post(`${baseURL}/${POSTS}` , dataNewPost , 
          {
            headers : {
              Authorization : "Bearer " + getCookie 
            }
          }
        )
        console.log(res)
      }catch(err){
        console.log(err)
        console.log(dataNewPost)
      }
}