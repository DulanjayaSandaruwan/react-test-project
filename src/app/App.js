import React from "react";
import HomePage from "../pages/Home";
import Login from "../pages/Session/Login";
import {Route, Routes} from "react-router-dom";
import NotFound from "../pages/Session/NotFound";
import FlexBox from "../pages/Layouts/FlexBox";
import Grid from "../pages/Layouts/Grid";
import DashBoard from "../pages/DashBoard";
import CustomerBoard from "../pages/CustomerBoard";
import ItemBoard from "../pages/ItemBoard";

function App() {
    return (<Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='dashBoard' element={<DashBoard/>}/>
            <Route path='customer' element={<CustomerBoard/>}/>
            <Route path='item' element={<ItemBoard/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='flexBox' element={<FlexBox/>}/>
            <Route path='grid' element={<Grid/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>);
}

export default App;
