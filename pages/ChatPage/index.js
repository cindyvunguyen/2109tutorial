import React, {useState, useEffect} from 'react';
import "./chatpage.css";
import Chat from "../../comps/Chat";
import Input from "../../comps/Input";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";

// var welcome = "Welcome to my app!"
// function setWelcome() { 
//     welcome = "Start by sending a message.";
//     document.querySelector("#welcome").innerText = welcome;
// }

const ChatPage = ({}) => 
{
    const [welcome, setWelcome] = useState("Welcome to my app!");
    const [msg, setMsg] = useState("Please type something.");
    const [resp, setResp] = useState("Let me respond to you.");
    const [color, setColor] = useState("#962121");
    const [text, setText] = useState("Don't click this button!");
    // tutorial: make a new state, import a custom button. the button will change text/colour

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#chatpage").style.left = 0;
        }, 50);
    }, []);

    return <div id="chatpage">
        <div id="welcome">
            <Header fontSize={32} text={welcome}/>
        </div>
        <div id="chats" onClick={()=> {
            setWelcome("Start by sending a message.")
        }}>
            <Chat name="User1" msg={msg}/>
            {/* this displays the message when the button is clicked */}
            <p/>
            <Chat img={"https://image.flaticon.com/icons/svg/1587/1587565.svg"}
            name="Chatbot" backgroundColor="#FAB" msg={resp}/>
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                // when the button is clicked on, it sets the message

                var new_resp = CheckResponse(val);
                setResp(new_resp);
                
                // if (val === "hi") {
                //     setResp("I love pie.");
                // }
            }}/>
        </div>
        <p/>
        <div id="custom_button">
            <CustomButton color={color} text={text}
            onClick={(color, text)=> {
                setColor("#f0d92b");
                setText("You've found a puppy!")
                document.querySelector("#doggo").innerHTML = "<img src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/25201637/day_2_dec_14_085.jpg'>"

            }}/>
            <div id="doggo"></div>
        </div>
    </div>
}

function CheckResponse(inp) {
    switch(inp.toLowerCase()) {
        case "hi":
            return "I love pie";

        case "how are you":
            return "Great!";

        default:
            return "I don't understand what you are trying to say.";
    }
}

ChatPage.defaultProps = {

}

export default ChatPage;