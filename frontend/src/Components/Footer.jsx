// import React from 'react'
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faVimeoV } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faComments,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import f7 from "../assets/f7.png";
import f8 from "../assets/f8.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="inner-footer1">
          <div className="footer-div1">
            <FontAwesomeIcon icon={faXTwitter} className="fonticon" />
            <FontAwesomeIcon icon={faLinkedinIn} className="fonticon" />
            <FontAwesomeIcon icon={faInstagram} className="fonticon" />
            <FontAwesomeIcon icon={faVimeoV} className="fonticon" />
            <FontAwesomeIcon icon={faYoutube} className="fonticon" />
            <FontAwesomeIcon icon={faComments} className="fonticon" />
          </div>
          <div className="footer-div2">
            <div className="certified">
              <img src={f7} alt="certified logo" className="img" />
              <img src={f8} alt="certified logo" className="img1" />
            </div>
          </div>
          <div className="footer-div3">
            <p>Made by</p>
            <p>Copyright Make Ltd. All rights reserved</p>
          </div>
        </div>
        <div className="inner-footer2">
          <div>
            <h5>
              London <i className="bi bi-geo-alt-fill"></i>{" "}
            </h5>
            <p>32 Cleveland Street</p>
            <p>London W1T 4JY</p>
            <p>United Kingdom</p>
            <FontAwesomeIcon icon={faPhone} className="fonticon" />
            <FontAwesomeIcon icon={faEnvelope} className="fonticon" />
          </div>
          <div>
            <h5>
              London <i className="bi bi-geo-alt-fill"></i>{" "}
            </h5>
            <p>32 Cleveland Street</p>
            <p>London W1T 4JY</p>
            <p>United Kingdom</p>
            <FontAwesomeIcon icon={faPhone} className="fonticon" />
            <FontAwesomeIcon icon={faEnvelope} className="fonticon" />
          </div>
          <div>
            <h5>
              London <i className="bi bi-geo-alt-fill"></i>{" "}
            </h5>
            <p>32 Cleveland Street</p>
            <p>London W1T 4JY</p>
            <p>United Kingdom</p>
            <FontAwesomeIcon icon={faPhone} className="fonticon" />
            <FontAwesomeIcon icon={faEnvelope} className="fonticon" />
          </div>
          <div>
            <h5>
              London <i className="bi bi-geo-alt-fill"></i>{" "}
            </h5>
            <p>32 Cleveland Street</p>
            <p>London W1T 4JY</p>
            <p>United Kingdom</p>
            <FontAwesomeIcon icon={faPhone} className="fonticon" />
            <FontAwesomeIcon icon={faEnvelope} className="fonticon" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
