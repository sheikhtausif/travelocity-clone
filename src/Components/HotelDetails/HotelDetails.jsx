import React from 'react'
import Rooms from './Rooms'
import AboutArea from './AboutArea'
import Amenities from './Amenities'
// import HotelMap from './HotelMap'
import HotelOverview from './HotelOverview'
import Policies from './Policies'
// import Review from './Review'
import styles from './styles/hotelDetails.module.css'

const HotelDetails = ({ hotelData }) => {

    const options = [
        { title: "Overview", to: "#" },
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
                    <p key={i}><a href={option.to}>{option.title}</a></p>
                ))}
                <button className={styles.optionBtn}><a href="#rooms">Reserve a room</a></button>
            </div>

            <div className={styles.flex} style={{ background: '#FFF', borderRadius: '0 0 10px 10px' }}>
                <div className={styles.left_1} id="overview">
                    <HotelOverview hotelData={hotelData} />
                </div>
                <div className={styles.right_1}>
                    {/* <HotelMap hotelData={hotelData} /> */}
                </div>
            </div>

            <div className={styles.room_grid} id="rooms">
                {hotelData.roomTypes.map(room => (
                    <Rooms key={room.roomTypeId} room={room} />
                ))}
            </div>

            <div id="location">
                <AboutArea />
            </div>
            <div id="amenities">
                <Amenities />
            </div>
            <div id="policies">
                <Policies />
            </div>
            <div id="reviews">
                {/* <Review /> */}
            </div>
        </>
    )
}

export default HotelDetails
