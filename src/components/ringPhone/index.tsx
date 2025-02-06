import styles from './styles.module.scss'
import RingPhoneIcon from './../../assets/ringPhone.png'
import DisplayImage from '../common/displayImage';

const RingPhone = () => {
  return (
    <div className={styles.callButton}>
      <a href="tel:0353352388" className={styles.callLink}>
        <div className={styles.callIcon}>
          <DisplayImage image={RingPhoneIcon} alt="Số điện thoại" height={20} />
        </div>
        <span>0353352388</span>
      </a>
    </div>
  );
};

export default RingPhone