import axios from "axios";
import { baseURL } from "./Api";

export const postData = async (complement , data) =>
{
    
    try{
        let response = await axios.post(`${baseURL}/${complement}` , data )
        console.log(response)
        alert(`${complement} successfuly`)
        console.log(complement)
        console.log(data)
    }catch(err){
        console.log(err)
        console.log("error")
    }
   
}