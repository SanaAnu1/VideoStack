import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div style={{ backgroundColor: 'black' }} className='w-100'>
            <div className='w-100 container'>
              <Row className='w-100 container'>
                  <Col lg={7} md={6} className='p-5 pt-3' >
                      <h1 className='px-2 pb-3 mt-5 h'  style={{color:'#f7eea7'}} ><span style={{color: "#f7db0a"}}>V</span>ideo <span style={{color: "#f7db0a"}}>U</span>ploader</h1>
                      <p className='pb-5 px-2 p fs-5' style={{color:'#f7eea7'}} >Lorem ipsum dolor sitetur adipisicing elit. Vero tempore blanditiis inventore nostrum deleniti, dignissimos facilis ratione aspernatur voluptatum veritatis minus, earum neque! Consequatur a magnam, culpa doloremque quos corrupti!</p>
                      <Link to={'/main'}><div ><button className='b px-4 py-2 mb-5' style={{color:'#f7db0a'}}><b>Get Started   <i className="fa-solid fa-play fa-beat-fade fa-sm ms-2" style={{color: '#f7db0a'}}></i></b> </button></div></Link>
                  </Col>
                  <Col lg={5} md={6} className='text-center'>
                  <img 
             className='w-100 p-3 a2'
               src="https://i.postimg.cc/90P5RtkX/image-processing20220301-11686-1m6ku6d.gif" alt="" />
                  </Col>
              </Row>
              </div>
              <Row className='w-100 container'>
                  <div className='text-center px-5 pb-3 fs-1 q' style={{color:'#f7db0a'}}><b>Features</b></div>
              </Row>
                  <Row className='fe container mx-auto  pb-5'>
                      <Col lg={4} md={4} className='p-3'><div className='mx-auto d-flex justify-content-center'><Card style={{ width: '18rem', backgroundColor:'black', color:'#f7eea7', border:'#f7eea7 solid'}} >
        <Card.Img variant="top" className='i' src="https://i.postimg.cc/PqnnPXkd/e345a960626321-5a540b249b112.gif" />
        <Card.Body className='p-4'>
          <Card.Title className='q'>Managing Videos</Card.Title>
          <Card.Text className='q'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card></div></Col>
                      <Col lg={4} md={4} className='p-3'><div className='mx-auto d-flex justify-content-center'><Card style={{ width: '18rem', backgroundColor:'black', color:'#f7eea7', border:'#f7eea7 solid'}} >
        <Card.Img variant="top" className='i' src="https://i.postimg.cc/m29dhQZF/circle.gif" />
        <Card.Body className='p-4'>
          <Card.Title className='q'>Categorise Videos</Card.Title>
          <Card.Text className='q'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card></div></Col>
                      <Col lg={4} md={4} className='p-3'><div className='mx-auto d-flex justify-content-center '><Card style={{ width: '18rem', backgroundColor:'black', color:'#f7eea7', border:'#f7eea7 solid'}}>
        <Card.Img variant="top" className='i' src="https://i.postimg.cc/9QJNjcFx/R.gif" />
        <Card.Body className='p-4'>
          <Card.Title className='q'>Watch History</Card.Title>
          <Card.Text className='q'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card></div></Col>
                  
                  </Row>
            </div>
        
    )
}

export default Home