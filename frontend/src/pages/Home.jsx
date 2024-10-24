import { useState, useEffect, useCallback } from "react";
import "./pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import thinkingimage from "../assets/m16.jpg";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import s7 from "../assets/s7.jpg";
import s8 from "../assets/s8.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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

  // for cursor
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track mouse movement inside the slide
  const handleMouseMove = useCallback((e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
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

      {/* ---------- slider section ---------- */}
      <div className="slider-div">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
          grabCursor={true}
        >
          {Array(1)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content" onMouseMove={handleMouseMove}>
                  <img src={s1} alt="slider1" />
                  <h5>21.10.2024</h5>
                  <h3>Make models: Station Row section model</h3>
                  <span>
                    <button>Model</button> <button>Model Monday</button>
                  </span>
                  <span
                    className="drag-text"
                    style={{
                      top: `${cursorPosition.y}px`,
                      left: `${cursorPosition.x}px`,
                    }}
                  >
                    Drag
                  </span>
                </div>
              </SwiperSlide>
            ))}
          {Array(1)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content" onMouseMove={handleMouseMove}>
                  <img src={s2} alt="slider1" />
                  <h5>03.10.2024</h5>
                  <h3>Developing in the city: New Build vs Retrofit</h3>
                  <span>
                    <button>refurbishpment</button> <button>Retrofit</button>
                    <button>sustainability</button>
                  </span>
                  <span
                    className="drag-text"
                    style={{
                      top: `${cursorPosition.y}px`,
                      left: `${cursorPosition.x}px`,
                    }}
                  >
                    Drag
                  </span>
                </div>
              </SwiperSlide>
            ))}
          {Array(1)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content" onMouseMove={handleMouseMove}>
                  <img src={s3} alt="slider1" />
                  <h5>19.09.2024</h5>
                  <h3>Tall buildings photo essay</h3>
                  <span>
                    <button>Residential</button>
                    <button>Retrofit</button> <button>Tall buldings</button>
                    <button>Workplace</button>
                  </span>
                  <span
                    className="drag-text"
                    style={{
                      top: `${cursorPosition.y}px`,
                      left: `${cursorPosition.x}px`,
                    }}
                  >
                    Drag
                  </span>
                </div>
              </SwiperSlide>
            ))}
          <SwiperSlide>
            <div className="slide-content">
              <img src={s4} alt="slider1" style={{ height: "345px" }} />
              <h5>10.09.2024</h5>
              <h3>Refresh, repurpose, reimagine: Our approach to retrofit</h3>
              <span>
                <button>refurbishpment</button> <button>Retrofit</button>
                <button>sustainability</button>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={s5} alt="slider1" />
              <h5>29.07.2024</h5>
              <h3>Make models: Milton Avenue/Station Ro w</h3>
              <span>
                <button>Model</button> <button>Model Monday</button>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={s6} alt="slider1" />
              <h5>17.07.2024</h5>
              <h3>Optimising the value of build-to-rent</h3>
              <span>
                <button>Residential</button>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={s7} alt="slider1" />
              <h5>06.06.2024</h5>
              <h3>
                Making luxury circular: rethinking re-use in retail fit-outs
              </h3>
              <span>
                <button>Circular economy</button> <button>Retail</button>
                <button>sustainability</button>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={s8} alt="slider1" />
              <h5>15.05.2024</h5>
              <h3>
                AI integration at Make: shaping the future of architecture
              </h3>
              <span>
                <button>AI</button> <button>Architecture</button>
                <button>Artificial intelligence</button>
                <button>Technology</button>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ---------- slider section ---------- */}

      {/* ---------- studios section ---------- */}
      <div className="studios">
        <div className="inner-studios">
          <div className="studios-text">
            <h1>Studios</h1>
          </div>
        </div>
      </div>
      <div className="studios-imgdiv">
        <div className="studios-imgl">
          <h3>London</h3>
        </div>
        <div className="studios-imgh">
          <h3>Hong Kong</h3>
        </div>
        <div className="studios-imgs">
          <h3>Sydney</h3>
        </div>
        <div className="studios-imgsh">
          <h3>Shanghai</h3>
        </div>
      </div>
      {/* ---------- studios section ---------- */}
    </>
  );
}

export default Home;
