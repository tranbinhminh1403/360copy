import { Col, Row } from 'antd'
import ContactContent from './content'
import contactImage from '../../assets/contactIntro.png'
import DisplayImage from '../common/displayImage'
import styles from './styles.module.scss'
import AnimatedSection from '../common/animation'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Row>
        <Col xs={0} md={24} lg={15}>

            <div className={styles.contactImage}>
              <DisplayImage image={contactImage} alt='contact' height={620}/>
            </div>

        </Col>
        <Col xs={24} md={24} lg={9}>
          <div className={styles.contactContent}>
            <AnimatedSection animation="fade-up">
              <ContactContent />
            </AnimatedSection>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact