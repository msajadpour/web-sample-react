import React from "react";
import Toplearn from "./containers/toplearn";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Toplearn />
        </BrowserRouter>
    );
};

export default App;
