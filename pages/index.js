import indexStyles from '../styles/Index.module.css';
import Head from 'next/head'
import Link from 'next/link';
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);



export default function Home() {

  return (
    <div>
      <Head>
        <title>Tshilidzi Rambuda</title>
      </Head>
      <div className={indexStyles.banner}>
        <h1>Tshilidzi Rambuda</h1>
        <h2>Web Developer</h2>
        <p>I am a Full Stack Developer based in Johannesburg, I design <br />
        and develop websites, web applications and mobile apps using popular Web Development Technologies.</p>
        <div className={indexStyles.bannerBtn}>
        <a href="/documents/my-web-development-cv.pdf" alt="alt text" target="_blank" rel="noopener noreferrer">My Resume</a> 
        <Link href="#contact">Contact Me</Link>
        </div>
      </div>

      <div className={indexStyles.profile} id='profile'>
          <div>
              <h2>About <span className={indexStyles.span} id="">Me</span></h2>
              <p>I am a Full Stack Designer &amp; <br />
              Developer</p>
          </div>
          <div>
              <p>I am a dynamic Full Stack Developer, passionate about programming and 
                design with an enthusiasm for learning and development.
                I have experience in solving coding errors and client related issues.</p> <br /> 
              
              <p>I develop cutting edge websites, web applications and mobile apps using technologies
                like JavaScript, HTML, CSS, React Native, Firebase and MongoDB.
              </p>
                
          </div>
      </div>
          <div className={indexStyles.skillstitle} id="skills">
            <div className={indexStyles.titleIcon}><FontAwesomeIcon icon={['fas', 'list']} /></div>
            <h1>My <span className={indexStyles.span} id="">Skills</span></h1>
          </div>
         
          <div className={indexStyles.skillsWrapper}>
            <div> <FontAwesomeIcon icon={['fab', 'html5']} /></div>
            <div><FontAwesomeIcon icon={['fab', 'css3']} /></div>
            <div><FontAwesomeIcon icon={['fab', 'js']} /></div>
            <div><FontAwesomeIcon icon={['fab', 'react']} /></div>
            <div><FontAwesomeIcon icon={['fab', 'figma']} /></div>
            <div><FontAwesomeIcon icon={['fab', 'node']} /></div>
          </div>

          <div className={indexStyles.projecttitle} id="projects">
            <div className={indexStyles.titleIcon}><FontAwesomeIcon icon={['fas', 'folder']} /></div>
            <h1>My <span className={indexStyles.span} id="">Projects</span></h1>
          </div>
          <div className={indexStyles.projects}>
            <div>
              <div>
                <div className={indexStyles.projimage}><a href="">View Project</a></div>
              </div>
              <div>
                <h1>Simple website</h1>
                <p>Built with pure Html, css and JavaScript with no framework or library</p>
              </div>
            </div>

            <div>
              <div>
                <div className={indexStyles.projimage}><a href="">View Project</a></div>
              </div>
              <div>
                <h1>Website 1</h1>
                <p>Html, css and JavaScript</p>
              </div>
            </div>

            <div>
              <div>
                <div className={indexStyles.projimage}><a href="">View Project</a></div>
              </div>
              <div>
                <h1>Website 1</h1>
                <p>Html, css and JavaScript</p>
              </div>
            </div>
          </div>

          <div className={indexStyles.contacttitle} id="contact">
            <div className={indexStyles.titleIcon}><FontAwesomeIcon icon={['fas', 'address-book']} /></div>
            <h1><span className={indexStyles.span} id="">Contact</span> me</h1>
          </div>

          <form 
            className={indexStyles.contact} 
            name="contact-form"
            method="POST"
            action="contact/?success=true"
            data-netlify="true"
          >
            <div>
              <input 
                id="name"
                name="name"
                required
                type="text"
                placeholder='Name'
              />

              <input 
                type="text" 
                placeholder="Email" 
                name='email' 
                required
                id='email' 
              />
              <input 
                type="text" 
                placeholder="Subject" 
                name='subject' 
                id='subject' 
                required
              />
            </div>
            <div>
              <textarea 
                name='message' 
                id='message' 
                placeholder="Type Message" 
                cols="30" 
                rows="10"
              >
              </textarea>

              <button name="submit" className={indexStyles.submitbtn}>Submit</button>
            </div>
          </form>
    </div>
  )
}





