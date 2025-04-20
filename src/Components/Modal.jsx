//import { useState } from "react";
import { Form , Button , Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import  { postData } from "./Authnticated";
//import { User } from "./UserData";


import { createPost } from "./CreatePost";

//import axios from "axios";
//import { baseURL } from "./Api";


export default function ModalComponent({show , handleClose , ButtonName})
{
  const[userName , setUserName] = useState('')
  const[Password , setPassword] = useState('')
  const[Image , setImage] = useState()
  const[Name , setName] = useState('')
  const[Email , setEmail] = useState('')

  const[body , setBody] = useState('')
  const[title , setTitle] = useState('')
  const[imageNewPost , setImageNewPost] = useState()
  

  //const userData = useContext(User)

    
  const LoginForm = new FormData();
  LoginForm.append("username" , userName)
  LoginForm.append("password" , Password)

  const RegisterForm = new FormData();
  RegisterForm.append("username" , userName)
  RegisterForm.append("password" , Password)
  RegisterForm.append("image" , Image)
  RegisterForm.append("name" , Name)
  RegisterForm.append("email" , Email)

  const CreatePostForm = new FormData();
  CreatePostForm.append("image" , imageNewPost)
  CreatePostForm.append("body" , body)
  CreatePostForm.append("title" , title)
  


  const handleData = () => 
  {
    if(ButtonName === "Login")
    {
       postData("login" , LoginForm)
    }
    else if(ButtonName === "Register")
    {
      postData("register" , RegisterForm )
    }
    else 
    {
      createPost(CreatePostForm)
    }
  }



    return(
          <Modal show={show} onHide={handleClose} id="mm">
                     <Modal.Header closeButton>
                         <Modal.Title>
                            {
                                ButtonName === "Login" 
                                ?
                                "Login"
                                :
                                ButtonName === "Register" ?
                                "Register"
                                :
                                "New Post"

                            }
                         </Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                        <div className="pt-[20px] flex flex-col gap-6">
                        {
                          ButtonName === "Create"  ?
                          <>
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <Form.Label htmlFor="inputTextt">Title</Form.Label>
                                <Form.Control
                                     type="text"
                                     id="inputTextt"
                                     aria-describedby="TextHelpBlock"
                                     placeholder="Enter Title"
                                     value={title}
                                     onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                  <Form.Label htmlFor="inputTexttt">Body</Form.Label>
                                  <Form.Control 
                                     type="text"
                                     id="inputTexttt"
                                     as="textarea" 
                                     aria-label="With textarea" 
                                     value={body}
                                     onChange={(e) => setBody(e.target.value)}
                                   />
                            </div>
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                               <Form.Label htmlFor="inputIm">Image</Form.Label>
                               <div className="flex justify-center items-center w-full relative">
                                <Form.Label className="bg-[#2875bd] text-white rounded-[8px] w-full h-full pt-2 text-center absolute" htmlFor="inputIm" >Choose a photo</Form.Label>
                                <Form.Control
                                   type="file"
                                   id="inputIm"
                                   aria-describedby="ImageHelpBlock"
                                   onChange={(e) => setImageNewPost(e.target.files[0])}
                               />
                               </div>
                            </div>
                          </>


                            :


                            ButtonName === "Register" &&
                         <>
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                               <Form.Label htmlFor="inputTextN">Name</Form.Label>
                               <Form.Control
                                   type="text"
                                   id="inputTextN"
                                   aria-describedby="TextHelpBlock"
                                   placeholder="Enter your name"
                                   value={Name}
                                   onChange={(e) => setName(e.target.value)}
                               />
                          </div>
                          <div className="w-full flex flex-col justify-center items-start gap-2">
                               <Form.Label htmlFor="inputEmail">Email</Form.Label>
                               <Form.Control
                                   type="email"
                                   id="inputEmail"
                                   aria-describedby="TextHelpBlock"
                                   placeholder="Enter your email"
                                   value={Email}
                                   onChange={(e) => setEmail(e.target.value)}
                               />
                          </div>
                          <div className="w-full flex flex-col justify-center items-start gap-2">
                               <Form.Label htmlFor="inputImage">Profile Image</Form.Label>
                               <div className="flex justify-center items-center w-full relative">
                                <Form.Label className="bg-[#2875bd] text-white rounded-[8px] w-full h-full pt-2 text-center absolute" htmlFor="inputImage" >Choose a photo</Form.Label>
                                <Form.Control
                                   type="file"
                                   id="inputImage"
                                   aria-describedby="ImageHelpBlock"
                                   className="border-none rounded-[20px]"
                                   onChange={(e) => setImage(e.target.files[0])}
                               />
                               </div>
                            </div>
                           </>
                        }
                        { 
                          ButtonName !== 'Create' &&
                          <>
                          <div className="w-full flex flex-col justify-center items-start gap-2">
                               <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                               <Form.Control
                                   type="password"
                                   id="inputPassword5"
                                   aria-describedby="passwordHelpBlock"
                                   placeholder="Enter your password"
                                   value={Password}
                                   onChange={(e) => setPassword(e.target.value)}
                               />
                          </div>
                          <div className='flex flex-col justify-center items-start w-full gap-2'>
                               <Form.Label htmlFor="inputText">UserName</Form.Label>
                               <Form.Control
                                   type="Text"
                                   id="inputText"
                                   aria-describedby="emailHelpBlock"
                                   placeholder="Enter your username"
                                   value={userName}
                                   onChange={(e) => setUserName(e.target.value)}
                               />
                          </div>  
                          </>  
                        } 
                          </div>    
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleData}>
                      {ButtonName}
                    </Button>
                  </Modal.Footer>
                </Modal>
    )
}