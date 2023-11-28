import { NavLink, useLocation } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import aos from 'aos';
import 'aos/dist/aos.css'
import { TypeAnimation } from "react-type-animation";
import ReadMoreReact from 'read-more-react';
import ReactTyped from "react-typed";
import { FaHome
  } from 'react-icons/fa'

const withoutSidebarRoute = ["/"];

const Navigation = () => {
    const {pathname} = useLocation();

    if (pathname != "/")
    return (
    <div className='fixed top-4 left-4'>
    <nav>
        <ul>
            <li><NavLink to="/"> <FaHome className="hover:scale-105" size = {30}>  </FaHome></NavLink></li>
        </ul>
    </nav>
    </div>
)};

export default Navigation;