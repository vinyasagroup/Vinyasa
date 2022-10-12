import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    
<div className="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <p className="mb-4"><img src="images/logo.png" alt="" className="img-fluid"/></p>
        <p>We are a digital transformation consultancy and softawre development company , that provides cutting edge engineering solutions, helping enterprise clients untangle complex issues that always emerge during their digital evolution journey. Since  2016 we have been a visionary and a reliable software engineering partner for world-class brands.</p>  
        
      </div>
      <div className="col-lg-3">
        <h3 className="footer-heading"><span>Our Company</span></h3>
        <ul className="list-unstyled">
        <li><Link to='/nxt' className='list-link'  >About US</Link></li>
        <li><Link to='/userservice' className='list-link'  >User Service</Link></li>
        <li><Link to='/contact' className='list-link'  >Contact us</Link></li>

            
            
        </ul>
      </div>
      <div className="col-lg-3">
          <h3 className="footer-heading"><span>Our Services</span></h3>
          <ul className="list-unstyled">
              <li>Mobile Application</li>
              <li>Application development</li>
              <li>project mangment and process</li>
              <li>E-commerce website </li>
              
          </ul>
      </div>
      <div className="col-lg-3">
          <h3 className="footer-heading"><span>Contact</span></h3>
          <ul className="list-unstyled"> 
              <li>Help Center</li>
              <li>Support Communication</li>
             
           </ul>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <div className="copyright">
          <p className="text-center text-md-end text-xl-start"> 
           ©2022 All Rights Reserved.Vinyasa
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer
