import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return(
        
        <nav className= "elements">
            <a id="contacts" href= "./contact">Contact Me</a>
             <NavLink to = "./Contact" exact = "true" >Contavt Me</NavLink> 
            {/* <NavLink to ="./Products" exact = "true" className= "products">Products</NavLink>
            <NavLink to ="./About" exact = "true" className= "about">About</NavLink> */}
            {/* <NavLink to ="./Contact" exact = "true" className= "contact">Contact</NavLink> */}
            {/* <NavLink to ="./Login" exact = "true" className= "login"><button>Login</button></NavLink>
            <NavLink to ="./Signup" exact = "true" className= "signup"><button className= "color">Signup</button></NavLink> */}
             
        </nav>
  

    )
}
export default NavBar;