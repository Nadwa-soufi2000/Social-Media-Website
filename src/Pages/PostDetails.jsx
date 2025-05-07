import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { baseURL, POSTS } from '../Components/Api'
import axios from 'axios'
import { BiSend } from "react-icons/bi";
import { AddComment } from '../Components/AddNewComment'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Alert, Modal } from 'react-bootstrap'
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Cookie from 'cookie-universal'
import UpdateModal from '../Components/UpdateModal'
import { DeletePost } from '../Components/DeletePost'

//<FaUserEdit />
//<RiDeleteBin5Fill />

export default function PostDetails()
{
    const { id } = useParams()
    const[post , setPost] = useState({})
    const[comments , setComments] = useState([])
    const[newComment , setNewComment] = useState('')
    const[Open , setOpen] = useState(false)
    const[showComm , setShowComm] = useState(false);
    const[authorId , setauthorId] = useState(0)
    const[state , setState] = useState()
    const[show , setShow] = useState(false)
    const[stateDelete , setStateDelete] = useState()
    const[authorImage , setAuthorimage] = useState()
    const[userName , setUsername] = useState('')
    
    //post.author.profile_image;
    //console.log(post.author.username) ;
    
    const cookie = Cookie()
    const userId = cookie.get("userId")
    

    console.log(userId + ' ' + authorId)

    console.log(showComm)
    console.log(state)

    useEffect( () => {
       console.log(id)
          try {
            let res = axios.get(`${baseURL}/${POSTS}/${id}`)
            .then((res) => {
               setPost(res.data.data)
               localStorage.setItem('authorId' , res.data.data.author.id)
               setauthorId(res.data.data.author.id)
               setAuthorimage(res.data.data.author.profile_image)
               setUsername(res.data.data.author.username)
               setComments(res.data.data.comments)
               console.log(res)
               console.log(res.data.data.author.id)
               
            })
          }catch(err) {
            console.log(err)
          }
    } ,[showComm])

    const handleAddComment = (e) =>
    {
       setNewComment(e.target.value)
    }

    const handleClick = () => 
    {
       AddComment(newComment , id)
       setShowComm(true)
      
    }

    const handleShowComments = () => 
    {
       setOpen((prev) => !prev)
    }

    const handleUpdate = () => 
    {
       setShow(true)
       setState(true)
       setStateDelete(false)
    }

    const handleClose = () => 
    {
      setShow(false)
    }

    const handleDelete = () =>
    {
      setShow(true)
      setStateDelete(true)
      setState(false)
    }
    
        const showComments = comments.map((item , index) => 
           <div key={index} className="flex flex-col items-start justify-center w-full pt-3 pl-3 rounded-[10px] shadow-xl bg-white">
               <div className='w-full flex gap-2 justify-start items-center'>
                  <img src={item.author.profile_image} className='w-[50px] h-[50px] rounded-full bg-gray-100'/>
                  <p>{item.author.username}</p>
               </div>
               <p className='font-normal text-[#000000] text-[17px] sm:text-[20px] md:text-[22px] pl-2'>{item.body}</p>
           </div>
        )
   
    

    return(
        <>
         {
            state &&
             <UpdateModal
                 show={show}
                 handleClose={handleClose}
                 idPost = {id}
                 ButtonName="Update"
             />     
         }
         {
            stateDelete &&
            <UpdateModal
                 show={show}
                 handleClose={handleClose}
                 idPost = {id}
                 ButtonName="Delete"
             /> 
         }
         
          <div className=' w-full'>
           <div className='w-full flex justify-center items-center p-2 flex-col gap-8'>
               <Navbar />   
               { post &&
                  <div className="lg:w-[40%] no-underline md:[50%] sm:w-[40%] w-[95%] flex justify-center items-center flex-col gap-4 p-3 md:p-4 bg-[#dee3f3] rounded-[20px] shadow-xl" id={post.id}>
                          <div className='w-full flex justify-between items-center'>
                              <div className="w-full lg:h-[40px] flex lg:flex-row flex-col justify-start lg:items-center items-start pl-0 lg:pl-4 gap-3">
                               { post && <img className="w-[50px] h-[50px] rounded-full bg-gray-300" src={authorImage} alt=""/>}
                                {post && <p className="font-bold text-[13px] md:text-[18px] text-[#000000]">{userName}</p>}
                              </div>
                              { userId === authorId &&
                                  <div className='flex justify-center items-center gap-2'>
                                      <FaUserEdit onClick={handleUpdate}  className='w-[20px] h-[20px]  fit-content hover:text-gray-700' />
                                      <RiDeleteBin5Fill onClick={handleDelete} className='w-[20px] h-[20px] fit-content hover:text-gray-700 fit-content' />
                                  </div>
                              }
                          </div>
                              <div className="w-full h-[220px] md:h-[300px] lg:h-[350px] flex justify-center items-center">
                                 <img className="w-full h-full bg-slate-600" src={post.image} alt="not found"/>
                              </div>
                              <div className="flex flex-col justify-center items-start gap-2 w-[97%] border-b-2 border-b-[#c4c1c1]">
                                 <p className="font-normal text-gray-500 text-[16px]">{post.created_at}</p>
                                 {
                                   post.title ? <h2 className="font-normal text-[#000000] text-[17px] sm:text-[20px] md:text-[24px]">{post.title}</h2>
                                   : <h2 className="font-normal text-[#000000] text-[17px] sm:text-[20px] md:text-[24px] w-full h-[28px]"></h2>
                                 }
                                 
                                 <p className="font-medium text-[#000000] w-[full] text-[13px] md:text-[16px]">{post.body}</p>
                              </div>
                             <div className="w-full h-[40px] flex justify-between items-center px-2 text-[24px] font-bold">
                                <p>
                                   {
                                    !Open ?
                                     'Show Comments'
                                    : 
                                     'Hide Comments'
                                   }
                                </p> 
                                { !Open && <IoIosArrowDown className='text-[24px] hover:scale-[1.2] font-bold' onClick={handleShowComments} /> }
                                { Open && <IoIosArrowUp className='text-[24px] hover:scale-[1.2] font-bold' onClick={handleShowComments}/> }
                              </div>
                               { Open &&
                                  <div className='flex justify-center items-start gap-4 flex-col w-full duration-[0.8s]'>
                                       {showComments}
                                  </div>
                               }
                              <div className='flex justify-start items-center w-full gap-3 pt-3 pl-1'>
                                 <input value={newComment} onChange={handleAddComment} className='w-[90%] outline-none pl-3 rounded-[6px] py-3' type='text' placeholder='Add comment' />
                                 <BiSend className='w-[30px] h-[30px] rotate-[180deg] text-green-500 fit-content rounded-full flex justify-center items-center  hover:scale-[1.1] hover:duration-[1s]' onClick={handleClick}/>
                              </div>
                         </div>   
                  }
             </div>

               {
                 showComm && localStorage.getItem('addedComment') !== 'true' &&
                     <div className='fixed bottom-[5%] right-[3%] w-[330px] h-[90px]'>
                        <Alert className='w-[330px] h-[90px]' variant="danger" onClose={() => setShowComm(false)} dismissible>
                            <p>
                               Error while adding a comment!
                            </p>
                        </Alert>
                     </div>
               } 
                       
               { showComm && localStorage.getItem('addedComment') !== 'false' &&
                     <div className='fixed bottom-[5%] right-[3%] w-[330px] h-[90px]'>
                        <Alert className=' w-[330px] h-[90px]' variant="success" onClose={() => setShowComm(false)} dismissible>
                             <p>
                                Comment added successfully!
                             </p>
                        </Alert>
                     </div>
               }
        </div>
      </>  
    )
}