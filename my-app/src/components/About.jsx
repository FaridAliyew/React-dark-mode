import React from 'react'
import myImg from '../imgs/mePhoto.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


function About() {
  return (
    <div className="about-me container my-5 text-center">
      <div className="row">
        <div className="col-3">
          <img src={myImg} width="180px" className="img-fluid" alt="myPhoto" />
        </div>

        <div className="col-7 my-5">
          <h1 className="text-white">About Me</h1>
          <span className="text-white">Developer</span> <span className="text-danger">& Designer</span>
          <p className="text-white my-5">
            Hello. I am Farid Aliyev, 23 years old. I graduated from Azerbaijan State University of Oil and Industry.
            Currently, I am studying at the master's level at the Azerbaijan State University of Science and Technology.
            I like to play football as a hobby. I want to become a front-end developer in the future.
          </p>

          <div className="social-links">
            <a href="#"><i className="fa fa-instagram"><FaInstagram />
            </i></a>
            <a href="#"><i className="fa fa-twitter"><FaTwitter />
            </i></a>
            <a href="#"><i className="fa fa-facebook-f"><FaFacebookF />
            </i></a>
            <a href="mailto:someone@example.com">
              <i className="material-icons"><BiLogoGmail /></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About