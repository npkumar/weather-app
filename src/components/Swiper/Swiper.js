import React from "react";
import PropTypes from "prop-types";
import SwiperCore, { Navigation } from "swiper";
import { Swiper as SwiperOriginal, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.scss";
import "../../../node_modules/swiper/components/navigation/navigation.scss";

import "./Swiper.module.scss";
import { useApplication } from "../../services/Application";

// Install Swiper components
SwiperCore.use([Navigation]);

const Swiper = ({ children }) => {
  const { setIndex } = useApplication();
  return (
    <SwiperOriginal
      watchOverflow
      navigation
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={(e) => setIndex(e.activeIndex)}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </SwiperOriginal>
  );
};

Swiper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Swiper;
