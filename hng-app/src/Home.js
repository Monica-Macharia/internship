

import Background from './Background.js';
import Tag from './Tag.js';
import Books from './Books.js';
import Design from './Design.js';
import Footer from './Footer.js';
import Python from './Python.js';
import Team from './Team.js';
import Twitter from './Twitter.js';
import Socials from './Socials.js';


// import Contact from './Contact.js';

function Home() {
  return (
    <div className="App">
       <img id ='arrow__img' src= {window.location.origin + '/back.png'} alt="arrow" />
      <header className="App-header">
        <img id ='profile__img' src= {window.location.origin + '/me.jpg'} alt="logo" />
        <p>
          
          <h2 id='twitter'>Macharia Nyaguthii</h2>
          <h2 id='slack'>Moni</h2>
        </p>
       </header> 
      <div className= "links">

       <Twitter />  
       <Team />
       <Books/>
       <Python />
       <Background/>
      <Design />
      <Tag />
      
      </div>
      <Socials />
      <Footer />
      
      
     {/* <Contact /> */}
     
    
     
    </div>
  );
}
export default Home;