import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Discovery.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import four from "../images/4.jpg";
import CarouselCard from "../components/CarouselCard";

const carouselItems = [
  {
    imageSrc: one,
    title: "Neque porro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    imageSrc: two,
    title: "Quisquam est",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    imageSrc: four,
    title: "Dolorem ipsum quia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
];

const Discovery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCarouselSlide = (direction) => {
    if (direction === "prev") {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length);
    } else {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }
  };

  return (
    <div id="discovery" className="discovery-container">
      <div className="discovery-trending">
        <div className="discovery-trending-header">
          <h4 className="fw-bold">TRENDING</h4>
          <div className="home-two-icon">
            <span className="btn" onClick={() => handleCarouselSlide("prev")}>
              <KeyboardArrowLeftIcon />
            </span>
            <span className="btn" onClick={() => handleCarouselSlide("next")}>
              <KeyboardArrowRightIcon />
            </span>
          </div>
        </div>
        <div className="discovery-trending-cards">
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              className="discovery-trending-carousel d-flex"
              initial={{ x: 0 }}
              animate={{ x: `${index - currentSlide}0%` }}
            >
              <CarouselCard
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discovery;
