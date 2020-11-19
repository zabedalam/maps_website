import React from "react";
import Slider from "infinite-react-carousel";
import Overlay from "./Overlay";
import ClientCard from "./ClientCard";
import ClientOneBg from "../../assets/pics/zabed_pic.jpg";
import { Container } from "reactstrap";

function Client({ clientImg, clientName }) {
  return (
    <>
      <Container className="client">
        {/* <Overlay/> */}
        <h2 className="headerTitle">Client Says</h2>
        <Slider autoplay autoplaySpeed={2000}>
          <ClientCard clientImg={ClientOneBg} />
          <ClientCard clientImg={ClientOneBg} />
          <ClientCard clientImg={ClientOneBg} />
          <ClientCard clientImg={ClientOneBg} />
        </Slider>
      </Container>
    </>
  );
}

export default Client;
