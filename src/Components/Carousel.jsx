import Carousel from "react-bootstrap/Carousel";
import MediaQuery from 'react-responsive'
import banner1 from "../assets/banner1.png";
import banner2  from "../assets/banner2.png"
import banner3  from "../assets/banner3.jpg"
import banner4  from "../assets/banner4.jpeg"
import banner5  from "../assets/banner5.jpeg"

function UncontrolledExample() {
  return (
    <Carousel  >
      <Carousel.Item>
      <MediaQuery minWidth={1224}>
        <img style={{"height": "50vh"}} className="d-block w-100" src={banner1} alt="First slide" />
      </MediaQuery>
        <MediaQuery maxWidth={1224}>
        <img  className="d-block w-100" src={banner1} alt="First slide" />
        </MediaQuery>
      </Carousel.Item>
      <Carousel.Item >

      <MediaQuery minWidth={1224}>
        <img style={{"height": "50vh"}} className="d-block w-100" src={banner2} alt="First slide" />
      </MediaQuery>
        <MediaQuery maxWidth={1224}>
        <img  className="d-block w-100" src={banner2} alt="First slide" />
        </MediaQuery>
      </Carousel.Item>
      <Carousel.Item>
      <MediaQuery minWidth={1224}>
        <img style={{"height": "50vh"}} className="d-block w-100" src={banner3} alt="First slide" />
      </MediaQuery>
        <MediaQuery maxWidth={1224}>
        <img  className="d-block w-100" src={banner3} alt="First slide" />
        </MediaQuery>

      </Carousel.Item>
      <Carousel.Item>
      <MediaQuery minWidth={1224}>
        <img style={{"height": "50vh"}} className="d-block w-100" src={banner4} alt="First slide" />
      </MediaQuery>
        <MediaQuery maxWidth={1224}>
        <img  className="d-block w-100" src={banner4} alt="First slide" />
        </MediaQuery>

      </Carousel.Item>
      <Carousel.Item>
      <MediaQuery minWidth={1224}>
        <img style={{"height": "50vh"}} className="d-block w-100" src={banner5} alt="First slide" />
      </MediaQuery>
        <MediaQuery maxWidth={1224}>
        <img  className="d-block w-100" src={banner5} alt="First slide" />
        </MediaQuery>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
