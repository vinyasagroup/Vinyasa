import React from 'react'
import Section1 from './Section1'
import Footer from './Footer'
import emailjs from 'emailjs-com'

 
export default function Contact() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_u3dm7e6',
    'template_tef7loi',
    e.target,
    'su9GdI6H2as-mZTzm'
    ).then(res=>{
      console.log(res);
    }).catch(err=>console.log(err))
  }
  
  // function fun(){
  //  alert("Your Meassage has been sent Successfully");
  // }

   
  
  
  return (
    <>
    <Section1/>
     <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" >
   
   </div>

    <section className='conn'>
    <div className='contact-in'>
       <div className='contact-map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.232429026768!2d74.8494179!3d12.8717931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x703532e1b95e2247!2sVinyasa%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1665037361899!5m2!1sen!2sin" width="100%" height="auto" style="border:0;" allowfullscreen="" loading="lazy"  referrerpolicy="no-referrer-when-downgrade'></iframe>
     
         </div>
<div className='contact-form'>
  <h1>Contact Us</h1>
  <form onSubmit={sendEmail}  >
  <label >Name</label>
        <input type="text" name='name' id='name' className='contact-form-txt'/>

        <label >Email </label>
        <input type='email' name='user_email'id='email' className='contact-form-txt'/>
        <label>Message</label>
        <textarea name='message'row="4" id='message' className='contact-form-txtarea'/>
        <div>
        {/* <input 
        type="submit"
        id='button' 
        name='send' 
        className="contact-form-btn " 
        style={{marginTop:"30px"}}/> */}
        <button  type="submit"
        name='send' 
        className="contact-form-btn " 
        style={{marginTop:"30px"}} >Submit</button>
        
         </div>
        
        </form>
       
</div>

</div>

</section>


   
<Footer/> 
 </>
   )
}


