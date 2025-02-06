import React from 'react'
import CellIntro from './cell'
import passportIcon from '../../assets/servicesAd/passport.png'
import stackIcon from '../../assets/servicesAd/stack.png'
import courtIcon from '../../assets/servicesAd/court.png'
import informationIcon from '../../assets/servicesAd/information.png'
import noteIcon from '../../assets/servicesAd/note.png'
import buildingIcon from '../../assets/servicesAd/building.png'
import styles from './styles.module.scss'
import CommonButton from '../common/commonButton'
import { scrollToElement } from '../../utils'

const Service = () => {

  const serviceList = [
    { image: passportIcon, title: "Tiết kiệm thời gian và chi phí", description: "Máy móc tư động hóa quy trình, giải quyết nhanh chóng các vấn đề pháp lý." },
    { image: stackIcon, title: "Tiếp cận chuyên gia hàng đầu", description: "Đội ngũ chuyên gia giàu kinh nghiệm, luôn sẵn sàng giải đáp mọi thắc mắc." },
    { image: courtIcon, title: "Cá nhân hóa dịch vụ", description: "Tư vấn phù hợp với nhu cầu đặc thù của từng khách hàng." },
    { image: informationIcon, title: "Bảo mật thông tin", description: "Quy trình đảm bảo bí mật tối đa cho khách hàng." },
    { image: noteIcon, title: "Cập nhập thông tin nhanh chóng", description: "Các thay đổi về quy định, thủ tục được cập nhập ngay lập tức." },
    { image: buildingIcon, title: "Hỗ trợ toàn diện", description: "Từ tư vấn đến giải quyết tranh chấp và đại diện tại tòa án" },
  ]

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.header}>
        <p className={styles.title}>Trải nghiệm tốt hơn</p>
        <p className={styles.description}>Tiện lợi, nhanh chóng khi sử dụng dịch vụ của chúng tôi</p>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${styles.grid}`}>
        {serviceList.map((item, index) => (
          <CellIntro
            key={index}
            {...item}
            isLastInRow={(index + 1) % 3 === 0}
            isLastRow={index >= serviceList.length - 3}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <CommonButton content="Nói chuyện với chuyên gia" onClick={() => scrollToElement('planning')} />
      </div>
    </div>
  )
}

export default Service