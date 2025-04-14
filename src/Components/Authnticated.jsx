import axios from "axios";
import { baseURL } from "./Api";
import Cookie from 'cookie-universal'
import { User } from "./UserData";
import {  Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
    

export const postData = async (complement , data) =>
{
     const cookie = Cookie()

    try{
        let response = await axios.post(`${baseURL}/${complement}` , data )
        console.log(response)
        alert(`${complement} successfuly`)
        const token = response.data.token;
        cookie.set("media" , token)
        window.location.pathname = '/'
    }catch(err){
        console.log(err)
        console.log("error")
    }
   
}