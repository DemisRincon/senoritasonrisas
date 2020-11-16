import React from 'react'
import styles from '../styles/Header.scss'
import menulist from '../constants/menu.json'
const Header = () => {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.LogoContainer}>
                <img src="/images/logo.png"/>
            </div>
            <div className={styles.MenuContainer}>
                {menulist.map(item=>{
                    return(
                        <div key={item.name} className={styles.MenuItem}>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Header
