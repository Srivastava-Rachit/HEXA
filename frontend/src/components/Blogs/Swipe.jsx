import React from "react";
import Slider from "react-slick";
import BlogCard from "./BlogCard";
import ImgBlog from "../../assets/blog1.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-purple-700 transition-all`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span className="material-icons">arrow_forward</span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-purple-700 transition-all`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span className="material-icons">arrow_back</span>
    </div>
  );
}

const Swipe = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    mobileFirst: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container px-10 py-10">
      <h1 className="mb-8 inline-block border-l-8 border-purple-500 py-2 pl-2 text-center text-3xl font-bold
       text-purple-400">
        Explore
      </h1>
      <Slider {...settings}>
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <BlogCard Img1={ImgBlog} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Swipe;
