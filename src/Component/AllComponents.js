
import { Footer } from "./Footer";
import TravelNavbar from "./TravelNavbar";
import TravelocityQR from "./TravelocityQR";
import RoomInformation from "./RoomInformation";


export default function AllComponents() {

    return (
        <div className="App">
            <TravelNavbar />
            <TravelocityQR />
            <Footer />
            <RoomInformation />
        </div>
    );
}
