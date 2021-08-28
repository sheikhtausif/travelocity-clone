import React from 'react'
import styles from './styles/mainHotel.module.css'
import Ads from './Ads'
import HotelDetails from './HotelDetails'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom'

const MainHotel = ({ hotelData }) => {

    const history = useHistory()

    return (
        <>
            <div className={styles.container}>
                <div className={styles.mainBox}>
                    <div className={styles.left}>
                        <div className={styles.flex}>
                            <KeyboardBackspaceIcon onClick={() => history.push('/hotels')} />
                            <p onClick={() => history.push('/hotels')}>See all properties</p>
                        </div>
                        <HotelDetails hotelData={hotelData} />
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

        </>
    )
}

export default MainHotel;
