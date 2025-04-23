import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { baseURL, POSTS } from './Api'
import axios from 'axios'
import { BiSend } from "react-icons/bi";
import { AddComment } from './AddNewComment'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Alert } from 'react-bootstrap'



export default function PostDetails()
{
    const { id } = useParams()
    const[post , setPost] = useState({})
    const[comments , setComments] = useState([])
    const[newComment , setNewComment] = useState('')
    const[Open , setOpen] = useState(false)
    const[show , setShow] = useState(false);

    console.log(show)

    useEffect( () => {
       console.log(id)
          try {
            let res = axios.get(`${baseURL}/${POSTS}/${id}`)
            .then((res) => {
               setPost(res.data.data)
               setComments(res.data.data.comments)
               console.log(res)
            })
          }catch(err) {
            console.log(err)
          }
    } ,[])

    const handleAddComment = (e) =>
    {
       setNewComment(e.target.value)
    }

    const handleClick = () => 
    {
       AddComment(newComment , id)
       setShow(true)
    }

    const handleShowComments = () => 
    {
       setOpen((prev) => !prev)
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
          <div className=' w-full'>
           <div className='w-full flex justify-center items-center p-2 flex-col gap-8'>
               <Navbar />   
               { post &&
                  <div className="lg:w-[40%] no-underline md:[50%] sm:w-[40%] w-[95%] flex justify-center items-center flex-col gap-4 p-3 md:p-4 bg-[#dee3f3] rounded-[20px] shadow-xl" id={post.id}>
                              <div className="w-full lg:h-[40px] flex lg:flex-row flex-col justify-start lg:items-center items-start pl-0 lg:pl-4 gap-3">
                                 <img className="w-[50px] h-[50px] rounded-full bg-gray-300" src={post.profile_image} alt=""/>
                                 <p className="font-bold text-[13px] md:text-[18px] text-[#000000]">{post.username}</p>
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
                    show && localStorage.getItem('added') !== 'true' &&
                    <div className='fixed bottom-[5%] right-[3%] w-[330px] h-[90px]'>
                       <Alert className='w-[330px] h-[90px]' variant="danger" onClose={() => setShow(false)} dismissible>
                          <p>
                             Error while adding a comment!
                         </p>
                      </Alert>
                    </div>
                  }


                  { show && localStorage.getItem('added') !== 'false' &&
                   <div className='fixed bottom-[5%] right-[3%] w-[330px] h-[90px]'>
                      <Alert className=' w-[330px] h-[90px]' variant="success" onClose={() => setShow(false)} dismissible>
                         <p>
                            Comment added successfully!
                         </p>
                      </Alert>
                   </div>
                  }
        </div>
    )
}