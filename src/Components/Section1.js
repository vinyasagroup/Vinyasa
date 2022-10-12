import React from 'react'
import { Link } from 'react-router-dom'
function Section1() {
  return (
    <div className="site-wrap">

    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>


    {/* <div className="py-2 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9 d-none d-lg-block">
            <a href="#" className="small mr-3"><span className="icon-question-circle-o mr-2"></span> Have a questions?</a> 
            <a href="#" className="small mr-3"><span className="icon-phone2 mr-2"></span> 10 20 123 456</a> 
            <a href="#" className="small mr-3"><span className="icon-envelope-o mr-2"></span> www.vinyasagroup.com</a> 
          </div>
          <div className="col-lg-3 text-right">
            <a href="login.html" className="small mr-3"><span className="icon-unlock-alt"></span> Log In</a>
            <a href="register.html" className="small btn btn-primary px-4 py-2 rounded-0"><span className="icon-users"></span> Register</a>
          </div>
        </div>
      </div>
    </div> */}
    <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
    <div className="container">
        <div className="d-flex align-items-center">
          <div className="site-logo">
            <a href="/user" className="d-block">
              <img src="images/logo.jpg" alt="" className="img-fluid"/>
            </a>
          </div>

          <div className="mr-auto">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className="active">
                {/* <Link to="/user" className='nav-link text-left'>Home</Link> */}
                  <a href="/user" className="nav-link text-left">Home</a>
                </li>
                <li><Link to='/nxt' className='list-link'  >About US</Link></li>
                <li><Link to='/userservice' className='list-link'  >Services</Link></li>
                <li><Link to='/contact' className='list-link'  >Contact</Link></li>


                {/* <li>
                  <a href="/nxt" className="nav-link text-left">About Us</a>
                  {/* <ul className="dropdown">
                    <li><a href="teachers.html">Our company</a></li>
                    <li><a href="/nxt">Our School</a></li>
                  </ul> */}
                {/* </li>  */}
                {/* <li>
                  <a href="/userservice" className="nav-link text-left">Services</a>
                </li>
                <li>
                  <a href="courses.html" className="nav-link text-left">Courses</a>
                </li>
                <li>
                    <a href="/contact" className="nav-link text-left">Contact</a>
                  </li> */}
              </ul>  </nav> 
                                                                                                                                                                                                                                                                                                     
        </div>
        <div className="ml-auto">
            <div className="social-wrap">
              <a href="https://www.facebook.com/vinyasagroup/"><span className="icon-facebook"></span></a>
              <a href="https://www.instagram.com/invites/contact/?i=19709z6fxv1sd&utm_content=2ktd7fm"><span className="icon-instagram"></span></a>
              <a href="https://goo.gl/maps/Wpy3BVXDQ7sj5szt9"><span className="icon-google"></span></a>

              <a href="/Section1" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a>
            </div>
          </div>
         </div>
          </div>
      </header>
      </div>

   

  )
}

export default Section1
