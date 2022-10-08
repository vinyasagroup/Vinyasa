import React from 'react'
import Section1 from './Section1'
import Footer from './Footer'
import emailjs from 'emailjs-com'
const Contact=() => {
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
  return (
    <>
    <Section1/>

    <section className='conn'>
    <div className='contact-in'>
       <div className='contact-map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.232429026768!2d74.8494179!3d12.8717931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x703532e1b95e2247!2sVinyasa%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1665037361899!5m2!1sen!2sin" width="100%" height="auto" style="border:0;" allowfullscreen="" loading="lazy"  referrerpolicy="no-referrer-when-downgrade'></iframe>
     
         </div>
<div className='contact-form'>
  <h1>Contact Us</h1>
  <form onSubmit={sendEmail}>
  <label >Name</label>
        <input type="text" name='name' className='contact-form-txt'/>

        <label >Email </label>
        <input type='email' name='user_email' className='contact-form-txt'/>

        <label>Message</label>
        <textarea name='message'row="4" className='contact-form-txtarea'/>
        <input 
        type="submit" 
        name='send' 
        className="contact-form-btn "
        style={{marginTop:"30px"}}/></form>
</div>

</div>
</section>


    {/* <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" >
   
  </div> 

<div className="custom-breadcrumns border-bottom">
  <div className="container">
    <a href="">Home</a>
    <span className="mx-3 icon-keyboard_arrow_right"></span>
    <span className="current">Contact</span>
  </div>
</div>
<div className='row'>
<div className="container border"
style={{
  marginTop:"50px",
width: "60%",
backgroundImage: `url('https://images.unsplash.com/photo-1662581872342-3f8e0145668f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')`,
backgroundPosition: "center",
backgroundSize:"cover",

}}>
  <h1 style={{marginTop:'20px' , fontFamily:"cursive", color:"black"}}>Contact Form</h1>
      <form className='part1'  style={{margin:"25px 85px 75px 100px",fontFamily:"cursive" , color:"black", textAlign:"left",marginBottom:"50px"}}  onSubmit={sendEmail}>
        <label >Name</label>
        <input type="text" name='name' className='form-control'/>

        <label >Email</label>
        <input type='email' name='user_email' className='form-control'/>

        <label>Message</label>
        <textarea name='message'row="4" className='form-control'/>
        <input 
        type="submit" 
        name='send' 
        className="form-control btn btn-primary"
        style={{marginTop:"30px"}}/>
      </form>

      </div> */}





 {/* style="background-image: url('images/bg_1.jpg')" */}
    {/* <div className="container">
      <div className="row align-items-end">
        <div className="col-lg-7">
          <h2 className="mb-0">Contact</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div> */}



    {/* <div className="container" onSubmit={sendEmail}>
        <div className="row">
            <div className="col-md-6 form-group">
                <label for="fname">Name</label>
                <input type="text"name='mail' id="name" className="form-control form-control-lg"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 form-group">
                <label for="eaddress">Email Address</label>
                <input type="text" name='user_mail' id="eaddress" className="form-control form-control-lg"/>
            </div>
            
        </div>
        <div className="row">
            <div className="col-md-12 form-group">
                <label for="message">Message</label>
                <textarea name='message' id="message" cols="30" rows="10" className="form-control"></textarea>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <input type="submit" name='submit' value="submit" className="btn btn-primary btn-lg px-5"/>
            </div>
        </div>
    </div> */}
{/* </div> */}
<Footer/>
 </>
   )
}

export default Contact
