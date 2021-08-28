import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.NavWidth}>
                    <div className={styles.logo}>
                        <Link to="/"><img src="https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2" alt="" /></Link>
                    </div>
                    <div>
                        <ul className={styles.navLinks}>
                            <li><a className={styles.travelNavLink} href="#">Español </a> </li>
                            <li><a className={styles.travelNavLink} href="#">List your property</a></li>
                            <li><a className={styles.travelNavLink} href="#">Support</a></li>
                            <li><a className={styles.travelNavLink} href="#">Trips</a></li>
                            <li><a className={styles.travelNavLink} href="#">Sign In</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}