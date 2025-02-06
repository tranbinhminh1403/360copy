 
import { services } from "./services";
import Services from "../services";
// import { Carousel } from "antd";
import styles from "./styles.module.scss";
// import prevArrow from "./../../../assets/customeCarousel/prevArrow.png"
// import nextArrow from "./../../../assets/customeCarousel/nextArrow.png"
// import DisplayImage from "../../common/displayImage";
// import AnimatedSection from "../../common/animation";

const CardsCarousel = () => {
  // const SampleNextArrow = (props: any) => {
  //   const { onClick } = props;
  //   return (
  //     <div className={styles.nextArrow} onClick={onClick}>
  //       <DisplayImage image={nextArrow} alt="next" width={40} pointer={true}/>
  //     </div>
  //   );
  // };

  // const SamplePrevArrow = (props: any) => {
  //   const { onClick } = props;
  //   return (
  //     <div className={styles.prevArrow} onClick={onClick}>
  //       <DisplayImage image={prevArrow} alt="previous" width={40} pointer={true}/>
  //     </div>
  //   );
  // };

  return (

      <div className={styles.cardsCarousel}>
            {/* <AnimatedSection animation="fade-down"> */}
        {/* <Carousel 
          infinite 
          arrows={true}
          dots={false}
          nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      > */}
        <Services services={services} />
        {/* <Services services={services} />
        <Services services={services} />
        <Services services={services} /> */}
      {/* </Carousel> */}
      {/* </AnimatedSection> */}
    </div>

  );
};

export default CardsCarousel;
