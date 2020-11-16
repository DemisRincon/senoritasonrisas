import React from 'react'
import styles from '../styles/Main.scss'
import AboutMe from './AboutMe'
import Header from './header'
const MainComponent = () => {
    return (
        <div className={styles.Main}>
            <Header />
            <AboutMe />
        </div>
    )
}

export default MainComponent
