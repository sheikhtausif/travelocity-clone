import React from 'react'
import styles from './styles/mainHotel.module.css'
import Ads from './Ads'
import HotelDetails from './HotelDetails'
import { useState, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'

const MainHotel = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 1000)
    }, [])

    return (
        <>
            {loading ? <div className={styles.container} >
                <div className={styles.mainBox}>
                    <div className={styles.left}>
                        <HotelDetails />
                    </div>
                    <div className={styles.right}>
                        <Ads />
                        <Ads />
                        <Ads />
                        <Ads />
                        <Ads style={{ position: 'fixed', top: '50', }} />
                    </div>
                </div>
            </div>
                : <div>
                    <CircularProgress />
                </div>

            }
        </>
    )
}

export default MainHotel;
