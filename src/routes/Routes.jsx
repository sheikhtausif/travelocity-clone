import { Switch, Route } from "react-router-dom";
import { MainHomePage } from "../pages/Home_page";
import { HotelsListPage } from "../pages/HotelListPage";

export function RoutesPage() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainHomePage} />
        <Route exact path="/hotels" component={HotelsListPage} />
      </Switch>
    </div>
  );
}
