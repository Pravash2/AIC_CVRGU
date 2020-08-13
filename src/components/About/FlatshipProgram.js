import React from "react"

export default function App() {
  return (
    <div id="program" className="program container">
      <div className="section-title">
        <h2>Our Flagship Program</h2>
        <div className="bar"></div>
      </div>
      <div class="about-inner-area">
        <div class="row text-justify">
          <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div class="about-text">
              <h3>Call for Innovators:</h3>
              <p>
                We already have innovators & students across the nation who had
                made success stories within Various Competitions, World Skills
                and Hackathons. AIC - CVRCE Foundation envisions to take them
                beyond this limit and achieve more heights. Thus, Calling them
                to showcase their innovative idea and start their own
                entrepreneurial journey with us. Registrations already live at
                <a
                  className="btn-primary p-1"
                  target="_blank"
                  href="https://bit.ly/AIC-CGU"
                  style={{ fontSize: 10, fontFamily: "monospace" }}
                >
                  https://bit.ly/AIC-CGU
                </a>
                .
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="about-text">
              <h3>Student Associate Program:</h3>
              <p>
                Student Associate Program is a unique initiative, where C. V.
                Raman Global University TIF is providing an opportunity for
                students to work as Associates. We are looking for individuals
                who can act as the team leaders as well as are having the
                ability to work as the part of a team, in the focused areas
                like, Community Managers, Content (Documentation),Events &
                outreach, Startup Research, IPR, IT & Graphics.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="about-text">
              <h3>Wadhwani Foundation D2C – Foundational Course</h3>
              <p>
                A practitioner’s course to empower college students with an
                entrepreneurial mindset and business skills to enhance their job
                prospects, encourage intrapreneurship, and drive long-term
                entrepreneurship. This course is the first of a two-part
                entrepreneurship development curriculum from Wadhwani
                Foundation. The aim of this course is to equip students to
                develop an entrepreneurial mindset and become future
                entrepreneurs. It is designed to help them learn and practice
                the skills necessary to identify and develop an opportunity into
                a new venture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
