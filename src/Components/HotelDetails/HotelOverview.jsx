import React from 'react'
import styles from './styles/hotelDetails.module.css'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import PoolIcon from '@material-ui/icons/Pool';
import SpaIcon from '@material-ui/icons/Spa';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import WifiIcon from '@material-ui/icons/Wifi';
import HotTubIcon from '@material-ui/icons/HotTub';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { RiHandSanitizerFill, Ri24HoursLine } from 'react-icons/ri';
import { AiOutlineClear } from 'react-icons/ai';
import { SiContactlesspayment } from 'react-icons/si';
import { MdNavigateNext } from 'react-icons/md';



const HotelOverview = ({ hotelData }) => {
    // console.log('hotelData:', hotelData)
    
    return (
        <>
            {hotelData ? <div className={styles.grid}>
                <div className={styles.name}>
                    <h1>{hotelData.name.replace('[SANDBOX]', '')}</h1>
                    <Rating name="size-small" defaultValue={null} disabled size="small" />
                    <h3>{hotelData.starRating}/5 {hotelData.starRating > 4 ? "Wonderful" : "Average"}</h3>
                    <p style={{ color: '#505c66', fontSize: '14px' }}>Guests rated this property 4.7/5 for cleanliness.</p>
                    <Box className={styles.flex_1}>
                        <p className={styles.more}> {Math.floor((Math.random() * 1000) + 1)} reviews </p>
                        <span><MdNavigateNext /></span>
                    </Box>
                </div>
                <div className={styles.amenities}>
                    <h3>Popular amenities</h3>
                </div>
                <div className={styles.amenities_1}>
                    <Box className={styles.flex_1}>
                        <AcUnitIcon />
                        <p>Air Conditioning</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <PoolIcon />
                        <p>Swimming pool</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <SpaIcon />
                        <p>Spa</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <LocalParkingIcon />
                        <p>Parking</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <p className={styles.more}>See all</p>
                        <span><MdNavigateNext /></span>
                    </Box>
                </div>
                <div className={styles.amenities_2}>
                    <Box className={styles.flex_1}>
                        <WifiIcon />
                        <p>Wifi</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <LocalLaundryServiceIcon />
                        <p>Laundry</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <HotTubIcon />
                        <p>Hot tub</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <FreeBreakfastIcon />
                        <p>Breakfast available</p>
                    </Box>
                </div>
                <div className={styles.safety}>
                    <h3>Cleaning and safety practices</h3>
                </div>
                <div className={styles.safety_1}>
                    <Box className={styles.flex_1}>
                        <AiOutlineClear />
                        <p>Cleaned with disinfectant</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <SiContactlesspayment />
                        <p>Contactless check-in</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <p className={styles.more}>See all</p>
                        <span><MdNavigateNext /></span>
                    </Box>
                </div>
                <div className={styles.safety_2}>
                    <Box className={styles.flex_1}>
                        <Ri24HoursLine />
                        <p>24-hour vacancy between guest room stays</p>
                    </Box>
                    <Box className={styles.flex_1}>
                        <RiHandSanitizerFill />
                        <p>Hand sanitizer provided</p>
                    </Box>
                </div>
            </div> : <h2>Loading...</h2>
            }
        </>
    )
}

export default HotelOverview
