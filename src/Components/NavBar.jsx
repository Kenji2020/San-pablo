import React from 'react'
import fotito from '../assets/logopei.jpg'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillJournalBookmarkFill, BsFillPersonFill, BsDownload } from "react-icons/bs";
import {AiFillCreditCard, AiOutlineCheckSquare} from 'react-icons/ai'
import {FaGraduationCap} from 'react-icons/fa'
import {BiBrain, BiNews} from 'react-icons/bi'
export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='bgNavbar' variant="dark">
    <Navbar.Brand href="#home">
        <img className='bgNavbar' src={fotito} alt="logo" style={{width: '50px', marginLeft:'10px', marginRight:'10px'}}/> 
    
    Instituto San Pablo Misionero
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav.Link style={{color:'white', marginRight:'15px'}} className='a' href="#features"><BsFillJournalBookmarkFill/> Colegio</Nav.Link>
        <Nav.Link style={{color:'white', marginRight:'25px'}} className='a' href="#pricing"><AiFillCreditCard/> Pago mensualidad</Nav.Link>
        <Nav.Link style={{color:'white', marginRight:'25px'}} className='a' href="#pricing"><BsFillPersonFill/> Padres</Nav.Link>
        <Nav.Link style={{color:'white', marginRight:'25px'}} className='a' href="#pricing"><FaGraduationCap/> Alumnos</Nav.Link>
        <Nav.Link style={{color:'white', marginRight:'25px'}} className='a' href="#pricing"><FaGraduationCap/> Pie</Nav.Link>
        <Nav.Link style={{color:'white', marginRight:'25px'}} className='a' href="#pricing"><BiBrain/> Área psicológica</Nav.Link>
        <Nav.Link style={{color:'white', marginRight:'25px'}} className='a' href="#pricing"><BsDownload/> Protocolos y Reglamentos</Nav.Link>
        <Nav.Link style={{color:'white', marginRight:'25px'}} className='a' href="#pricing"><AiOutlineCheckSquare/> Admisión</Nav.Link>
        <Nav.Link style={{color:'white', marginRight:'25px'}} className='a' href="#pricing"><BiNews/> Noticias</Nav.Link>    
        
        
    </Navbar.Collapse>
    <Nav.Link style={{color:'white', marginRight:'25px'}}>LEMA 2022<br/>
        "Educar; dar la vida por la obra de otro"</Nav.Link>
  </Navbar>
  )
}
