function Contact(){
   return(
        <>
       <h2>Contact Me</h2>
       <p>Hi there, contact me to ask about anything you have in mind. </p>
        <form >
           <label id="first_name">First Name</label>
           <input
                type="text"
                name="first_name"
                placeholder= "Enter your first name"
                required/>
            <label id="last_name">Last Name</label>
           <input
                type="text"
                name="gender"
                placeholder="Enter your last name"
               
                required/>
            <label id="email">Email</label>
           <input
                type="text"
            
                name="email"
                placeholder= "yourname@email.com "
           
                required/>
                <label id="Message">Message</label>
           <input
                type="text"
            
                name="password"
                placeholder= "Send me a message and I'll reply you as soon as possible... "
          
                required/>
            
           <input
                type="checkbox"
                name="first_name"
           
                required/>  
                <label id="check"> You agree to providing your data to Macharia Nyaguthii who may contact you.</label>  

                <button id="btn__submit" type="submit">Send message</button>
                </form>

                </>
       
   ) 
}

export default Contact;