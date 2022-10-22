import React from "react";
import { Route, useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Members from "./pages/Members";
import ProfilePage from './pages/ProfilePage';
import SignIn from "./pages/Signin";
import { Banner} from "./pages/Banner";

const Routes = () => {
    return (
        <useRoutes>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/members">
                <Members/>
            </Route>
            <Route exact path="/profilepage">
                <ProfilePage />
            </Route>
            <Route exact path="/diagrams">
                <Banner/>
            </Route>
        </useRoutes>
    );
};

export default Routes;