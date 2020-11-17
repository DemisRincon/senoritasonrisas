import React from 'react'
import styles from '../styles/Main.scss'
import AboutMe from './AboutMe'
import Header from './header'
import MiniGallery from './MiniGallery'
import servicesData from '../constants/services.json'
import storeDara from '../constants/store.json'
import Ebook from './Ebook'
const MainComponent = () => {
    return (
        <div className={styles.Main}>
            <Header />
            <AboutMe />
            <MiniGallery data={servicesData}/>
            <Ebook />
            <MiniGallery data={storeDara}/>
        </div>
    )
}

export default MainComponent
