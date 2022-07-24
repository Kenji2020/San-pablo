import Carousel from "../Components/Carousel";
import MediaQuery from 'react-responsive'
import ReactPlayer from "react-player";
import preu from "../assets/preu.jpg"
const Inicio = () => {
  return (
    <>
      <div className="text-center ">
        <Carousel />
      </div>

      {/* botones */}

      <div className="bgVideos">
      <div className="d-flex flex-lg-row flex-column">
      {/* media grande */}
      <MediaQuery minWidth={1224}>
      <div className="m-auto  my-5">
        <ReactPlayer
          classname=""
          url="https://www.youtube.com/watch?v=FhAv8u0u6Gc&ab_channel=CanalYoutubeIspm"
          width="40rem"
          height="20rem"
        />

      </div>
      <div className=" m-auto my-5">
        <ReactPlayer
          classname=""
          url="https://www.youtube.com/watch?v=FhAv8u0u6Gc&ab_channel=CanalYoutubeIspm"
          width="40rem"
          height="20rem"
        />

      </div>
      </MediaQuery>
      {/* fin media grande */}
      <MediaQuery maxWidth={1224}>

      <div className="m-auto  my-5">
        <ReactPlayer
          classname=""
          url="https://www.youtube.com/watch?v=FhAv8u0u6Gc&ab_channel=CanalYoutubeIspm"
          width="100%"
          height="100%"
        />

      </div>
      <div className=" m-auto my-5">
        <ReactPlayer
          classname=""
          url="https://www.youtube.com/watch?v=FhAv8u0u6Gc&ab_channel=CanalYoutubeIspm"
          width="100%"
          height="100%"
        />

      </div>

      </MediaQuery>

      </div>
      </div>
      {/* botones */}
      <div className="bgBotones  text-center d-flex flex-md-row flex-column">
        <button className="m-5"><img src={preu} className="w-100" alt="enlace 1"/></button>
        <button className="m-5"><img src={preu} className="w-100" alt="enlace 1"/></button>
        <button className="m-5"><img src={preu} className="w-100" alt="enlace 1"/></button>
        <button className="m-5"><img src={preu} className="w-100" alt="enlace 1"/></button>
      </div>
    </>
  );
};

export default Inicio;
