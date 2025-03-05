import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css"
const Contact = () => {
  return (
    <footer  className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>
                Contact Us
            </h2>
            <p> Feel free to reach Out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon'/>
                <a href='mailto:brijeshrawat2001@gmail.com'>brijeshrawat2001@gmail.com </a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn Icon'/>
                <a href='https://www.linkedin.com/in/brijesh-rawat-5b9bb8229/'> LinkedIn/Brijesh-Rawat</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='Email Icon'/>
                <a href='https://github.com/brijesh-2001'>github.com/BrijeshRawat  </a>
            </li>
            {/* <li className={styles.link}>
                <img className='phone' src={getImageUrl("contact/phone.png")} alt='Phone Icon'/>
                <a href='https://www.whatsapp.com/'>+91 9643606550  </a>
            </li> */}
            
        </ul>
    </footer>
  )
}

export default Contact