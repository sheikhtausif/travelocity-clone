import React from 'react'
import Slider from './Slider';
import { Button } from '@material-ui/core';
import { AccessibleForward, AccountCircle, ArrowBack, MoreHoriz } from '@material-ui/icons';
import styles from "../style/room_info.module.css"

const RoomInfo = () => {

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

    return (
        <div>
            <div>
                <a href="/" style={{ padding: "13px", margin: "32px 12px" }}><ArrowBack /><span className={styles.adjustRoomIcon}>room info</span></a>
            </div>
            <div className={styles.travelDisplayFlex}>
                <div>
                    <div className={styles.roomInfoService}>
                        <h5>Room, 1 King, Balcony, Marina Tower  </h5>
                        <p className={styles.roomBayPower}>Bay view</p>
                        <div className={styles.roomTime}>
                            <i className="material-icons " style={{ marginTop: "1vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh", }}>accessibility</i>
                            <p className={styles.travelRoomQuality}> 305 sqrt </p>
                        </div>
                        <div className={styles.roomTime}>
                            <i class="material-icons" style={{ marginTop: "1vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh", }}>format_color_reset</i>
                            <p className={styles.travelRoomQuality}>  305 sqrt</p>
                        </div>
                        <div className={styles.roomTime}>
                            <i class="material-icons" style={{ marginTop: "1vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh", }}>airline_seat_individual_suite</i>
                            <p className={styles.travelRoomQuality}> 305 sqrt</p>
                        </div>
                        <div className={styles.roomTime}>
                            <i class="material-icons" style={{ marginTop: "1vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh", }}><AccountCircle /></i>
                            <p className={styles.travelRoomQuality}> 305 sqrt</p>
                        </div>

                        {/* get st */}
                        <div>
                            <p className={styles.roomTimeDetails}> 4.1/5 guest room </p>
                            <p className={styles.roomTime}> guest like that for </p>
                            <p className={styles.roomTime}> clean (181 reviews)  </p>
                            <p className={styles.roomTime}> view  (59 reviews)</p>
                            <p className={styles.roomTime}> Renewal (19 reviews) </p>
                        </div>
                        {/* room amenities */}
                        <div>
                            <h5> Room Amenities </h5>
                            <div>
                                <div>
                                    <div>
                                        <div className={styles.accessibility}>
                                            <i class="material-icons"><AccessibleForward /></i>
                                            <p className={styles.roomTimeDetails}>  Accessibility </p>
                                        </div>
                                        <ul>
                                            <li className={styles.roomTime}> <i className="material-icons" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i> Access water hot</li>
                                            <li className={styles.roomTime}> <i className="material-icons" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i> Access water hot</li>
                                            <li className={styles.roomTime}> <i className="material-icons" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i> Access water hot</li>
                                            <li className={styles.roomTime}> <i className="material-icons" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i> Access water hot</li>
                                            <li className={styles.roomTime}> <i className="material-icons" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i> Access water hot</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h5> Room Amenities </h5>
                            <div>
                                <i class="zmdi zmdi-home zmdi-hc-fw"></i>
                                <div>
                                    <p className={styles.roomTimeDetails}> <i class="material-icons" style={{ marginTop: "1vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "0.2vh", fontSize: "28px" }}>airline_seat_individual_suite</i> BedTime </p>
                                    <div>
                                        <ul>
                                            <li className={styles.roomTime}> <i class="material-icons custom" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i>Access water hot</li>
                                            <li className={styles.roomTime}> <i class="material-icons custom" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i>Access water hot</li>
                                            <li className={styles.roomTime}> <i class="material-icons custom" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i>Access water hot</li>
                                            <li className={styles.roomTime}> <i class="material-icons custom" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i>Access water hot</li>
                                            <li className={styles.roomTime}> <i class="material-icons custom" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i>Access water hot</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* amenities */}

                    </div>
                </div>


                {/* scroll */}
                <div className={styles.travelCustom}>
                    <div className={styles.travelCustom}>
                        {/* custom image sliders */}
                        <Slider slides={ImageData} />

                    </div>
                    <h5> Room option </h5>
                    <div className={styles.op}>
                        <div>
                            <p className={styles.optitle}>Fully refundable <span> i </span></p>
                            <p className={styles.ReserveDate}>Before wed, sep 22</p>
                            <p className={styles.ReservePercentage}>28%</p>
                            <p className={styles.moneyunder}>$287<span className="ReserveInfo">i</span></p>

                            <p className={styles.ReserveIncrement}>$192</p>
                            <p className={styles.moneyunder2}><span className="ReserveInfo">per nights</span></p>
                            <p className={styles.moneyunder2}><span className="ReserveInfo">includes taxes</span></p>
                            <p className={styles.moneyunder3}>price details</p>
                        </div>
                        <div className={styles.travelLeftOrRemain}>
                            <Button variant="primary"> Reserve btn </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomInfo