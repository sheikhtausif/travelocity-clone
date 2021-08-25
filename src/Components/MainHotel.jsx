import React from 'react'
import styles from './styles/mainHotel.module.css'
import Ads from './Ads'
import HotelDetails from './HotelDetails'

const MainHotel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainBox}>
                <div className={styles.left}>
                    <HotelDetails />
                </div>
                <div className={styles.right}>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads style={{ position: 'fixed', top: '50', }} />
                </div>
            </div>
        </div>
    )
}

export default MainHotel
