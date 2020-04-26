import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from "../pages/ChatPage";

export default {
    title: "My Comps",
    component: CustomButton
};

export const MyCustomButton = () => 
<CustomButton/>;

function CancelClick() {
    alert("Cancel");
}

export const MyCustomButtonWithOptions = () => 
<CustomButton 
    color="#999" 
    text="Cancel"
    onClick={CancelClick}/>;

export const MyHeader = () => 
<Header/>;

export const MyInput = () => 
<Input/>;

export const MyInputWithPlaceholder = () => 
<Input
    placeholder="Custom Placeholder"/>;

export const MyChat = () => 
<Chat/>;

export const MyChatPage = () => 
<ChatPage/>;

// export const PageWithCustomButtons = () =>
// <div>
//     <Header/>

//     <Header/>

//     <CustomButton 
//         color="#999" 
//         text="Cancel"
//         onClick={CancelClick}/> 

//     <CustomButton 
//         color="#3F5" 
//         text="OK"
//         onClick={OkClick}/>

//     <CustomButton 
//         color="#F3F" 
//         text="Submit"/>

//     <CustomButton 
//         text="Menu"/>
// </div>

// // button functions

// function OkClick() {
//     alert("Ok");
// }

// // header functions

// function Message1() {
//     alert("You hovered over the first header.")
// }

// function Message2() {
//     alert("You hovered over the second header.")
// }