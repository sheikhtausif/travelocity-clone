import { Switch, Route } from "react-router-dom";
// import { MainHomePage } from "../Pages/Home_page";
import { HotelsListPage } from "../Pages/HotelListPage";
import MainHotelPage from "../Pages/MainHotelPage";
import OnlyHotelPage from "../Pages/OnlyHotelPage";

export function RoutesPage() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={MainHomePage} /> */}
        <Route exact path="/hotels" component={HotelsListPage} />
        <Route exact path="/hotels/:id/room" component={MainHotelPage} />
        {/* <Route exact path="/hotels/:id/room/:id" component={OnlyHotelPage} /> */}
        <Route exact path="/" component={OnlyHotelPage} />
      </Switch>
    </div>
  );
}
