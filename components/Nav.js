import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css'
import { useState, useEffect } from 'react';
const logo = require('../public/images/logo.png');
const logoWhite = require('../public/images/logoWhite.png');
const profImage = require('../public/images/tshilidzi-rambuda.png')


export default function Nav() {

    //navbar scroll when active state
    const [navcolor, setNavcolor] = useState(false)

    //menu color active state

    //nav scroll function
    const changeColors = () => {
        if (window.scrollY >= 40) {
        setNavcolor(false)
        } else {
        setNavcolor(true)
        }   
    }

    //use useeffect to manipulate the DOM
    useEffect(() => {
        changeColors()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeColors)
    })


    return (
        <div className={navcolor ? navStyles.navcontainer : navStyles.activeNavScroll}>
            <div className={navStyles.nav}>
                <div className={navStyles.logo}>
                    <Image src={logo} alt="" height="50px" width="140px"/>
                </div>
                <div className={navStyles.menu}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#profile">My Profile</Link></li>
                        <li><Link href="#skills">My Skills</Link></li>
                        <li><Link href="#projects">My Projects</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
