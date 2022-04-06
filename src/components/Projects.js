import React from "react";
import "./Projects.css";
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import four from "../assets/img/four.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
export default function Projects() {
  return (
    <div className="container">
      <div className="projects-container">
        <h2>Projects</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img src={one} alt="Profile Logo" />
              </div>
              <div className="project-details">
                <h2>Pricing Page</h2>
                <span>
                  Description:
                  <p>
                    Arduino is an open-source electronics platform based on
                    easy-to-use hardware and software.
                  </p>
                </span>
                <span>Languages Used: HTML, CSS, JS</span>
                <a
                  href="https://pricing-html-css-q610np7te-jayanth-ch.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {"Pricing Page ➜"}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img src={two} alt="Profile Logo" />
              </div>
              <div className="project-details">
                <h2>Landing Page</h2>
                <span>
                  Description:
                  <p>
                    Arduino is an open-source electronics platform based on
                    easy-to-use hardware and software.
                  </p>
                </span>
                <span>Languages Used: HTML, CSS, JS, Bootstrap</span>
                <a
                  href="https://easybank-landing-page-if3ye4lfh-jayanth-ch.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {"Landing Page ➜"}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img src={three} alt="Profile Logo" />
              </div>
              <div className="project-details">
                <h2>Meme Generator</h2>
                <span>
                  Description:
                  <p>
                    Arduino is an open-source electronics platform based on
                    easy-to-use hardware and software.
                  </p>
                </span>
                <span>Languages Used: HTML, CSS, JS</span>
                <a
                  href="https://meme-generator-gzt28oryp-jayanth-ch.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {"Meme Generator ➜"}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img src={four} alt="Profile Logo" />
              </div>
              <div className="project-details">
                <h2>Memory Game</h2>
                <span>
                  Description:
                  <p>
                    Arduino is an open-source electronics platform based on
                    easy-to-use hardware and software.
                  </p>
                </span>
                <span>Languages Used: HTML, CSS, JS</span>
                <a
                  href="https://gif-game-gnkuwisre-jayanth-ch.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {"Memory Game ➜"}
                </a>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="slide-content">Slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">Slide 6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">Slide 7</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">Slide 8</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">Slide 9</div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}
