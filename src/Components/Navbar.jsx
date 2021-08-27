import React from 'react'
import styles from "./HotelPage/style/navbar.module.css"
import travel_logo from "./HotelPage/images/travel_logo.svg"
import NavMenu from "./HotelPage/NavMenu"

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div>
                <img className={styles.navbarLogo} src={travel_logo} alt="travel_logo" />
                <NavMenu />
                <div>

                </div>
            </div>

            <ul className={styles.NavbarUl}>
                <li className={styles.navbarLi}><a className={styles.travelNavLink} href="#">Home </a> </li>
                <li className={styles.navbarLi}><a className={styles.travelNavLink} href="#">Profile</a></li>
                <li className={styles.navbarLi}><a className={styles.travelNavLink} href="#">English</a></li>
                <li className={styles.navbarLi}><a className={styles.travelNavLink} href="#">Support</a></li>
                <li className={styles.navbarLi}><a className={styles.travelNavLink} href="#">TravelName</a></li>
            </ul>

        </div>
    )
}

export default Navbar
