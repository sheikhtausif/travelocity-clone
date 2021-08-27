import React from 'react'
import AboutArea from './AboutArea'
import Amenities from './Amenities'
// import HotelMap from './HotelMap'
import HotelOverview from './HotelOverview'
import Rooms from './Rooms'
import styles from './styles/hotelDetails.module.css'

const HotelDetails = ({ hotelData }) => {

    const options = [
        { title: "Overview", to: "#overview" },
        { title: "Rooms", to: "#rooms" },
        { title: "Location", to: "#location" },
        { title: "Amenities", to: "#amenities" },
        { title: "Policies", to: "#policies" },
        { title: "Reviews", to: "#reviews" },
    ]

    return (
        <>
            <div className={styles.flex}>
                <div className={styles.left}>
                    <img src={hotelData.images[0].url} alt="" />
                </div>
                <div className={styles.right}>
                    <div>
                        <img src={hotelData.images[1].url} alt="" />
                    </div>
                    <div>
                        <img src={hotelData.images[2].url} alt="" />
                    </div>
                    <div>
                        <img src={hotelData.images[3].url} alt="" />
                    </div>
                    <div>
                        <img src={hotelData.images[4].url} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.option}>
                {options.map((option, i) => (
                    <p key={i}>{option.title}</p>
                ))}
                <button className={styles.optionBtn}>Reserve a room</button>
            </div>

            <div className={styles.flex} style={{ background: '#FFF', borderRadius: '0 0 10px 10px' }}>
                <div className={styles.left_1}>
                    <HotelOverview hotelData={hotelData} />
                </div>
                <div className={styles.right_1}>
                    {/* <HotelMap hotelData={hotelData[0]} /> */}
                </div>
            </div>

            <div className={styles.gridRoom}>
                <Rooms hotelData={hotelData} />
            </div>

            {/* <div className={styles.gridRoom}>
                {hotelData.roomsType.map(room => (
                    <Rooms room={room} />
                ))
            </div>} */}

            <AboutArea />

            <Amenities />

        </>
    )
}

export default HotelDetails
