import React from 'react'
import logo from '../img/logo.png'
import location from '../img/location.webp'
import phone from '../img/phone.webp'
import mail from '../img/mail.webp'

import fb from '../img/facebook.png'
import ins from '../img/instgram.png'
import yt from '../img/youtube.png'
import tw from '../img/twitter.png'

export default function footer() {
    return (
        <div>

            <footer className="footer">
                <div className="footer-left">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <p className="copy-right">Copy Right © 2005</p>
                </div>

                <div className="footer-center">
                    <div>
                        <img src={location} alt=""/>
                            <p><span>C-1009, B/H Keshav Baugh Party Plot,</span> <span>Vastrapur, Ahmedabad,</span> Gujarat
                                380015</p>
                    </div>
                    <div>
                        <img src={phone} alt=""/>
                            <p>+91 12345 67890</p>
                    </div>
                    <div>
                        <img src="img/mail.webp" alt=""/>
                            <p><a href="contact@fragranceofsouth.com">contact@fragranceofsouth.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="hotel-time">
                        <img src={mail} alt=""/>
                            <p><span>Timing</span><span>Home Delivery: 24/7</span>
                                Dine Out: 10AM - 10PM</p>
                    </div>
                    <p className="hotel-socials">
                        Our Socials
                    </p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com"><img src={fb} alt=""/></a>
                        <a href="https://www.instgram.com"><img src={ins} alt=""/></a>
                        <a href="https://www.twitter.com"><img src={tw} alt=""/></a>
                        <a href="https://www.youtube.com"><img src={yt} alt=""/></a>
                    </div>
                </div>
            </footer>
            <div className="callUs"><a href="tel:1234567890">Order Now</a></div>

        </div>
    )
}
