import SimpleImageSlider from "react-simple-image-slider";
import "./_imageSlider.scss";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Container from "../container";
// import logo from "../../assets/images/freeSupport.png";

const images = [
  {
    url: "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2018/09/12/41881-urdu-20180221052826.jpg",
  },
  //   { url: "https://www.ritiriwaz.com/wp-content/uploads/2021/08/Urdu.jpg" },

  //   {
  //     url: "https://thediplomat.com/wp-content/uploads/2021/05/sizes/td-story-s-2/thediplomat-2021-05-20-4.jpg",
  //   },
  {
    url: "https://images.thequint.com/thequint%2F2020-11%2F215afc5f-5488-4510-ada2-574429e2f03a%2F1__5_.jpg?rect=0%2C0%2C2000%2C1125",
  },
  { url: "https://i.dawn.com/primary/2019/04/5cb58f0b5a65f.jpg" },

  //   { url: "images/7.jpg" },
];

const ImageSlider = () => {
  return (
    <div
      style={{
        marginTop: "10rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SimpleImageSlider
        width={"100%"}
        //   style={{ borderRadius: "8px!important" }}
        height={500}
        style={{ objectFit: "contain" }}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={0.2}
      />
    </div>
  );
};

export default ImageSlider;

// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Zoom scale={0.4}>
//         {images.map((each, index) => (
//           <img alt="" key={index} style={{ width: "100%" }} src={each} />
//         ))}
//       </Zoom>
//     </div>
//   );
// };

// export default Slideshow;
