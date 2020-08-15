import React from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { Link, useStaticQuery } from "gatsby"
var window = require("global/window")

export default function App() {
  const data = useStaticQuery(graphql`
    query MyQuery22 {
      allContentfulMentors {
        nodes {
          image {
            id
            file {
              url
            }
          }
          name
          designation
        }
      }
    }
  `)

  const items = data.allContentfulMentors.nodes
  const Responsive = () => {
    if (window.innerWidth > 1550) {
      return 4
    } else if (window.innerWidth < 1550 && window.innerWidth > 1200) {
      return 4
    } else if (window.innerWidth <= 1199 && window.innerWidth > 992) {
      return 3
    } else if (window.innerWidth <= 991 && window.innerWidth > 769) {
      return 3
    } else if (window.innerWidth <= 768 && window.innerWidth > 421) {
      return 2
    } else if (window.innerWidth <= 420) {
      return 1
    }
  }
  console.log(Responsive())
  if (items) {
    return (
      <div id="mentors" className="mentors container">
        <div className="section-title">
          <h2>Our Mentors</h2>
          <div className="bar"></div>
          <p>Alone we can do so little, together we can do so much</p>
        </div>
        <CarouselProvider
          naturalSlideWidth={120}
          naturalSlideHeight={Responsive() < 3 ? 120 : 150}
          totalSlides={items.length}
          visibleSlides={Responsive()}
        >
          <Slider>
            {items.map(item => (
              <Slide index={0}>
                <div className="single-team" style={{ padding: 0 }}>
                  <div className="">
                    <img
                      src={`https:${item.image.file.url}`}
                      alt="teamimage"
                      className="team-image"
                    />
                  </div>

                  <div className="team-content" style={{ padding: "10px 5px" }}>
                    <div className="">
                      <h4>{item.name}</h4>
                      <span>{item.designation}</span>
                    </div>

                    <ul>
                      <li>
                        <a href="#">
                          <i data-feather="facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i data-feather="gitlab"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
          <div style={{ textAlign: "center" }}>
            <ButtonBack className="btn">Back</ButtonBack>
            <ButtonNext className="btn">Next</ButtonNext>
          </div>
        </CarouselProvider>
        <div className="box">
          <a className="button btn btn-primary" href="#popup1">
            Show all COEs
          </a>
        </div>

        <div id="popup1" className="overlay">
          <div className="popup">
            <a className="close" href="#">
              &times;
            </a>
            <div className="content">
              <ul style={{ display: "flex", flexWrap: "wrap" }}>
                <li>
                  <ul>
                    <li>
                      <a href="https://cgu-odisha.ac.in/bosch-rexroth/">
                        <span>Bosch Rexroth</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/siemens/">
                        <span>SIEMENS</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/festo/">
                        <span>FESTO</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/welding/">
                        <span>WELDING</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/hvacr/">
                        <span>HVAC &amp; R</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/robotics/">
                        <span>Robotics</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/google/">
                        <span>C.V. Raman Google</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-2527">
                  <ul>
                    <li>
                      <a target="_blank" href="https://cgu-odisha.ac.in/trtc/">
                        <span>TRTC</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/tata/">
                        <span>Tata Technology</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/schneider-electric/">
                        <span>Schneider Electric</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/c-v-raman-sew-eurodrive/">
                        <span>SEW Eurodrives</span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://cgu-odisha.ac.in/cybersecurity/"
                      >
                        <span>Cyber Security (Marcraft)</span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://cgu-odisha.ac.in/cdac/">
                        <span>CDAC</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/c-v-raman-vlsi/">
                        <span>VLSI</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href="https://cgu-odisha.ac.in/plumbing/"
                      >
                        <span>Plumbing</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/c-v-raman-quanser/">
                        <span>Quanser</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/c-v-raman-galsen/">
                        <span>GalSen</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/c-v-raman-national-instruments/">
                        <span>National Instruments</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/c-v-raman-cisco/">
                        <span>Cisco</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/c-v-raman-ranjita-analytical-research-laboratory/">
                        <span>
                          Ranjita Analytical &amp; Research Laboratory
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://cgu-odisha.ac.in/pcb-circuit-design-centre-of-excellence/">
                        <span>PCB &amp; Circuit Design</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <div>Mentor List Loading</div>
  }
}
