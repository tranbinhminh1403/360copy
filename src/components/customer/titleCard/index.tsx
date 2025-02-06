import styles from './styles.module.scss'
import DisplayImage from '../../common/displayImage';
import quoteIcon from '../../../assets/avatar/quote.png';
import starIcon from '../../../assets/star.png';

const TitleCard = ({
  image,
  name,
  company,
  rating,
  description,
}: {
  image: string;
  name: string;
  company?: string;
  rating: number;
  description: string;
}) => {
  return (
    <div className={styles.titleCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
        <div className={styles.rating}>
          {[...Array(rating)].map((_, index) => (
            <DisplayImage key={index} image={starIcon} alt="star" width={14} />
          ))}
        </div>
        <hr style={{border: 'none', borderTop: '1px dashed #DDDDDD'}}/>
        <div className={styles.quoteIcon}>
          <DisplayImage image={quoteIcon} alt="quote" width={23}/>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default TitleCard