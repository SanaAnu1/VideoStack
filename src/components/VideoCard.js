import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, deleteVideoApi } from '../apiservice/allApis';
import { format } from 'date-fns';



function VideoCard({video,deleteData}) {

  //for delete

  const deleteVideo=async(e,id)=>{
    e.preventDefault()
   const result=await deleteVideoApi(id)
   deleteData(result.data)
  }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    //history store
    //body data-title,time,videoUrl,id

    const title=video?.title
    const videoUrl=video?.videoUrl
    //time
    let time=format(new Date(),"dd/MM/yyyy, h:mm a");
    const reqBody={
      title,videoUrl,time,id:""
    }
    // console.log(reqBody);
    await addHistoryApi(reqBody)
  }

  const dragStart=(e,id)=>{
    console.log("dragging started. source video id is "+id);
    //store the dragged data
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <div>
        <Card onDragStart={(e)=>dragStart(e,video?.id)} draggable bg='dark' style={{ width: '100%' }}  className='border'>
      <Card.Img onClick={handleShow} style={{height:'250px', width:"100%"}} variant="top" src={video?.coverImg} />
      <Card.Body>
        <Card.Title className='text-light text-center'>{video?.title}
        <div className='text-center pt-2'><i onClick={(e)=>deleteVideo(e,video?.id)} className="fa-solid fa-trash fa-md" style={{color: '#a71a02'}}></i></div>
        </Card.Title>
      </Card.Body>
    </Card>
    <Modal centered size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-dark text-light'>
          <Modal.Title >{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-light'>
        <iframe width="100%" height="300px" src={video?.videoUrl} title="Prem Poojari Malayalam Full Movie | Hariharan | Kunchacko Boban | Shalini" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard