//import {Modal , Button , Form} from 'react-bootstrap'
import {useContext, useState} from 'react'
import ModalComponent from './Modal';
import Cookie from 'cookie-universal'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Navbar()
{
  const[show , setShow] = useState(false);
  const[state , setState] = useState(null)

  const cookie = Cookie()
  const getCookie = cookie.get('media')
  const getUsername = cookie.get('username')
  const getPassword = cookie.get('password')
  //const nav = useNavigate()

  

  const handleShowLogin = () => {
           setShow(true)
           setState(false)
     }
     const handleShowRegister = () => {
      setShow(true)
      setState(true)
    }
  const handleClose = () => setShow(false)

  const handleLogout = () =>
     {
       // try{
          // let res = axios.post("https://tarmeezAcademy.com/api/v1/logout" , 
          //  {
             //username :  getUsername ,
             //password :  getPassword
              
           // } ,
          // { headers : {
               // Authorization : "Bearer " + getCookie ,
               // Accept : "application/json"
             // }
          // }
          // )
       // }
       // catch(err){
          cookie.remove('media')
          window.location.pathname = '/'
         // console.log(err)
          
       // }
     }
    return(
      <>
       { state ?
        <ModalComponent 
            show={show}
            handleClose={handleClose}
            ButtonName="Register"
        />
        : 
        <ModalComponent
            show={show}
            handleClose={handleClose}
            ButtonName="Login"
         />
        }
        <div className="w-[80%] h-[80px] bg-[#e7e1e1] flex justify-between items-center px-6 shadow-2xl rounded-[10px]">
          <ul className="flex justify-center items-center gap-4 list-none px-2 mt-[10px]">
            <li className="font-bold text-[21px] text-[#000000]">My Platform</li>
            <li className="font-normal text-[19px] text-[#3f3f3f]">Home</li>
            <li className="font-semibold text-[19px] text-[#aaa9a9]">Profile</li>
          </ul>
          {
            getCookie ?
            <button onClick={handleLogout} className='flex justify-center items-center bg-red-500 text-gray-300 text-[17px] w-[70px] p-2 rounded-[10px] hover:border-solid hover:border-red-500 hover:border-[2px] hover:bg-white hover:text-red-500 font-semibold'>Logout</button>
            :
          <div className="flex justify-center items-center gap-4">
              <button onClick={handleShowLogin} className="flex justify-center items-center bg-green-500 text-gray-300 text-[17px] w-[70px] p-2 rounded-[10px] hover:border-solid hover:border-green-500 hover:border-[2px] hover:bg-white hover:text-green-500 font-semibold">Login</button>
              <button onClick={handleShowRegister} className="flex justify-center items-center bg-green-500 text-gray-300 text-[17px] w-[90px] p-2 rounded-[10px]  hover:border-solid hover:border-green-500 hover:border-[2px] hover:bg-white hover:text-green-500 font-semibold">Register</button>
          </div>
          }
        </div>
        </>
    )
}