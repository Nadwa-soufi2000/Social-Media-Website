//import {Modal , Button , Form} from 'react-bootstrap'
import {useState} from 'react'
import ModalComponent from './Modal';
import Cookie from 'cookie-universal'
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { Alert } from 'react-bootstrap';
import { Link, Links, useParams } from 'react-router-dom';




export default function Navbar()
{
  const[show , setShow] = useState(false);
  const[state , setState] = useState(null);
  const[open , setOpen] = useState(true);

  const[showAlert , setShowAlert] = useState(false);

  const cookie = Cookie()
  const getCookie = cookie.get('media')
  const userId = cookie.get("userId")
  const { id } = useParams()

  console.log(showAlert)
  

  const handleShowLogin = () => {
           setShow(true)
           setState(false)
           setShowAlert(true)
     }
     const handleShowRegister = () => {
      setShow(true)
      setState(true)
      setShowAlert(true)
    }
  const handleClose = () => setShow(false)

  const handleLogout = () =>
     {
          cookie.remove('media')
          window.location.pathname = '/'
     }

     const handleOpenMenu = () => 
     {
       setOpen(false)
       const ul = document.getElementById("ulEle");
       const btn = document.getElementById("btn");
       const divE = document.getElementById("divEle");
       console.log(divE)

       ul.classList.remove("hidden")
       btn && btn.classList.remove("hidden")
       divE && divE.classList.remove("hidden")

       ul.classList.add("flex")
       btn && btn.classList.add("flex")
       divE && divE.classList.add("flex")
       
     }

     const handleCloseMenu = () => 
     {
        setOpen(true)
        const ul = document.getElementById("ulEle");
        const btn = document.getElementById("btn");
        const divE = document.getElementById("divEle");
 
        ul.classList.add("hidden")
        btn && btn.classList.add("hidden")
        divE && divE.classList.add("hidden")
 
        ul.classList.remove("flex")
        btn && btn.classList.remove("flex")
        divE && divE.classList.remove("flex")
        
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
        <div className=" w-[95%] sm:w-[80%] md:h-[80px] md:py-0 py-2 bg-[#e7e1e1] flex md:flex-row flex-col md:justify-between justify-center md:items-center items-end px-6 shadow-2xl rounded-[10px]">
          { open ?
            <MdMenu className='md:hidden flex w-[30px]  h-[30px] text-gray-500 fit-content' onClick={handleOpenMenu} />
             :
            <MdClose className='md:hidden flex w-[30px]  h-[30px] text-gray-500 fit-content' onClick={handleCloseMenu}/>
          }
        
          <ul className="md:flex md:flex-row flex-col hidden  justify-center items-end md:items-center gap-4 list-none px-2 mt-[10px]" id='ulEle'>
            <li className="font-bold text-[16px] md:text-[18px] lg:text-[21px] text-[#000000]">My Platform</li>
            <li className="font-normal md:text-[16px] lg:text-[19px] text-[#949393]">Home</li>
           {getCookie &&
            <li className="font-semibold md:text-[16px] lg:text-[19px] text-[#aaa9a9]"><Link to={`/profile/${userId}`} className='font-semibold md:text-[16px] lg:text-[19px] text-[#aaa9a9] no-underline'>Profile</Link></li>
           }
          </ul>
          {
            getCookie ?
            <button onClick={handleLogout} className='md:flex hidden justify-center items-center bg-red-500 text-gray-300 text-[15px] md:text-[17px] w-[70px] p-2 rounded-[10px] hover:border-solid hover:border-red-500 hover:border-[2px] hover:bg-white hover:text-red-500 font-semibold' id='btn'>Logout</button>
            :
          <div className="md:flex md:flex-row flex-col hidden justify-center md:items-center items-end gap-4" id='divEle'>
              <button onClick={handleShowLogin} className="flex justify-center items-center bg-green-500 text-gray-300 text-[15px] md:text-[17px] w-[70px] p-2 rounded-[10px] hover:border-solid hover:border-green-500 hover:border-[2px] hover:bg-white hover:text-green-500 font-semibold">Login</button>
              <button onClick={handleShowRegister} className="flex justify-center items-center bg-green-500 text-gray-300  text-[15px] md:text-[17px] w-[90px] p-2 rounded-[10px]  hover:border-solid hover:border-green-500 hover:border-[2px] hover:bg-white hover:text-green-500 font-semibold">Register</button>
          </div>
          }
        </div>

         {
           showAlert && localStorage.getItem('added')  &&
              <div className='fixed bottom-[5%] right-[3%] w-[330px] h-[90px]'>
                 <Alert className='w-[330px] h-[90px]' variant="danger" onClose={() => setShowAlert(false)} dismissible>
                       <p>
                          Error while login!
                       </p>
                 </Alert>
              </div>
         } 
          


        </>
    )
}