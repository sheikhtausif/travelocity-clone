
import { Footer } from "./Component/Footer";
import TravelNavbar from "./Component/TravelNavbar";
import TravelocityQR from "./Component/TravelocityQR";
import RoomInformation from "./Component/RoomInformation";


export default function App() {

    return (
        <div className="App">
            <TravelNavbar />
            <TravelocityQR />
            <Footer />
            <RoomInformation />


        </div>
    );
}
