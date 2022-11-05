// import react from 'react';
// import { useNavigate } from 'react-router-dom'
// import Contact from "./Contact";

import {Route, Routes} from 'react-router-dom';

function Anchor(){

   
    return(
        <>
    <Routes>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        
  </>  )
}
export default Anchor;