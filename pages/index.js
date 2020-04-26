import Link from 'next/link';
import Router from 'next/router';
import {GiBurningTree} from 'react-icons/gi';
import {IoMdPerson} from 'react-icons/io';
import {IoMdBook} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import './index.css'

function ClickIndex() {
    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function() {
        Router.push("/ChatPage")
    }, 1000);
}

const Index = () => 
<div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <Link href="ChatPage"><button><GiBurningTree color="#ABC"/> Chat</button></Link>
    <Link href="About"><button><IoMdPerson/> About Me</button></Link>
    <Link href="Blog"><button><IoMdBook/> Blog</button></Link>
    <Link href="Contact"><button><MdEmail/> Contact Me</button></Link>
</div>

export default Index;