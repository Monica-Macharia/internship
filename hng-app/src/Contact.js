import Footer from "./Footer";

function Contact(){
   return(
        <div id= "contacts">
       <h2 id= "me">Contact Me</h2>
       <p id= "me">Hi there, contact me to ask about anything you have in mind. </p>
        <form >
           <label id="first_name">First Name</label>
           <input
           id="first1"
                type="text"
                name="first_name"
                placeholder= "Enter your first name"
                required/>
            <label id="last_name">Last Name</label>
           <input
                id="last2"
                type="text"
                name="gender"
                placeholder="Enter your last name"
               
                required/>
            <label id="email">Email</label>
           <input
                type="text"
                id="email1"
                name="email"
                placeholder= "yourname@email.com "
           
                required/>
                <label id="message">Message</label>
           <input
                type="text"
                id="message1"
                name="password"
                placeholder= "Send me a message and I'll reply you as soon as possible... "
          
                required/>
            
           <input
                id="check1"
                type="checkbox"
                name="first_name"
           
                />  
                <label id="check"> You agree to providing your data to Macharia Nyaguthii who may contact you.</label>  

                <button id="btn__submit" type="submit">Send message</button>
                </form>
                <Footer />
                </div>
   
   ) 
}

export default Contact;