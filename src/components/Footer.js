import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'



function Footer() {
  return (
    <>
    <div className='w-100 f1 border-top'>
        <Row className='bg-black text-white w-100 mx-auto r1'>
            <Col lg={3} md={3} sm={12} className=' ps-3 pe-3 pt-3' >
                <h5><img className='mb-2'  width='30' height='30' src="https://i.postimg.cc/PfSNRX73/icon-play-button-icons-and-png-backgrounds-20.png" alt="" /><span style={{color: "#960303"}} className='ps-2'>V</span>ideo <span style={{color: "#960303"}}>U</span>ploader</h5>
                <p>Designed and built with all the love in the world by the bootstrap team Possimus recusandae consequatur ipsa veritatis expedita aspernatur.</p>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}  className=' ps-3 pe-3 pt-3'>
            <h5 style={{color: "#960303"}}>Links</h5>
            <p>Landing Page <br />Home <br />Watch History</p>
            </Col>
            <Col lg={3} md={3} sm={6} xs={12}  className=' ps-3 pe-3 pt-3'>
                <h5 style={{color: "#960303"}}>Guides</h5>
                <p>React <br />React Bootstrap <br />Routing</p>
            </Col>
            <Col lg={3} md={3} sm={12}  className=' ps-3 pe-3 pt-3'>
               <form action="">
               <h5 style={{color: "#960303"}}>
                    Contact Us
                </h5>
                <input type="text" placeholder='enter email' className='bg-light px-3 py-1 w-100 bu' />
                <button className=' py-1 w-100 mt-1 bu' style={{backgroundColor: "#960303"}}>Send</button>
                </form>
                <div class="pt-3 pb-4 text-center m-0 ">
                <a href="">
                  <i class="fa-solid fa-phone fa-xl px-3"  style={{color: "#960303"}}></i></a>
                <a href=""><i class="fa-solid fa-envelope fa-xl px-3" style={{color: "#960303"}}></i></a>
                <a href="">
                    <i class="fa-brands fa-instagram fa-xl px-3" style={{color: "#960303"}}></i></a>
                <a href=""><i class="fa-brands fa-linkedin fa-xl px-3" style={{color: "#960303"}}></i></a>
                </div>

            </Col>
        </Row>
    </div>
    </>
  )
}

export default Footer