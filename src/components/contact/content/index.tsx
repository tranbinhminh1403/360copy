import React from 'react'
import CommonButton from '../../common/commonButton'
import styles from './styles.module.scss'
import { scrollToElement } from '../../../utils'

const ContactContent = () => {
  return (
    <div className={styles.contactContent}>
        <p className={styles.title}>Kết nối với chúng tôi</p>
        <p className={styles.subTitle}>Chuyên gia hàng đầu</p>
        <p className={styles.description}>Với hơn 20 năm kinh nghiệm trong lĩnh vực luật lao động. Các chuyên gia của chúng tôi sẽ hỗ trợ bạn 1 cách nhanh và chính xác nhất</p>
        <div className={styles.buttonContainer}>
          <CommonButton content='Nói chuyện với chuyên gia'  onClick={() => scrollToElement('planning')}/>
        </div>
    </div>
  )
}

export default ContactContent