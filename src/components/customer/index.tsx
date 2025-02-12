 
import TitleCard from "./titleCard";
import styles from "./styles.module.scss";
import { Carousel } from "antd";
import { useWindowSize } from "../../hooks/useWindowSize";

import customer1 from "../../assets/tc1.jpg";
import customer2 from "../../assets/tc2.jpg";
import customer3 from "../../assets/tc3.jpg";
import customer4 from "../../assets/tc4.jpg";
import AnimatedSection from "../common/animation";

// const mockDesc = 'Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque. Eleifend elit.'

const Customer = () => {
  const [width] = useWindowSize();

  const getSlidesToShow = () => {
    if (width <= 768) return 1;
    if (width <= 992) return 2;
    return 4;
  };

  const titleCardList = [
    {
      image: customer1,
      name: "Đỗ Hải Long",
      rating: 5,
      description:
        "Đang cần hỗ trợ, chưa biết hỏi ai thì may quá đã được hỗ trợ giải đáp kịp thời. Nhờ đó mình đã giải quyết được vấn đề của mình. Cảm ơn các bạn rất nhiều.",
    },
    {
      image: customer2,
      name: "Đinh Mai Hương",
      rating: 5,
      description:
        "Nhờ có sự hỗ trợ giải đáp tận tình của laodong360 mà thời gian tra cứu thông tin của mình được rút ngắn, tìm kiếm có chọn lọc. Giải quyết vấn đề nhanh hơn hẳn.",
    },
    {
      image: customer4,
      name: "Trịnh Phương Tuấn",
      rating: 5,
      description: "Giải đáp dễ hiểu, tận tình, nhiệt tình và nhanh chóng",
    },
    {
      image: customer3,
      name: "Nguyễn Ngọc Mai",
      rating: 5,
      description:
        "Nhờ hỗ trợ giải đáp thắc mắc mấy lần rồi. Lần nào cũng thật sự hài lòng luôn. Mọi người nên thử nha.",
    },
  ];

  return (
    <div className={styles.customerContainer}>
      <div className={styles.title}>
        <p className={styles.titleCustomer}>Khách hàng</p>
        <p className={styles.titleAbout}>Nói về chúng tôi</p>
      </div>
      <div className={styles.titleCardContainer} style={{width: width}}>
        <Carousel
          className={styles.carousel}
          slidesToShow={getSlidesToShow()}
          slidesToScroll={getSlidesToShow()}
          dots={false}
          autoplay={width >= 992 ? false : true}
          autoplaySpeed={2000}
        >


          {titleCardList.map((item, index) => (
            <div key={index} className={styles.titleCardItem} style={{ padding: '0 10px' }}>
              {width >= 992? (
                <AnimatedSection
                  animation={index % 2 === 0 ? "fade-up" : "fade-down"}
                >
                <TitleCard {...item} />
                </AnimatedSection>
              ) : (
                <TitleCard {...item} />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Customer;
