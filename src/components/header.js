import React from 'react'
import {Navbar ,Nav} from 'react-bootstrap'
import {
    Routes,
    Route,
    Link} from 'react-router-dom'
import Home from './main'
import Basket from './basket'
import About from './about'
import {useSelector} from 'react-redux'
import Model from '../model'
const Header = () => {
    const card=useSelector(state=>state.shopreducer.card)
    
    return (
       
        <div>
            
            <Navbar bg='dark' variant='dark' sticky='top' >
         <Nav.Link as={Link} to='/'>HOME</Nav.Link>
        
         <Nav.Link as={Link} to='/basket'>BASKET{card.length !==0 && <span className='badge badge-danger'>{card.length}</span> }</Nav.Link>
         <Nav.Link as={Link} to='/about'>About us</Nav.Link>
 </Navbar>




 


<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/basket' element={<Basket/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/model' element={<Model/>}/>
</Routes>

        </div>
    )
}

export default Header
