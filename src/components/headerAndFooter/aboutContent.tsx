import styles from './styles.module.scss'
import { aboutContent } from './data'
const AboutContent = () => {
  return (
<div className={styles.docContent}>
      <div className={styles.docContentTitle}>
        <p>Về chúng tôi</p>
      </div>

      <div className={styles.docContentList}>
        {aboutContent.map((item, index) => (
          <div className={styles.docContentItem} style={{gap: '20px'}} key={index}>
            <p className={styles.docContentItemTitle}>{item.id}. {item.title}</p>
            <p className={styles.docContentItemDesc}>{item.desc}</p>
            <a className={styles.docContentItemLink} href={item.link} target="_blank" rel="noopener noreferrer">
              Xem giới thiệu về {item.name}
            </a>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutContent