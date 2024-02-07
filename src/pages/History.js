import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteHistoryApi, getHistoryApi } from '../apiservice/allApis';
import { Col, Row } from 'react-bootstrap';


function History() {
  const deleteHistory=async(e,id)=>{
    e.preventDefault()
  await deleteHistoryApi(id)
   accessAllHistory()
  }

  const [allHistory,setAllHistory]=useState([])
  const accessAllHistory=async()=>{
    const result=await getHistoryApi()
   // console.log(result);
   setAllHistory(result.data)
  }
  useEffect(()=>{
    accessAllHistory()
  },[])
  return (
    <div className='w-100 mx-auto bg-black p-3' >
       <Row>
         <Col lg={12}>
           <h1 className='text-center pb-2 h' style={{ color: '#ed6736'}}> Watch History</h1>
            <Table striped bordered hover variant="dark" className='text-center container' responsive='md'>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Time</th>
              <th>Video url</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
                allHistory?.length>0?
                allHistory?.map(
                  (i,index)=>(
                    
            <tr>
              <td>{index+1}</td>
              <td>{i?.title}</td>
              <td>{i?.time}</td>
              <td>{i?.videoUrl}</td>
              <td><i className="fa-solid fa-trash fa-md" style={{color: '#a71a02'}} onClick={(e)=>deleteHistory(e,i?.id)}></i></td>
            </tr>
            )
            ):"No histories"}
          </tbody>
        </Table>
         </Col>
       </Row>
    </div>
  )
}

export default History