import React, {useState} from 'react';
import "./input.css";
import CustomButton from "../CustomButton";

const Input = ({placeholder, onClick}) => 
{
    const [val, setVal] = useState("");

    return <div className="input_cont">
        <input type="text" onChange={(e)=>{
            setVal(e.target.value);
        }} placeholder={placeholder}></input>
        <CustomButton onClick={()=>{
            onClick(val);
            // this passes the value over to the onClick function
        }}text="Send" color="#58F"/>
    </div>
}

Input.defaultProps = {
    placeholder: "Type your chat here.",
    onClick:()=> {

    }
}

export default Input; 