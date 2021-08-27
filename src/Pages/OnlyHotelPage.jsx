import React from 'react'
import RoomInfo from '../Components/HotelPage/RoomInfo'
import Travelocity from '../Components/HotelPage/Travelocity'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const OnlyHotelPage = () => {
    return (
        <div>
            <Navbar />
            <RoomInfo />
            <Travelocity />
            <Footer />
        </div>
    )
}

export default OnlyHotelPage
