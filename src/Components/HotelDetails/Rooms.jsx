import React from 'react'
import styles from './styles/room.module.css'
import { MdNavigateNext } from 'react-icons/md';
import { BiInfoCircle } from 'react-icons/bi';
import Box from '@material-ui/core/Box'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import GroupIcon from '@material-ui/icons/Group';
import WifiIcon from '@material-ui/icons/Wifi';
import HotelIcon from '@material-ui/icons/Hotel';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import DoneIcon from '@material-ui/icons/Done';
import { RadioGroup } from '@material-ui/core';


const Rooms = ({ hotelData }) => {
    console.log('hotelData:', hotelData.roomTypes)
    return (
        <div className={styles.room_grid}>
            {hotelData.roomTypes.map(room => (
                <div key={room.roomTypeId} className={styles.room_div}>
                    <img src={room.images[0].url} alt="" />
                    <div className={styles.room_details}>
                        <h3>{room.name}</h3>
                        <p>4.7/5 guest room rating</p>
                        <Box className={styles.flex_1}>
                            <SquareFootIcon />
                            <p>{Math.floor((Math.random() * 300) + 99)} Square fit</p>
                        </Box>
                        <Box className={styles.flex_1}>
                            <LocationCityIcon />
                            <p>City view</p>
                        </Box>
                        <Box className={styles.flex_1}>
                            <GroupIcon />
                            <p>Sleep 3</p>
                        </Box>
                        <Box className={styles.flex_1}>
                            <HotelIcon />
                            <p>2 Twin beds</p>
                        </Box>
                        <Box className={styles.flex_1}>
                            <WifiIcon />
                            <p>Free wifi</p>
                        </Box>
                        <Box className={styles.flex_1}>
                            <FreeBreakfastIcon />
                            <p>Breakfast buffet</p>
                        </Box>
                        <Box className={styles.flex_1}>
                            <LocalParkingIcon />
                            <p>free self parking</p>
                        </Box>
                        <Box className={styles.flex_1}>
                            <DoneIcon />
                            <p>Reserve now, pay deposit</p>
                        </Box>
                        <Box className={styles.flex_1}>
                            <p className={styles.green}>Fully refundable</p>
                            <span><BiInfoCircle /></span>
                        </Box>
                        <small>Before sun, 5 sep</small>
                        <Box className={styles.flex_1}>
                            <p className={styles.more}>More details</p>
                            <span><MdNavigateNext /></span>
                        </Box>
                        <div className={styles.line}></div>
                        <div className={styles.extra}>
                            <h4>Extras</h4>
                            <RadioGroup aria-label="price" name="price_1">
                                <Box className={styles.flex_2}>
                                    <FormControlLabel value="noExtra" control={<Radio color="primary" />} label="One-way airport transfer" />
                                    <p>+ $0</p>
                                </Box>
                                <Box className={styles.flex_2}>
                                    <FormControlLabel value="halfBoard" control={<Radio color="primary" />} label="Half Board" />
                                    <p>+ $118</p>
                                </Box>
                            </RadioGroup>
                            <h3 className={styles.h3_price}>$2,241</h3>
                            <div className={styles.flex_2}>
                                <div className={styles.flex_small}>
                                    <small>per night</small>
                                    <small style={{ fontWeight: 'bold', marginBottom: '5px' }}>$2,644 total</small>
                                    <small>include tax & fees</small>
                                </div>
                                <button>Reserve</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Rooms
