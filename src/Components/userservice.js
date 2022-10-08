import React from 'react'
import Section1 from './Section1'
import Footer from './Footer'
function Userservice() {
  return (
    <>
    <Section1/>

    <div class="site-section ftco-subscribe-1 site-blocks-cover pb-4" >
   
   </div>
  
  <div class="custom-breadcrumns border-bottom">
  <div class="container">
    <a href="index.html">Home</a>
    <span class="mx-3 icon-keyboard_arrow_right"></span>
    <span class="current">Services</span>
  </div>
</div>

  <div className="site-section">
  <div className="container">


    <div className="row mb-5 justify-content-center text-center">
      <div className="col-lg-6 mb-5">
        <h2 className="section-title-underline mb-3">
          <span>Our Services</span>
        </h2>        <p>We Provide you the best Technological Solutions!</p>

      </div>
    </div>

    <div className="row">
      <div className="col-12">
          <div className="owl-slide-3 owl-carousel">
              <div className="course-1-item">
                <figure className="thumnail">
                  <a href="course-single.html"><img src="images/Designing.jpg" alt="" className="img-fluid"/></a>
                  
                  <div className="category"><h3>Web Design </h3></div>  
                </figure>
                <div className="course-1-content pb-4">
                  
                  <p className="desc mb-4">We help your businesses grow and suceed online. Your website is the prime equipment that drives your business. We have expertise to develop website using angular js, javascript, node js, etc.</p>
                </div>
              </div>
  
              <div className="course-1-item">
                <figure className="thumnail">
                  <a href="course-single.html"><img src="images/development.jpg" alt="" className="img-fluid"/></a>
                  
                  <div className="category"><h3>Mobile Application</h3></div>  
                </figure>
                <div className="course-1-content pb-4">
                 
                  <p className="desc mb-4">We architect, design, develop mobile applications for android, ios and windows platforms. We have expertise in developing mobile application using android studio, ionic and xcode.</p>
                  <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Enroll In This Course</a></p>
                </div>
              </div>
              <div className="course-1-item">
                <figure className="thumnail">
                  <a href="course-single.html"><img src="images/course_3.jpg" alt="" className="img-fluid"/></a>
                  
                  <div className="category"><h3>UX & UI Designs</h3></div>  
                </figure>
                <div className="course-1-content pb-4">
                  <h2></h2>
                  
                  <p className="desc mb-4">We make your website more attractive by creating beautiful and stunning user interface designs with latest technology which is consistent across web, tablet and mobile platforms.</p>
                  {/* <p><a href="courses-single.html" className="btn btn-primary rounded-0 px-4">Enroll In This Course</a></p> */}
                </div>
              </div>
  
              {/* <div className="course-1-item">
                <figure className="thumnail">
                  <a href="course-single.html"><img src="images/Online service.jpg" alt="" className="img-fluid"/></a>
                  
                  <div className="category"><h3>Online Service</h3></div>  
                </figure>
                <div className="course-1-content pb-4">
                  
                  <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                  <p><a href="courses-single.html" className="btn btn-primary rounded-0 px-4">Enroll In This Course</a></p>
                </div>
              </div> */}

            
              
  
          </div>
  
      </div>
    </div>

    
    
  </div>
</div>


     <Footer/> 
</> 
  )
}

export default Userservice
