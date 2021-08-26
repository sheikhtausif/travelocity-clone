import React from 'react'
import AboutArea from './AboutArea'
import Amenities from './Amenities'
// import HotelMap from './HotelMap'
import HotelOverview from './HotelOverview'
import Rooms from './Rooms'
import styles from './styles/hotelDetails.module.css'
import { useAxios } from './useAxios'

const HotelDetails = () => {

    const { hotelData } = useAxios(`http://localhost:3001/data`)
    // console.log('hotelData:', hotelData)

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
            {(hotelData.length > 0) ? <div className={styles.flex}>
                <div className={styles.left}>
                    <img src={hotelData[0].images[0].url} alt="" />
                </div>
                <div className={styles.right}>
                    <div>
                        <img src={hotelData[0].images[1].url} alt="" />
                    </div>
                    <div>
                        <img src={hotelData[0].images[2].url} alt="" />
                    </div>
                    <div>
                        <img src={hotelData[0].images[3].url} alt="" />
                    </div>
                    <div>
                        <img src={hotelData[0].images[4].url} alt="" />
                    </div>
                </div>
            </div> : <h2>Loading...</h2>}
            <div className={styles.option}>
                {options.map((option, i) => (
                    <p key={i}>{option.title}</p>
                ))}
                <button className={styles.optionBtn}>Reserve a room</button>
            </div>

            <div className={styles.flex} style={{ background: '#FFF', borderRadius: '0 0 10px 10px' }}>
                <div className={styles.left_1}>
                    <HotelOverview hotelData={hotelData[0]} />
                </div>
                <div className={styles.right_1}>
                    {/* <HotelMap hotelData={hotelData[0]} /> */}
                </div>
            </div>

            {hotelData.length > 0 ? <div className={styles.gridRoom}>
                <Rooms hotelData={hotelData[0]} />
            </div> : <h1>Loading...</h1>}

            <AboutArea />

            <Amenities />

        </>
    )
}

export default HotelDetails
