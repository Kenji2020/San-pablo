import Carousel from "../Components/Carousel";
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
      <div className="d-flex flex-md-row flex-column">

      <div className="m-auto  my-5">
        <ReactPlayer
          classname=""
          url="https://www.youtube.com/watch?v=FhAv8u0u6Gc&ab_channel=CanalYoutubeIspm"
          width="50rem"
          height="20rem"
        />

      </div>
      <div className=" m-auto my-5">
        <ReactPlayer
          classname=""
          url="https://www.youtube.com/watch?v=FhAv8u0u6Gc&ab_channel=CanalYoutubeIspm"
          width="50rem"
          height="20rem"
        />

      </div>

      </div>
      </div>

      {/* botones */}
      <div className="bgBotones  text-center d-flex flex-md-row flex-column">
        <button className="w-25"><img src={preu} className=" p-0" alt="enlace 1"/></button>
        <button className="w-25"><img src={preu} className=" p-0" alt="enlace 1"/></button>
        <button className="w-25"><img src={preu} className=" p-0" alt="enlace 1"/></button>
        <button className="w-25"><img src={preu} className=" p-0" alt="enlace 1"/></button>

      </div>
    </>
  );
};

export default Inicio;
