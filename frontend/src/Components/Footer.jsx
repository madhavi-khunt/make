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
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="inner-footer1">
          <div className="footer-div1">
            <Link
              to={
                "https://x.com/i/flow/login?redirect_after_login=%2Fmakearchitects"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} className="fonticon" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://www.linkedin.com/company/make-architects/"}
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="fonticon" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://www.instagram.com/make_architects/"}
            >
              <FontAwesomeIcon icon={faInstagram} className="fonticon" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://www.vimeo.com/makearchitects"}
            >
              <FontAwesomeIcon icon={faVimeoV} className="fonticon" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://www.youtube.com/makearchitects"}
            >
              <FontAwesomeIcon icon={faYoutube} className="fonticon" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://www.makearchitects.com/make-architects-on-wechat/"}
            >
              <FontAwesomeIcon icon={faComments} className="fonticon" />
            </Link>
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
              <Link href="" underline="none">
                London <i className="bi bi-geo-alt-fill"></i>{" "}
              </Link>
            </h5>
            <p>32 Cleveland Street</p>
            <p>London W1T 4JY</p>
            <p>United Kingdom</p>
            <Link href="tel:+8320135519">
              <FontAwesomeIcon icon={faPhone} className="fonticon" />
            </Link>
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
