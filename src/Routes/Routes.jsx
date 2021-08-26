import { Switch, Route } from "react-router-dom";
import { MainHomePage } from "../Pages/Home_page";
import { HotelsListPage } from "../Pages/HotelListPage";
import MainHotelPage from "../Pages/MainHotelPage";

export function RoutesPage() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainHomePage} />
        <Route exact path="/hotels" component={HotelsListPage} />
        <Route exact path="/hotel" component={MainHotelPage} />
      </Switch>
    </div>
  );
}
