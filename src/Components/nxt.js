import React from 'react'
import Section1 from './Section1'
import Footer from './Footer'
function Next() {
  return (
    <>
   <Section1/>
   <div class="site-section ftco-subscribe-1 site-blocks-cover pb-4" >
   
  </div>
   {/* <div class="custom-breadcrumns border-bottom">
  <div class="container">
    <a href="index.html">Home</a>
    <span class="mx-3 icon-keyboard_arrow_right"></span>
    <span class="current">Courses</span>
  </div>
</div> */}
<div class="custom-breadcrumns border-bottom">
  <div class="container">
    <a href="/user">Home</a>
    <span class="mx-3 icon-keyboard_arrow_right"></span>
    <span class="current">About</span>
  </div>
</div>

   <div className="section-bg style-1" >
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <h2 className="section-title-underline style-2">
          <span>About Our Company</span>
        </h2>
      </div>
      <div className="col-lg-8">
        <p className="lead">We are a digital transformation consultancy and softawre development company , that provides cutting edge engineering solutions, helping enterprise clients untangle complex issues that always emerge during their digital evolution journey. Since  2016 we have been a visionary and a reliable software engineering partner for world-class brands.</p>
        <p>The project from beegining to en, we have serve the best quality at a specific time.Timely delivery is the hallmark of our company.It has grown continously with the spirit of learning an adapting towars the changing and challenging times.</p>
        <p><a href="#">Read more</a></p>
      </div>
    </div>
  </div>
</div>

   <Footer/>
   </>
 )
}

export default Next
