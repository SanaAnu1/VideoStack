import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className=' bg-dark w-100'>

      <div className='w-100 container'>
        <Navbar className="bg-dark p-3 ps-5 w-100">
          <Container>
            <Navbar.Brand href="#home"> <img  width='30' height='30' src="https://i.postimg.cc/PfSNRX73/icon-play-button-icons-and-png-backgrounds-20.png" alt="" />
            <h className="a1 ps-4 text-light"><b><span  style={{color: "#960303"}}>V</span>ideo <span  style={{color: "#960303"}}>U</span>ploader</b></h></Navbar.Brand>
            <Navbar.Toggle />
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Header