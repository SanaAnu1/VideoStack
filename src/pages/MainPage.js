import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import Videos from '../components/Videos'
import Category from '../components/Category'
import { Link } from 'react-router-dom';



function MainPage() {

    //state for state lifting
    const [addUpdate,setAddUpdate]=useState("")
    return (
        <div className='w-100 bg-black mx-auto'>
            <Row className='w-100 container bg-black text-white mx-auto q'>
                <Col lg={7} md={7}>
                    <div className='p-5' >
                        <h3 className=''><span style={{ color: "#960303" }}>S</span>tart <span style={{ color: "#960303" }}>U</span>ploading <span style={{ color: "#960303" }}>V</span>ideos <span style={{ color: "#960303" }}>F</span>or <span style={{ color: "#960303" }}>F</span>ree</h3>
                        <Link  to={'/history'}>
                            <a href="">                        <h4 className='py-3' style={{ color: '#ed6736' }}><i class="fa-solid fa-clock fa-spin fa-lg" style={{ color: "white" }}></i>   View Watch History</h4>
</a>
                        </Link>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, repellendus natus? Magni, vel quo quis natus optio consectetur fugit maxime consequatur iure voluptatibus aliquam pariatur, sequi ratione, impedit officia rerum?</p>
                    </div>
                    <Add updateData={setAddUpdate}></Add>
                </Col >
                <Col lg={5} md={5}><div className='py-5  text-center'><img className='w-50' src="https://i.postimg.cc/Y0fRcW14/8162905.png" alt="" /></div></Col>
            </Row>
            <Row className='w-100 container bg-black text-white mx-auto'>
                <Col lg={7} md={7}><Videos data={addUpdate}></Videos></Col>
                <Col lg={5} md={5}>
                <Category></Category>
                </Col>
            </Row>
        </div>
    )
}

export default MainPage