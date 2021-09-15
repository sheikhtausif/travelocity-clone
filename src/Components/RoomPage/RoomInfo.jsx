import React, { useEffect } from 'react'
import Slider from './Slider';
import { ArrowBack } from '@material-ui/icons';
import styles from "./room_info.module.css"
import { useParams, useHistory, Link } from 'react-router-dom';
import { useAxios } from '../../Hooks/useAxios';
import { useSelector } from 'react-redux';

const RoomInfo = () => {
    const { id } = useParams()
    // console.log('id:', id)

    const { paymentAmount } = useSelector(state => state)

    const discountedPrice = Math.floor(paymentAmount * 0.9)

    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const ImageData = [
        {
            image:
                "https://images.trvl-media.com/hotels/1000000/20000/11200/11109/096c538b.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
            image:
                "https://images.trvl-media.com/hotels/1000000/20000/11200/11109/d291a36a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
            image:
                "https://images.trvl-media.com/hotels/1000000/20000/11200/11109/15e41adb.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
            image:
                "https://images.trvl-media.com:443/hotels/1000000/20000/11200/11109/ed419075_y.jpg",
        },
    ];

    // eslint-disable-next-line
    const { hotelData } = useAxios(`https://my-api-data.herokuapp.com/data/?hotelId=f14de8c1-57be-4333-9a37-f13acc77836c&&roomTypeId=${id}`)
    // console.log('hotelData:', hotelData)

    const handleBack = () => {
        history.goBack()
    }

    const handlePaymentPage = () => {
        history.push('/payment')
    }

    return (
        <div style={{ background: 'white' }}>
            <div className={styles.goingBackButton}>
                <ArrowBack onClick={handleBack} style={{ color: '#0d5ab9', cursor: 'pointer' }} />
                <h3 className={styles.adjustRoomIcon}>Room information</h3>
            </div>
            <div className={styles.travelDisplayFlex}>
                <div className={styles.leftPart}>
                    <h1 className={styles.comfortness}>Comfort Queen Room</h1>
                    <div>
                        <div className={styles.featureComfort}>
                            <svg width="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><svg><path fill="#505c66" d="M6 18h2l-3 3-3-3h2V6c0-1.1.9-2 2-2h12V2l3 3-3 3V6H6v12zm14-8v2h-2v-2h2zm0 8a2 2 0 01-2 2v-2h2zm0-4v2h-2v-2h2zm-4 4v2h-2v-2h2zm-4 0v2h-2v-2h2z"></path></svg></svg>
                            <span>258 sq ft</span>
                        </div>
                        <div className={styles.featureComfort}>
                            <svg width="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg><path fill="#505c66" fillRule="evenodd" d="M10.99 8A3 3 0 115 8a3 3 0 016 0zm8 0A3 3 0 1113 8a3 3 0 016 0zM8 13c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm7.03.05c.35-.03.68-.05.97-.05 2.33 0 7 1.17 7 3.5V19h-6v-2.5c0-1.48-.81-2.61-1.97-3.45z" clipRule="evenodd"></path></svg></svg>
                            <span>Sleeps 3</span>
                        </div>
                        <div className={styles.featureComfort}>
                            <svg width="25px" ariaHidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg><path fill="#505c66" fillRule="evenodd" d="M11 7h8a4 4 0 014 4v9h-2v-3H3v3H1V5h2v9h8V7zm-1 3a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd"></path></svg></svg>
                            <span>1 Queen Bed</span>
                        </div>
                        <div className={styles.featureComfort}>
                            <svg width="25px" ariaHidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg><path fill="#505c66" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></svg>
                            <span>Reserve now, pay later</span>
                        </div>
                    </div>

                    <h1 className={styles.roomAmenties}>Room amenities</h1>
                    <div>
                        <div className={styles.featureComfort}>
                            <svg width="25px" ariaHidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg><path fill="#242c33" fillRule="evenodd" d="M11 7h8a4 4 0 014 4v9h-2v-3H3v3H1V5h2v9h8V7zm-1 3a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd"></path></svg></svg>
                            <h3 className={styles.featureHeading}>Bedroom</h3>
                        </div>
                        <ul className={styles.roomService}>
                            <li>Air conditioning</li>
                            <li>Bed sheets</li>
                            <li>Blackout drapes/curtains</li>
                            <li>Premium bedding</li>
                            <li>Rollaway/extra beds (surcharge)</li>
                        </ul>
                    </div>
                    <div>
                        <div className={styles.featureComfort}>
                            <svg width="25px" ariaHidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg><path fill="#242c33" fillRule="evenodd" d="M9.35 3.9C6.9 3.9 5 5.9 5 8.36V22H3V8.36A6.36 6.36 0 019.35 2c3.5 0 6.15 2.85 6.15 6.36V9.8h2c1.13 0 2.14.66 2.6 1.69l.9 1.99H8.1l.9-2a2.85 2.85 0 012.6-1.68h2V8.36c0-2.46-1.79-4.46-4.25-4.46z" clipRule="evenodd"></path><path d="M12.5 16.5a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zm-8.5 4a1 1 0 11-2 0 1 1 0 012 0zm5.5 0a1 1 0 11-2 0 1 1 0 012 0zm5.5 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></svg>
                            <h3 className={styles.featureHeading}>Bathroom</h3>
                        </div>
                        <ul className={styles.roomService}>
                            <li>Free toiletries</li>
                            <li>Private bathroom</li>
                            <li>Rainfall showerhead</li>
                            <li>Shower</li>
                            <li>Towels</li>
                        </ul>
                    </div>
                    <div>
                        <div className={styles.featureComfort}>
                            <svg width="25px" ariaHidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg><path fill="#242c33" fillRule="evenodd" d="M20.15 10.15c-1.59 1.59-3.74 2.09-5.27 1.38L13.41 13l6.88 6.88-1.41 1.41L12 14.41l-6.89 6.87-1.41-1.41 9.76-9.76c-.71-1.53-.21-3.68 1.38-5.27 1.92-1.91 4.66-2.27 6.12-.81 1.47 1.47 1.1 4.21-.81 6.12zm-9.22.36L8.1 13.34 3.91 9.16a4 4 0 010-5.66l7.02 7.01z" clipRule="evenodd"></path></svg></svg>
                            <h3 className={styles.featureHeading}>Food and Drink</h3>
                        </div>
                        <ul className={styles.roomService}>
                            <li>Coffee/tea maker</li>
                        </ul>
                    </div>
                    <div>
                        <div className={styles.featureComfort}>
                            <svg width="25px" ariaHidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg><path fill="#242c33" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></svg>
                            <h3 className={styles.featureHeading}>More</h3>
                        </div>
                        <ul className={styles.roomService}>
                            <li>Daily housekeeping</li>
                            <li>Desk</li>
                            <li>Iron/ironing board (on request)</li>
                            <li>Safe</li>
                            <li>Turndown service</li>
                        </ul>
                    </div>
                </div>
                {/* scroll */}
                <div>
                    <div>
                        <Slider slides={ImageData} />
                    </div>
                    <h1 className={styles.priceDetailsHeading}>Price Details</h1>
                    <div className={styles.priceDetails}>
                        <h4>Cancellation policy</h4>
                        <div className={styles.cancellationPolicyMoreDetails}>
                            <Link to="#">More details on all policy options</Link>
                            <svg width="18px" ariaHidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg><path fill="#505c66" fillRule="evenodd" d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm11-1v6h-2v-6h2zm-1 9a8.01 8.01 0 010-16 8.01 8.01 0 010 16zm1-13v2h-2V7h2z" clipRule="evenodd"></path></svg></svg>
                        </div>
                        <li>Fully refundable on cancellation 12hrs. before check in</li>
                        <li>50% refundable on cancellation 30mins. before check in</li>
                        <hr />
                        <div>
                            <div className={styles.offerDiscount}>10% off</div>
                        </div>
                        <div className={styles.originalPrice}>${paymentAmount}</div>
                        <div className={styles.discountedPrice}>${discountedPrice}</div>
                        <div className={styles.priceInfoWithDetails}>Per night</div>
                        <div className={styles.priceInfoWithDetails}>Included taxes and fees</div>
                        <div className={styles.reserveBtn}>
                            <button onClick={handlePaymentPage}>Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomInfo










