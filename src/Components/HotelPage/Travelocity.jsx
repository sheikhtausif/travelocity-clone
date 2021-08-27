import React from 'react'
import footer_v1 from "./images/footer_v1.webp"
import scanner from "./images/scanner.png"
import { Button } from '@material-ui/core'
import styles from "./style/room_option.module.css"

const Travelocity = () => {
    return (
        <div className={styles.travelocityWander}>
            <div>
                <img className={styles.travelocityImg} src={footer_v1} alt="footer_v1" />
            </div>
            <div>
                <h1 className={styles.travelocityH1}> Wander Wisely with the Travelocity app </h1>
                <ul className={styles.travelocityUl}>
                    <li> Get helpful alerts about flight status and gate numbers</li>
                    <li> Access all your travel details, even when offline </li>
                    <li>Easily contact your hotel by messaging them right in the ap </li>
                </ul>
                <h2 style={{ fontSize: '3vh', color: '#505c66' }}> Text yourself a download link</h2>
                <Button className={styles.travelocityQrBtn} >
                    select
                </Button>
                <Button className={styles.travelocityQrBtn} >
                    Primary
                </Button>
                <Button className={styles.travelocityQrBtn}>
                    secondary
                </Button>
                <hr />
                <p style={{ fontSize: '2vh', color: '#505c66' }}> By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
            </div>
            <div>
                <img className={styles.QR} src={scanner} alt="" />
            </div>
        </div>
    )
}

export default Travelocity
