import { useEffect, useState } from "react"
import { baseURL, POSTS } from "./Api"
import axios from "axios"
import { Button, Form, Modal } from "react-bootstrap"
import { UpdatePost } from "./UpdatePost"
import { TbRuler } from "react-icons/tb"

export default function UpdateModal({show , handleClose , idPost})
{
    const[updateBody , setupdateBody] = useState('')
    const[updateTitle , setubdateTitle] = useState('')
   
       
       useEffect( () => {
             console.log(idPost)
                try {
                  let res = axios.get(`${baseURL}/${POSTS}/${idPost}`)
                  .then((res) => {
                     setubdateTitle(res.data.data.title)
                     setupdateBody(res.data.data.body)
                        
                  })
                }catch(err) {
                  console.log(err)
                }
          } ,[])
   
    const handleData = () => 
    {
        UpdatePost(idPost , UpdatePostForm)
    }
    const UpdatePostForm = new FormData();
    UpdatePostForm.append("body" , updateBody)
    UpdatePostForm.append("title" , updateTitle)
    UpdatePostForm.append("_method" , "put")
    

    return(
          <Modal show={show} onHide={handleClose} id="mm">
             <Modal.Header closeButton>
                  <Modal.Title> Update </Modal.Title>
             </Modal.Header>
             <Modal.Body>
             <div className="pt-[20px] flex flex-col gap-6">
                 <div className="w-full flex flex-col justify-center items-start gap-2">
                     <Form.Label htmlFor="inputTextt">Title</Form.Label>
                        <Form.Control
                             type="text"
                             id="inputTextt"
                             aria-describedby="TextHelpBlock"
                             placeholder="Enter Title"
                             value={updateTitle}
                             onChange={ (e) => {setubdateTitle(e.target.value) } }
                         />
                 </div>
                 <div className="w-full flex flex-col justify-center items-start gap-2">
                     <Form.Label htmlFor="inputTexttt">Body</Form.Label>
                       <Form.Control 
                            type="text"
                            id="inputTexttt"
                            as="textarea" 
                            aria-label="With textarea" 
                            value={updateBody}
                            onChange={(e) => {setupdateBody(e.target.value) } }
                      />
                 </div>
                  
            </div>       
      </Modal.Body>
      <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleData}>Update</Button>
     </Modal.Footer>
</Modal>
    )
}