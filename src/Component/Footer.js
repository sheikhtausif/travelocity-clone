/* eslint-disable jsx-a11y/anchor-is-valid */
import "../";

import { Button } from "@material-ui/core";
import Footer_style from "../module/footer.module.css";
import download from "../images/expediagroup.png"
function Footer() {
    return (
        <div className={Footer_style.footer}>
            <div className={Footer_style.FooterDisplay}>
                <Button>
                    <img
                        className={Footer_style.footerImages}
                        src={download} alt="expediaimage"
                    />
                </Button>
                <ul className={Footer_style.FooterUL}>
                    <h1> company</h1>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>company </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>About </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Jobs </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>List your property </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Newsroom </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Advertising </a></li>
                </ul>
                <ul className={Footer_style.FooterUL}>
                    <h1> Explore </h1>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>company </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Hotels in United States </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Travel Blog </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Travelocity Reviews </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Domestic Flights
                    </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Unique Places to Stay </a></li>
                </ul>
                <ul className={Footer_style.FooterUL}>
                    <h1> Policies </h1>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>company </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Privacy Policy </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Terms of Use </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Accessibility </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Do not sell my personal information </a></li>
                </ul>
                <ul className={Footer_style.FooterUL}>
                    <h1> Help </h1>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>company </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Support </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>
                        Cancel your hotel or vacation rental booking</a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Cancel your flight </a></li>
                    <li className={Footer_style.FooterLi}>
                        <a href="#" className={Footer_style.FooterLink}>Use a Travelocity coupon </a></li>
                    <li className={Footer_style.FooterLi}><a href="#" className={Footer_style.FooterLink}>Coronavirus Disease (COVID-19) </a></li>
                </ul>
            </div>

            <hr />
            <div className={Footer_style.footerCopyWrites}>
                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> © 2021 Travelscape LLC, an Expedia Group Company. All rights reserved.</a>
                </div>
                <div class="footer-copyright text-center py-3">© Travelocity, the Stars Design, and The Roaming Gnome Design are trademarks or registered trademarks of Travelscape LLC. CST# 2056372-50.
                </div>
            </div>
        </div>
    );
}

export { Footer };
