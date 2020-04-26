// use the same components to change the fontSize
// change the text color of the header
// change the onMouseOver for the header
// bonus: make a form that can be adjusted

import React from 'react';
import './header.css';

const Header = ({text, fontSize, color, onMouseOver}) => 
<div>
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>

function DefaultMessage() {
    alert("Hello, this is the default MouseOver.");
}

Header.defaultProps = {
    text: "Header",
    fontSize: 12,
    color: "#000",
    onMouseOver: DefaultMessage
}

export default Header;
