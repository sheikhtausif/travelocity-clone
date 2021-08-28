import styles from "./Footer.module.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


export function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.flex}>
                    <div>
                        <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="" />
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Company</h3>
                            <li><a href="#"> About</a></li>
                            <li><a href="#"> Jobs</a></li>
                            <li><a href="#"> List your property</a></li>
                            <li><a href="#"> Partnerships</a></li>
                            <li><a href="#"> Newsroom</a></li>
                            <li><a href="#"> Investor Relations</a></li>
                            <li><a href="#"> Roaming Gnome Store</a></li>
                            <li><a href="#"> Advertising</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Explore</h3>
                            <li><a href="#">Hotels in United States</a></li>
                            <li><a href="#">Vacation Rentals in United States</a></li>
                            <li><a href="#">Vacation Packages in United States</a></li>
                            <li><a href="#">Domestic Flights</a></li>
                            <li><a href="#">Car Rentals in United States</a></li>
                            <li><a href="#">Travelocity Reviews</a></li>
                            <li><a href="#">Travelocity Coupons</a></li>
                            <li><a href="#">Unique Places to Stay</a></li>
                            <li><a href="#">Travel Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Policies</h3>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Do not sell my personal information</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footerLinks}>
                            <h3>Help</h3>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Cancel your hotel or vacation rental booking</a></li>
                            <li><a href="#">Cancel your flight</a></li>
                            <li><a href="#">Refund timelines, policies & processes</a></li>
                            <li><a href="#">Use a Travelocity coupon</a></li>
                            <li><a href="#">Coronavirus Disease (COVID-19)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}













