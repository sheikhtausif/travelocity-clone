import { Switch, Route } from "react-router-dom";
import { MainHomePage } from "../pages/Home_page";

export function RoutesPage() {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={MainHomePage}/>
            </Switch>
        </div>
    );
}