import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

const About = () => {
  return (
   <section className={styles.container} id='about'>
    <h2 className= {styles.title}>
        About
    </h2>
    <div className={styles.content}>
        <img
        className={styles.aboutImage}
         src={getImageUrl("about/about.png")} 
         alt='About Image'></img>
   <ul className={styles.aboutItems}>
    <li className={styles.aboutItem}>
        <img 
        src={getImageUrl("about/cursorIcon.png")} 
        alt='CursorIcon'
        ></img>
        <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I'm a frontend Developer</p>
        </div>
        </li>
        <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} alt='Server-Icon'></img>
        <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>I'm a backend  Developer</p>
        </div>
        </li>
        <li className={styles.aboutItem}>
        <img src={getImageUrl("about/uilCon.png")} alt='CursorIcon'></img>
        <div className={styles.aboutItemText}>
            <h3 >Full-Stack Developer</h3>
            <p>I'm a full stack Developer</p>
        </div>
        </li>

   </ul>
    </div>
   </section>
  )
}

export default About