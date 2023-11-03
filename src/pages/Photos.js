import React, { useState } from 'react';
import '../styles/Photos.css';
import { motion } from 'framer-motion';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import five from '../images/5.jpg';
import six from '../images/6.jpg';
import seven from '../images/7.jpg';
import CarouselCard from '../components/CarouselCard';

const largeCarouselItems = [
  {
    imageSrc: five,
    title: 'Neque porro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    imageSrc: seven,
    title: 'Quisquam est',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
];

const smallCarouselItems = [
  {
    imageSrc: seven,
    title: 'Dolorem ipsum quia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    imageSrc: six,
    title: 'Quisquam est',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    imageSrc: five,
    title: 'Quisquam est',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
 
];

const Photos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCarouselSlide = (direction) => {
    if (direction === 'prev') {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + largeCarouselItems.length) % largeCarouselItems.length);
    } else {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % largeCarouselItems.length);
    }
  };

  return (
    <div id='photos' className="photos-container">
      <div className="photos-happening">
        <div className="photos-happening-header">
          <h4 className="fw-bold">HAPPENING NOW</h4>
          <div className="home-two-icon">
            <span className="btn" onClick={() => handleCarouselSlide('prev')}>
              <KeyboardArrowLeftIcon />
            </span>
            <span className="btn" onClick={() => handleCarouselSlide('next')}>
              <KeyboardArrowRightIcon />
            </span>
          </div>
        </div>
        <div className="photos-happening-cards">
          <div className="photos-happening-cards-one">
            {largeCarouselItems.map((item, index) => (
              <motion.div
                key={index}
                className="photos-happening-carousel d-block"
                initial={{ x: 0 }}
              >
                <CarouselCard
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
          <div className="photos-happening-cards-two">
            {smallCarouselItems.map((item, index) => (
              <motion.div
                key={index}
                className="photos-happening-carousel d-block"
                initial={{ x: 0 }}
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
    </div>
  );
};

export default Photos;
