import { Switch, Route } from "react-router-dom";
import { MainHomePage } from "../Pages/Home_page";
import { HotelsListPage } from "../Pages/HotelListPage";
import MainHotelPage from "../Pages/MainHotelPage";
import { SignInPage } from "../Pages/SignIn_page";
import { SignUpPage } from "../Pages/SignUp_page";

export function RoutesPage() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainHomePage} />
        <Route exact path="/hotels" component={HotelsListPage} />
        <Route exact path="/hotels/:id" component={MainHotelPage} />
        <Route exact path="/signUp" component={SignUpPage} />
        <Route exact path="/signIn" component={SignInPage} />
      </Switch>
    </div>
  );
}
