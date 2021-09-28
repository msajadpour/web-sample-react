import React from "react";
import { withRouter } from "react-router-dom";
import TopNav from './../components/TopNav';
import Header from './../components/Header';
import MainNav from './../components/MainNav';
import Footer from './../components/Footer';

const MainLayout = (props) => {
    const {pathname} = props.location
    return (
        <React.Fragment>
            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    {pathname === '/' ? <Header /> : null}
                    
                </div>
            </div>

            <div className="main-menu">
                <div className="container">
                    <MainNav />
                </div>
            </div>

            <main id="home-page">
                <div className="container">
                    {props.children}
                </div>
            </main>

            <Footer />
        </React.Fragment>
    );
};

export default withRouter(MainLayout);
