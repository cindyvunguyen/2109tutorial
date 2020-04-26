import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import "./about.css";
import Header from "../../comps/Header";
import {IoIosArrowBack} from 'react-icons/io'

const Blog = ({}) => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#aboutpage").style.left = 0;
        }, 50);
    }, []);

    return <div id="aboutpage">
        <Header text="About Me" fontSize={32}/>
        <p>Animal Crossing has taken over my life.</p>
        <img src="https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png" width="25%" height="25%"/>
        <p/>
        <Link href="/"><button><IoIosArrowBack/> Go Back</button></Link>
    </div>
}

export default Blog;