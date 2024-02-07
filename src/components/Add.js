import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoApi } from '../apiservice/allApis';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Add({updateData}) {

  //state to store input datas (add id key too)
  const [inputDatas,setInputDatas]=useState({
    title:"",coverImg:"",videoUrl:"",id:""
  })

//function to update input state
const setData=(e)=>{
  let {value,name}=e.target
  setInputDatas({...inputDatas,[name]:value})
}
console.log(inputDatas);

//extract url
const extractUrl=(e)=>{
  const {value,name}=e.target
 let urlCode= value.slice(-11,)

 //https://www.youtube.com/embed/D3wJMDpInaI?autoplay=1
 const finalUrl=`https://www.youtube.com/embed/${urlCode}?autoplay=1`
 setInputDatas({...inputDatas,[name]:finalUrl})
}


    const [show, setShow] = useState(false);
    const handleClose = () =>{
      setShow(false);
    //reset state
    setInputDatas({...inputDatas, title:"",coverImg:"",videoUrl:"",id:""})
  }
const handleShow = () => setShow(true);
 
const handleAdd=async(e)=>{
  //prevent the event
  e.preventDefault()

const {title,coverImg,videoUrl}=inputDatas
if(!title ||!coverImg ||!videoUrl){
  toast.error('please fill all datas', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
else{
  const result= await addVideoApi(inputDatas)
  if(result.status>=200 &&result.status<300){
updateData(result.data)
    toast.success('video added successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    handleClose()
  }
}
}

return (
    <div className='px-5 pb-2'><i class="fa-solid fa-upload fa-fade fa-2xl" style={{color: "#ed6736"}} onClick={handleShow}></i>
    

  <>
   

    <div className='bg-black'>
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton className='bg-black border'>
          <Modal.Title className='text-light'>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-black border'>
          <FloatingLabel controlId="floatingInput" label="Video Caption" className="mb-3">
        <Form.Control type="text" placeholder="Video Caption" name='title' onChange={(e)=>setData(e)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Cover Image URL" className="mb-3">
        <Form.Control type="text" placeholder="Cover Image URL" name='coverImg' onChange={(e)=>setData(e)}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Utube Video URL" className="mb-3">
        <Form.Control type="text" placeholder="Utube Video URL" name='videoUrl' onChange={(e)=>extractUrl(e)}/>
      </FloatingLabel>
      </Modal.Body>
        <Modal.Footer className='bg-black border'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" className='text-black' onClick={(e)=>handleAdd(e)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </>
  <ToastContainer />
</div>
  )
}

export default Add