import { Button } from '@material-ui/core'
import React from 'react'
import TVLYApp from "../images/TVLY_App_Footer_v1.webp"
import scanner from "../images/scanner.png"

import travelocityQRModule from "../module/travelocityQR.module.css"

const TravelocityQR = () => {
    return (
        <div className={travelocityQRModule.travelocityWander}>
            <div>
                <img className={travelocityQRModule.travelocityImg} src={TVLYApp} alt="TVLYApp" />
            </div>
            <div>
                <h1 className={travelocityQRModule.travelocityH1}> Wander Wisely with the Travelocity app </h1>
                <ul className={travelocityQRModule.travelocityUl}>
                    <li> Get helpful alerts about flight status and gate numbers</li>
                    <li> Access all your travel details, even when offline </li>
                    <li>Easily contact your hotel by messaging them right in the ap </li>
                </ul>
                <h2 style={{ fontSize: '3vh', color: '#505c66' }}> Text yourself a download link</h2>
                <Button className={travelocityQRModule.travelocityQrbtns} >
                    select
                </Button>
                <Button className={travelocityQRModule.travelocityQrbtns} >
                    Primary
                </Button>
                <Button className={travelocityQRModule.travelocityQrbtns}>
                    secondary
                </Button>
                <hr />
                <p style={{ fontSize: '2vh', color: '#505c66' }}> By providing your number, you agree to receive a one-time automated text message
                    with a link to get the app. Standard text message rates may apply.</p>
            </div>
            <div>
                <img className={travelocityQRModule.QR} src={scanner} alt="" />
            </div>
        </div>
    )
}

export default TravelocityQR
