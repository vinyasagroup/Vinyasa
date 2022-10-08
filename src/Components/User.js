import React from 'react'
import Section1 from './Section1'
import Slider from './Slider'
import Work from './Work'
import Service from './Service'
import About from './about'
// import Test from './testinomials'
import Section from './Section'
// import Clients from './Clients'
// import News from './News'
// import Sub from './Sub'
import Footer from './Footer'
function User() {
  return (
    <>
      <Section1/>
      <Slider/>
      <Work/>
      <About/>

      <Service/>
      {/* <Test/> */}
      <Section/>
      {/* <Clients/> */}

      {/* <News/> */}
      {/* <Sub/> */}
      <Footer/>
    </>
  )
}

export default User
