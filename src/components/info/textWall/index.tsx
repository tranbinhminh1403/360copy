import React from 'react'
import styles from './styles.module.scss'
import AnimatedSection from '../../common/animation'
import { useWindowSize } from '../../../hooks/useWindowSize'

const TextWall = ({infoContent, textAlign}: {infoContent: {title: string, description: string}[], textAlign: 'left' | 'right'}) => {
  const [width] = useWindowSize()

  const getTextAlign = () => {
    if (width <= 768) return 'left';
    return textAlign;
  }

  return (
    <div className={styles.textWallContainer} style={{textAlign: getTextAlign()}}>
        {infoContent.map((item, index) => (
          <AnimatedSection key={index} animation={`fade-${getTextAlign()}`}>
            <div key={index} className={styles.textWallItem} >
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item.description}</p>
            </div>
          </AnimatedSection>
        ))}

    </div>
  )
}

export default TextWall