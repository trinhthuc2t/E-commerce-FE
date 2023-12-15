import React from 'react';

import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";

const Profile = () => {
    return (
        <div className='container-fluid pt-100 text-left mt-3'>
            <div className='row'>
                <Sidebar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Profile;