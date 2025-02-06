import { Carousel } from "antd";
import React from "react";
import styles from './styles.module.scss'
//import banner image
import banner2 from "../../assets/banner/banner2.png";
import DisplayImage from "../common/displayImage";
import OverallDesc from "./overallDesc";
import { useWindowSize } from "../../hooks/useWindowSize";
const Banner = () => {
  const [width] = useWindowSize();
  return (
    <div className={styles.bannerContainer}>
      <OverallDesc />
      <Carousel infinite className={styles.bannerCarousel} dots={false}>
        <div className={styles.bannerItem}>
          <DisplayImage height={width > 1200 ? 500 : 'auto'} image={banner2} alt="banner" />
        </div>
        <div className={styles.bannerItem}>


          <DisplayImage height={width > 1200 ? 500 : 'auto'} image={banner2} alt="banner" />

        </div>
        <div className={styles.bannerItem}>
          <DisplayImage height={width > 1200 ? 500 : 'auto'} image={banner2} alt="banner" />
        </div>

        <div className={styles.bannerItem}>
          <DisplayImage height={width > 1200 ? 500 : 'auto'} image={banner2} alt="banner" />
        </div>
      </Carousel>



    </div>
  );
};

export default Banner;
