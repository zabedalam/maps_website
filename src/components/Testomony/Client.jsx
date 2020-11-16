import React from 'react'
import Slider from "infinite-react-carousel"
import Overlay from "./Overlay"
import ClientCard from "./ClientCard"
import ClientOneBg from '../../assets/pics/zabed_pic.jpg'
import { Container } from 'reactstrap'



function Client({clientImg,clientName}) {
    return (
        <>
         <div className="client">
             {/* <Overlay/> */}
             <h2>CLIENT SAYS</h2>
             {/* <Container> */}
                 <Slider autoplay autoplaySpeed={2000}>
                     <ClientCard clientImg={ClientOneBg}/>
                     <ClientCard clientImg={ClientOneBg}/>
                     <ClientCard clientImg={ClientOneBg}/>
                     <ClientCard clientImg={ClientOneBg}/>

                 </Slider>
             {/* </Container> */}
             </div>   
        </>
    )
}

export default Client
