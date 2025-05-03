import axios from "axios";
import { baseURL } from "./Api";
import Cookie from 'cookie-universal'
import { User } from "./UserData";
import {  Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
    

export const postData = async (complement , data) =>
{
     const cookie = Cookie()

    try{
        let response = await axios.post(`${baseURL}/${complement}` , data )
        console.log(response)
        const token = response.data.token;
        cookie.set("media" , token)
        localStorage.removeItem('added')
        cookie.set("userId" , response.data.user.id )
        window.location.pathname = '/'
    }catch(err){
        console.log(err)
        localStorage.setItem('added' , 'false')
    }
   
}