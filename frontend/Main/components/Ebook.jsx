import React from 'react'
import styles from '../styles/Ebook.scss'
const Ebook = () => {
    return (
        <div className={styles.EbookPageContainer}>
            <div className={styles.ImageContainer}>
<img src="/images/book.jpg" />
            </div>
            <div className={styles.TextContainer}>
                <div className={styles.TitleContainer}>
                    <h2>
                        Descarga GRATIS mi Ebook para tener un buen día
                </h2>
                </div>
                <div className={styles.BodyContainer}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quasi, omnis debitis sapiente illum eaque animi eveniet eius esse, commodi qui consectetur saepe enim quaerat vel quisquam minima dignissimos quos.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Ebook
