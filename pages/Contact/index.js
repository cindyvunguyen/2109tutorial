import {useState, useEffect} from 'react'
import Header from "../../comps/Header";
import CustomButton from "../../comps/CustomButton";
import "./contact.css";

var index = 0;
const headers_array = [
    "Thanks for contacting me!",
    "Goodbye.",
    "Let me know if you have other questions.",
        // {
        //     text: "Hello",
        //     img: "http://img.jpg"
        // }
]

const Contact = () => {
    // step 1 - create the state variable, and the function to update it and add a default.
    const [header_text, setHeader] = useState("Contact me!");
    // const [img_url, setImg] = useState("");
    // [state, function] = default
    const [page_left, setLeft] = useState("-100%");
    // const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLeft(0);
        }, 50);

        return () => {
            // what to do when the component dies
        }
    }, []);
    // useEffect is a way to identify when a page is born, when something changes, and when it does

    useEffect(() => {
        // what to do when the page is created
    }, []);

    useEffect(() => {
        // what to do when when a state in the page/component updates
        // in square brackets below, identify the state
        setLeft(20);
        setTimeout(() => {
            setLeft(0);
        }, 500)
    }, [header_text]);

    // step 2 - connect the state variable to the UI
    return <div id="contactpage" style={{left: page_left}}>
        <Header text={header_text} fontSize="24"/>
        {
            // <img src={img_url}/>
        }

        <CustomButton text="email" onClick={()=>{
            // step 3 - connect the state function() to an interaction or figure out when you want the interface to update
            setHeader(headers_array[index]);
            // setImg(header_array[index].img)
            index++;
            if (index > headers_array.length-1) {
                index = 0;
            }
        }}/>
    </div>
}

export default Contact;