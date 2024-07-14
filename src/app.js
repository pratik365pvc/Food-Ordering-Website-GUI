import React from "react";

import ReactDOM from "react-dom/client"

import { Header } from "./components/header.js";

import {Body} from "../body.js";






const AppLayout =  () =>{
    return(
    <>
<Header />
<Body />
</>

    )
}
    
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);