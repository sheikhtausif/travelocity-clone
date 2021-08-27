import React from 'react'
import { Button } from '@material-ui/core';
import travelocityRoomInfo from "../module/roominfo.module.css"
import Slider from './Slider';
import { AccessibleForward, AccountCircle, ArrowBack, MoreHoriz } from '@material-ui/icons';

const RoomInformation = () => {

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
                <a href="#" style={{ padding: "13px", margin: "32px 12px" }}>  <ArrowBack /> <span className={travelocityRoomInfo.adjustroomicon}>room info </span> </a>
            </div>
            <div className={travelocityRoomInfo.traveldisplayflex}>
                <div>
                    <div className={travelocityRoomInfo.roomInfoService}>
                        <h5>Room, 1 King, Balcony, Marina Tower  </h5>
                        <p className={travelocityRoomInfo.roombaypower}>Bay view</p>
                        <div className={travelocityRoomInfo.roomTime}>
                            <i className="material-icons " style={{ marginTop: "1vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh", marginTop: "-5px" }}>accessibility</i>
                            <p className={travelocityRoomInfo.travekRoomQuality}> 305 sqrt </p>
                        </div>
                        <div className={travelocityRoomInfo.roomTime}>
                            <i class="material-icons" style={{ marginTop: "1vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh", marginTop: "-5px" }}>format_color_reset</i>
                            <p className={travelocityRoomInfo.travekRoomQuality}>  305 sqrt</p>
                        </div>
                        <div className={travelocityRoomInfo.roomTime}>
                            <i class="material-icons" style={{ marginTop: "1vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh", marginTop: "-5px" }}>airline_seat_individual_suite</i>
                            <p className={travelocityRoomInfo.travekRoomQuality}> 305 sqrt</p>
                        </div>
                        <div className={travelocityRoomInfo.roomTime}>
                            <i class="material-icons" style={{ marginTop: "1vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh", marginTop: "-5px" }}><AccountCircle /></i>
                            <p className={travelocityRoomInfo.travekRoomQuality}> 305 sqrt</p>
                        </div>

                        {/* getst */}
                        <div>
                            <p className={travelocityRoomInfo.roomTimeDetails}> 4.1/5 guest room </p>
                            <p className={travelocityRoomInfo.roomTime}> guest like that for </p>
                            <p className={travelocityRoomInfo.roomTime}> clean (181 reviews)  </p>
                            <p className={travelocityRoomInfo.roomTime}> view  (59 reviews)</p>
                            <p className={travelocityRoomInfo.roomTime}> Renewal (19 reviews) </p>
                        </div>
                        {/* room amenties */}
                        <div>
                            <h5> Room Amenities </h5>
                            <div>
                                <div>
                                    <div>
                                        <div className={travelocityRoomInfo.acccessiblity}>
                                            <i class="material-icons"><AccessibleForward /></i>
                                            <p className={travelocityRoomInfo.roomTimeDetails}>  Accessibility </p>
                                        </div>
                                        <ul>
                                            <li className={travelocityRoomInfo.roomTime}> <i className="material-icons" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i> Access water hot</li>
                                            <li className={travelocityRoomInfo.roomTime}> <i className="material-icons" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i> Access water hot</li>
                                            <li className={travelocityRoomInfo.roomTime}> <i className="material-icons" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i> Access water hot</li>
                                            <li className={travelocityRoomInfo.roomTime}> <i className="material-icons" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i> Access water hot</li>
                                            <li className={travelocityRoomInfo.roomTime}> <i className="material-icons" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i> Access water hot</li>
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
                                    <p className={travelocityRoomInfo.roomTimeDetails}> <i class="material-icons" style={{ marginTop: "1vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "0.2vh", marginTop: "-15px", fontSize: "28px" }}>airline_seat_individual_suite</i> BedTime </p>
                                    <div>
                                        <ul>
                                            <li className={travelocityRoomInfo.roomTime}> <i class="material-icons custom" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i>Access water hot</li>
                                            <li className={travelocityRoomInfo.roomTime}> <i class="material-icons custom" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i>Access water hot</li>
                                            <li className={travelocityRoomInfo.roomTime}> <i class="material-icons custom" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i>Access water hot</li>
                                            <li className={travelocityRoomInfo.roomTime}> <i class="material-icons custom" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i>Access water hot</li>
                                            <li className={travelocityRoomInfo.roomTime}> <i class="material-icons custom" style={{ marginTop: "0vh", color: "#505C66", marginLeft: "1.3vh", paddingLeft: "1.2vh" }}><MoreHoriz /></i>Access water hot</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* amenities */}

                    </div>
                </div>


                {/* scroll */}
                <div className={travelocityRoomInfo.travelCustom}>
                    <div className={travelocityRoomInfo.travelCustom}>
                        {/* custom image sliders */}
                        <Slider slides={ImageData} />

                    </div>
                    <h5> Room option </h5>
                    <div className={travelocityRoomInfo.op}>
                        <div>
                            <p className={travelocityRoomInfo.optitle}>Fully refundable <span> i </span></p>
                            <p className={travelocityRoomInfo.ReserveDate}>Before wed, sep 22</p>
                            <p className={travelocityRoomInfo.ReservePercentage}>28%</p>
                            <p className={travelocityRoomInfo.moneyunder}>$287<span className="ReserveInfo">i</span></p>

                            <p className={travelocityRoomInfo.ReserveIncrement}>$192</p>
                            <p className={travelocityRoomInfo.moneyunder2}><span className="ReserveInfo">per nights</span></p>
                            <p className={travelocityRoomInfo.moneyunder2}><span className="ReserveInfo">includes taxes</span></p>
                            <p className={travelocityRoomInfo.moneyunder3}>price details</p>
                        </div>
                        <div className={travelocityRoomInfo.travelLeftOrRemain}>
                            <Button variant="primary"> Reserve btn </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default RoomInformation
