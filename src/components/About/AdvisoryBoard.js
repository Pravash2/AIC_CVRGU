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
    query MyQuery222 {
      allContentfulAdvisoryBoard {
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

  const items = data.allContentfulAdvisoryBoard.nodes
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
          <h2>Our Advisory Board</h2>
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
                      style={{ width: "80%" }}
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
      </div>
    )
  } else {
    return <div>Mentor List Loading</div>
  }
}
