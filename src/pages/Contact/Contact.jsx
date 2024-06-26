import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaSquareInstagram,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <Link to="https://github.com/Amirsaleh2002" className="contact-link">
          <FaGithub className="contact-icon" />
          <span className="contact-span">Github</span>
        </Link>
      </div>
      <div className="contact-item">
        <Link
          to="https://www.linkedin.com/in/saleh-rezaei-40196b273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="contact-link"
        >
          <FaLinkedin className="contact-icon" />
          <span className="contact-span">Linkedin</span>
        </Link>
      </div>
      <div className="contact-item">
        <Link to="https://t.me/@WebDeveloper10100" className="contact-link">
          <FaTelegram className="contact-icon" />
          <span className="contact-span">Telegram</span>
        </Link>
      </div>
      <div className="contact-item">
        <Link
          to="https://www.instagram.com/saleh.r2002"
          className="contact-link"
        >
          <FaSquareInstagram className="contact-icon" />
          <span className="contact-span">Instagram</span>
        </Link>
      </div>
      <div className="contact-item">
        <Link to="mailto:amsaleh.r81@gmail.com" className="contact-link">
          <MdEmail className="contact-icon" />
          <span className="contact-span">Email</span>
        </Link>
      </div>
      <div className="contact-item">
        <Link to="tel:+09012673213" className="contact-link">
          <BsTelephoneFill className="contact-icon" />
          <span className="contact-span">Telephone</span>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
