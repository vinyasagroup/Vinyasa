import React from 'react'

function Service() {
  return (
<div className="site-section">
  <div className="container">


    <div className="row mb-5 justify-content-center text-center">
      <div className="col-lg-6 mb-5">
        <h2 className="section-title-underline mb-3">
          <span>Our Services</span>
        </h2>
        <p>We provide Web site designing services to a number of companies and organization.</p>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
          <div className="owl-slide-3 owl-carousel">
              <div className="course-1-item">
                <figure className="thumnail">
                  <a href="course-single.html"><img src="images/course_1.jpg" alt="" className="img-fluid"/></a>
                  
                  <div className="category"><h3>Web site Development</h3></div>  
                </figure>
                <div className="course-1-content pb-4">
                  <h2>Create and control your web identity with an enviable website</h2>
                  
                  <p className="desc mb-4">We do custom design ,Development,E-Commerce website and website annual maintance with delightful digital experiences.</p>
                  {/* <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Enroll In This Course</a></p> */}
                </div>
              </div>
  
              <div className="course-1-item">
                <figure className="thumnail">
                  <a href="course-single.html"><img src="images/course_2.jpg" alt="" className="img-fluid"/></a>
                  
                  <div className="category"><h3>Mobile Application</h3></div>  
                </figure>
                <div className="course-1-content pb-4">
                  <h2>How To Create Mobile Apps Using Ionic</h2>
                  
                  <p className="desc mb-4">You thinnk creative and we will implement your imagination live on mobile applications</p>
                  {/* <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Enroll In This Course</a></p> */}
                </div>
              </div>
  
              <div className="course-1-item">
                <figure className="thumnail">
                  <a href="course-single.html"><img src="images/course_3.jpg" alt="" className="img-fluid"/></a>
                  
                  <div className="category"><h3>UX & UI Designs</h3></div>  
                </figure>
                <div className="course-1-content pb-4">
                  <h2> </h2>
                  
                  <p className="desc mb-4">We make your website more attractive by creating beautiful and stunning user interface designs with latest technology which is consistent across web, tablet and mobile platforms.</p>
                  {/* <p><a href="courses-single.html" className="btn btn-primary rounded-0 px-4">Enroll In This Course</a></p> */}
                </div>
              </div>

              
  
       
          </div>
  
      </div>
    </div>

    
    
  </div>
</div>

  )
}

export default Service
