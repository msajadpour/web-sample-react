import React from "react";
import MainLayout from "../layout/MainLayout";
import Courses from "./../components/Courses";
import Login from "./../components/Login";
import { Switch, Route } from "react-router-dom";
import Register from './../components/Register';
const Toplearn = props => {
    return (
        <MainLayout>
            <Switch>
                <Route path="/" exact component={Courses} />
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
            </Switch>
        </MainLayout>
    );
};

export default Toplearn;
