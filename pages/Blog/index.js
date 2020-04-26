import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import "./blog.css";
import Header from "../../comps/Header";
import {IoIosArrowBack} from 'react-icons/io'

const Blog = ({}) => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#blogpage").style.left = 0;
        }, 50);
    }, []);

    return <div id="blogpage">
        <Header text="Welcome to my blog!" fontSize={32}/>
        <p>There's nothing here...</p>
        <p/>
        <Link href="/"><button><IoIosArrowBack/> Go Back</button></Link>
    </div>
}

export default Blog;