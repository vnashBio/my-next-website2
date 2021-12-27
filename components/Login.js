import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);

export default function Login() {

    return (
        <div className={navStyles.logincontainer}>
          <h4>Login</h4> <FontAwesomeIcon icon={['fas', 'user']} />
        </div>
        
    )
}
