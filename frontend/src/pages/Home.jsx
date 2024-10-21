import { useState, useEffect } from "react";
import "./pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

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
        {/* <h1 className="project-h1">Make is a different kind </h1>
        <h1 className="project-h2">of architecture practice.</h1>
        <button className="project-button">
          Projects&nbsp;
          <FontAwesomeIcon icon={faPlay} />
        </button> */}
      </div>

      {/* ---------- who we are section ---------- */}
    </>
  );
}

export default Home;
