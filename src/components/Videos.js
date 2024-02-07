import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideoApi } from '../apiservice/allApis'
import { Col, Row } from 'react-bootstrap'


function Videos({data}) {

  //for auto refresh
  const [deleteUpdata,setDeleteUpdate]=useState({})

  const [allVideos,setAllVideos]=useState([])
  const accessAllVideos=async()=>{
    const result=await getVideoApi()
   // console.log(result);
   setAllVideos(result.data)
  }
useEffect(()=>{
  accessAllVideos()
},[data,deleteUpdata])

console.log(allVideos);
  return (
    <Row className='w-100 mx-auto'>
      {
        allVideos?.length>0?
        allVideos?.map(
          i=>(
            <Col className='my-2' lg={6}>
                <VideoCard video={i} deleteData={setDeleteUpdate}></VideoCard>
            </Col>
          )
        )
        : <h1>No videos added yet! add a new video</h1>
      }
    </Row>
  )
}

export default Videos