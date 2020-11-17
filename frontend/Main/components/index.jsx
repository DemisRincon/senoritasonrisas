import React from 'react'
import styles from '../styles/Main.scss'
import AboutMe from './AboutMe'
import Header from './header'
import MiniGallery from './MiniGallery'
import servicesData from '../constants/services.json'
const MainComponent = () => {
    return (
        <div className={styles.Main}>
            <Header />
            <AboutMe />
            <MiniGallery data={servicesData}/>
        </div>
    )
}

export default MainComponent
