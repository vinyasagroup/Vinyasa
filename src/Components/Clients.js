import React from 'react'

function Clients() {
  return (
    <div>
       <div className="client-ares">
        <div className="container">
            <h2 className="client-part">Our <span> Clients</span></h2>
            <section className="logo-areaslider">
                <div className="slide"><img src="images/img1.png" alt=""></img></div>
                <div className="slide"><img src="images/img2.png" alt=""></img></div>
                <div className="slide"><img src="images/img3.png" alt=""></img></div>
                <div className="slide"><img src="images/img1.png" alt=""></img></div>
                <div className="slide"><img src="images/imag2.png" alt=""></img></div>

            </section>
        </div>
    </div>
    
    </div>
  )
}

export default Clients


{/* <html lang="en">
<head>
    <meta charSet="UTF-8"></meta>
    <title>how to use slick</title>
    </link>
    <link rel="stylesheet" href="style.css"></link>
</head>
<body>
    <div className="client-ares">
        <div className="container">
            <h2 className="client-part">Our <span> Clients</span></h2>
            <section className="logo-areaslider">
                <div className="slide"><img src="" alt=""></img></div>
                <div className="slide"><img src="" alt=""></img></div>
                <div className="slide"><img src="" alt=""></img></div>
                <div className="slide"><img src="" alt=""></img></div>
                <div className="slide"><img src="" alt=""></img></div>

            </section>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>
    <script>
        $(document).ready(function () {
            $('. logo-area').slick({
                slidesToShow:6,
                slidesToSchool: 1,
                autoplay:true,
                autoplayspeed: 500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive:[{
                    breakpoint:768,
                    settings:{
                        slidesToShow:4
                    }

                    }, {
                        breakpoint:520,
                        settings: {
                            slidesToShow: 3
                        }
                }]
            })
            
        })
    </script>
</body>
</html> */}