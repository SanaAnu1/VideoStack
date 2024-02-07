import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import { addCatApi, deleteCatApi, getCatApi, getVideo, updateCatApi } from '../apiservice/allApis';
import { Col, Row } from 'react-bootstrap';


function Category() {

    const deleteCat=async(e,id)=>{
        e.preventDefault()
      await deleteCatApi(id)
       accessAllCat()
      }
    const [inputDatass,setInputDatass]=useState({
        title:"",videos:[],id:""
      })
    
    const setDataa=(e)=>{
        let {value,name}=e.target
        setInputDatass({...inputDatass,[name]:value})
    }
    console.log(inputDatass);

    const [allCat,setAllCat]=useState([])
    const accessAllCat=async()=>{
      const result=await getCatApi()
     // console.log(result);
     setAllCat(result.data)
    }
  useEffect(()=>{
    accessAllCat()
  },[])
  
  console.log(allCat);

    const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false); setInputDatass({...inputDatass, title:"",videos:[],id:""})}
  const handleShow = () => setShow(true);
  const handleAdd=async(e)=>{
    //prevent the event
    e.preventDefault()
  const {title}=inputDatass
  if(!title){
    toast.error('please fill the data', {
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
    const result= await addCatApi(inputDatass)
    if(result.status>=200 &&result.status<300){
      accessAllCat()
      toast.success('Category added successfully', {
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
  const draggingOver=(e)=>{
    e.preventDefault()
    console.log("dragging over category");
  }
  
  const dropped=async(e,id)=>{
    console.log("dropped and cat id"+id);
    //store the dragged data
    const vidId=e.dataTransfer.getData("videoId")
    console.log("dragged data ",vidId);

    //access video
    const result=await getVideo(vidId)
    const video=result.data

    //select cat
    let selectedCat=allCat.find(i=>i.id==id)
    selectedCat.videos.push(video)
    await updateCatApi(id,selectedCat)
    accessAllCat()
  }
  return (
    <>
    <div className='w-100 mx-auto'>
        <div className='p-2 w-100 mx-auto'>
         <Button className='text-center bg-light text-black w-100 mx-auto' onClick={handleShow}>Add Category</Button>
        </div>
         <div>
        <>
          
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='border text-white bg-black'>
              <Modal.Title>Add New Category</Modal.Title>
            </Modal.Header>
            <Modal.Body className='border bg-black'>
              <>
              <FloatingLabel  controlId="floatingInput" label="Category Name" className="mb-3">
            <Form.Control type="text" placeholder="Category Name" name='title'  onChange={(e)=>setDataa(e)}/>
           </FloatingLabel>
          </>
          </Modal.Body>
            <Modal.Footer className='border text-white bg-black'>
              <Button variant="danger" onClick={handleClose}>
                 Close
               </Button>
               <Button variant="light" className='text-black' onClick={(e)=>handleAdd(e)}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
         </>
         <div className='p-2 w-100 mx-auto text-center'>
         <Row>
             {
            allCat?.length>0?
            allCat?.map(
              i=>(
                
                <Col  lg={6}>
                    <div droppable onDragOver={e=>draggingOver(e)} onDrop={(e)=>dropped(e,i?.id)} className='pt-3'>
                        <Card style={{ width: '100%' }} className='bg-dark text-white border'>
                        <Card.Body>
                          <Card.Title>{i?.title}</Card.Title>
                            <marquee>
                            <div className='d-flex'>
                              {i?.videos.length>0?(
                                i?.videos.map(j=>(
                                  <div style={{width:'100px'}}>
                                    <img style={{height:'60px'}} className='w-100 ps-2' src={j?.coverImg} alt="" />
                                  </div>
  
                                ))
                              ):""}
                            </div>
                          </marquee>
                          <div className='text-center pt-2'><i className="fa-solid fa-trash fa-md" style={{color: '#a71a02'}} onClick={(e)=>deleteCat(e,i?.id)}></i></div>

                        </Card.Body>
                      </Card>
                    </div>
                </Col>
              )
            )
            : <h1>No videos added yet! add a new video</h1>
          }
         </Row>
         
        </div>
        </div>
        <ToastContainer />

    </div>
    </>
  )
}

export default Category