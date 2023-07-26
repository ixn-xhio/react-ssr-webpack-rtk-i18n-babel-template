import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./routing";
import { BrowserRouter } from "react-router-dom";


if(IS_DEV_SERVER){
    const root = ReactDOM.createRoot(
        document.getElementById('root')!
    );
    
    root.render(
        <BrowserRouter>
            <Routing/>
        </BrowserRouter>
    )
} else {
    ReactDOM.hydrateRoot(
        document.getElementById('root') as any, 
        <BrowserRouter>
            <Routing/>
        </BrowserRouter>
    );
}