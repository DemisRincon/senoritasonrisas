import React from 'react'
import styles from '../styles/Services.scss'
const MiniGallery = ({ data }) => {
    return (
        <div className={styles.ServicesContainer}>
            <div className={styles.TitleContainer}>
                <div className={styles.Title}>
                    <img src={data.titleImage} />
                </div>
                <div className={styles.Subtitle}>
                    <h3>
                        {data.titleText}
                    </h3>
                </div>
            </div>
            <div className={styles.CollectionContainer}>

                {data.list.map(item => {
                    return (
                        <div className={styles.ElementGallery} key={item.title}>

                            <div className={styles.ImageContainer}>
                                <img src={item.image} />
                            </div>
                            <div className={styles.Title}>{item.title}</div>
                            <div className={styles.Body}>{item.body}</div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MiniGallery
