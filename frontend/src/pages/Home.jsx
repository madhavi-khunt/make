import { useState, useEffect } from "react";
import "./pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import thinkingimage from "../assets/m16.jpg";

function Home() {
  const [text, setText] = useState("make");
  const [styleClass, setStyleClass] = useState("normal");

  useEffect(() => {
    const transitions = [
      { text: "IMAGINE MORE", style: "expanded", delay: 1000 },
      { text: "make", style: "normal", delay: 2000 },
    ];

    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < transitions.length) {
        setText(transitions[currentIndex].text);
        setStyleClass(transitions[currentIndex].style);
        currentIndex++;
      } else {
        clearInterval(interval); // Stop after final text
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      {/* ---------- hero section ---------- */}
      <div className="hero">
        <video className="hero-video" autoPlay loop muted>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1 className={`fade-text ${styleClass}`}>{text}</h1>
          <button className="hero-button">
            Capella Sydney&nbsp;
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
      </div>
      {/* ---------- hero section ---------- */}

      {/* ---------- Project section ---------- */}

      <div className="project">
        <h1 className="project-h1">Make is a different kind </h1>
        <h1 className="project-h2">of architecture practice.</h1>
        <button className="project-button">
          Projects&nbsp;
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>

      {/* ---------- Project section ---------- */}

      {/* ---------- who we are section ---------- */}
      <div className="who">
        <h1 className="who-h1">
          We’re free-thinking, not limited by a house style.
        </h1>
        <h1 className="who-h2">
          We’re all partners, finding solutions together.
        </h1>
        <h1 className="who-h3">We have world-class expertise.</h1>
        <h1 className="who-h4">We promise discovery and new possibilities.</h1>
        <h1 className="who-h5">We design to create a resilient legacy.</h1>
        <button className="who-button">
          Who We Are&nbsp;
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>
      {/* ---------- who we are section ---------- */}

      {/* ---------- featured section ---------- */}
      <div className="feature">
        <div className="inner-feature">
          <div className="inner-feature-textdiv">
            <h1 className="inner-feature-text">Featured</h1>
          </div>
          <div className="inner-feature-imagediv">
            <h1 className="feature-text">Victoria Coast</h1>
          </div>
        </div>
      </div>
      <div className="feature-2">
        <div className="inner-feature-2">
          {/* <div className="inner-feature-textdiv">
            <h1 className="inner-feature-text">Featured</h1>
          </div> */}
          <div className="inner-feature-imagediv-2">
            <h1 className="feature-text-2">Eden</h1>
          </div>
        </div>
      </div>
      <div className="feature-3">
        <div className="inner-feature-3">
          {/* <div className="inner-feature-textdiv">
            <h1 className="inner-feature-text">Featured</h1>
          </div> */}
          <div className="inner-feature-imagediv-3">
            <h1 className="feature-text-3">Capella Syndney</h1>
          </div>
        </div>
      </div>
      {/* ---------- featured section ---------- */}

      {/* ---------- Thinking section ---------- */}
      <div className="thinking">
        <div className="inner-thinking">
          {/* <div className="inner-think"> */}
          <div className="thinking-text">
            <h1 className="thinking-text-h1">Thinking</h1>
          </div>
          <div className="inner-thinkin-divs">
            <div className="thinking-imagediv">
              <img
                src={thinkingimage}
                alt="image"
                className="thinking-imagediv-img"
              />
            </div>
            <div className="thinking-textdiv">
              <h1 className="h1">Refresh, repurpose, reimagine: </h1>
              <h1 className="h2">Our approach to retrofit</h1>
              <h5>By Oliver Hall</h5>
              <button className="thinking-btn1">refurbishpment</button>
              <button className="thinking-btn2">Retrofit</button>
              <button className="thinking-btn3">sustainability</button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* ---------- Thinking section ---------- */}
    </>
  );
}

export default Home;
