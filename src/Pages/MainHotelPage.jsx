import React from 'react'
import MainHotel from '../Components/HotelDetails/MainHotel'
import { useParams } from 'react-router-dom'
import { useAxios } from '../Hooks/useAxios'
import { CircularProgress } from '@material-ui/core'
import logo from '../logo.svg'

const MainHotelPage = () => {
    const { id } = useParams()

    const { hotelData } = useAxios(`http://localhost:3001/data/?hotelId=${id}`)

    const styles = {
        progress: {
            width: '20%',
            margin: '200px auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        img: {
            width: '100px',
        }
    }

    return (
        <>
            {hotelData.length > 0 ? <div>
                <MainHotel hotelData={hotelData[0]} />
            </div>
                : <div style={styles.progress}>
                    <img src={logo} alt="" style={styles.img} />
                    <CircularProgress />
                </div>}
        </>
    )
}

export default MainHotelPage
