import {useEffect} from 'react'
import Header from "../../comps/Header";
import CustomButton from "../../comps/CustomButton";
import "./contact.css";

const Contact = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#contactpage").style.left = 0;
        }, 50);
    }, []);

    return <div id="contactpage">
        <Header text="Contact me!" fontSize="24"/>
        <CustomButton text="email"/>
    </div>
}

export default Contact;