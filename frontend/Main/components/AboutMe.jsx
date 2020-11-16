import React from 'react'
import styles from '../styles/AboutMe.scss'
const AboutMe = () => {
    return (
        <div className={styles.AboutMeContainer}>
            <div className={styles.PresentationContainer}>
                <div className={styles.Presentation}>
                    <div className={styles.Title}>!Hola! Soy Michelle</div>
                    <div className={styles.Text}>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non unde nesciunt doloribus, vero mollitia, fuga omnis blanditiis tempore ipsa ratione debitis sed necessitatibus suscipit hic quos numquam veniam odio natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio nam eum nesciunt quam, earum numquam culpa atque quod illo ea beatae consequatur? Expedita reiciendis sed provident hic corrupti minima.
                    </p>
                    </div>
                    <div className={styles.ButtonContainer}>
                        <button>
                            Leer mas
                    </button>
                    </div>
                </div>
            </div>
            <div className={styles.ImageContainer}>
                <img src="/images/character.png" />
            </div>
        </div>
    )
}

export default AboutMe
