
import React from 'react'
import styles from '../styles/Header.module.css'

export default function  Navbar() {
 

  return (
    <nav className={styles.navbar}>
    <div className={styles.nav}>
        <img src="img/dark-logo.png" className={styles.brand_logo} alt="">
        <div className={styles.nav_items}>
            <div cclassName={styles.search}>
                <input type="text" className={styles.search_box} placeholder="search brand, product">
                <button className={styles.search_btn}>search</button>
            </div>
            <a href="#"><img src="img/user.png" alt=""></a>
            <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
    </div>
    </nav>
  )
};

