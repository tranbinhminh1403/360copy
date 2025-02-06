import avatar1 from '../../../assets/avatar/avatar1.png'
import avatar2 from '../../../assets/avatar/avatar2.png'
import avatar3 from '../../../assets/avatar/avatar3.png'
import DisplayImage from '../../common/displayImage'
import styles from './styles.module.scss'


const AvatarGroup = () => {
  return (
    <div className={styles.avatarGroup}>
        <div className={styles.avatarItem}>
            <DisplayImage image={avatar1} alt='avatar1' />
        </div>
        <div className={styles.avatarItem}>
            <DisplayImage image={avatar2} alt='avatar2' />
        </div>
        <div className={styles.avatarItem}>
            <DisplayImage image={avatar3} alt='avatar3' />
        </div>
    </div>
  )
}

export default AvatarGroup