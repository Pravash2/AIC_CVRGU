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
                and Hackathons. CVRCE TIF envisions to take them beyond this
                limit and achieve more heights. Thus, Calling them to showcase
                their innovative idea and start their own entrepreneurial
                journey with us. Registrations already live at
                <a
                  className="btn-primary p-1"
                  target="_blank"
                  href="https://bit.ly/CVRGI-TBI"
                  style={{ fontSize: 10, fontFamily: "monospace" }}
                >
                  https://bit.ly/CVRGI-TBI
                </a>
                .
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="about-text">
              <h3>Meri Yatra: </h3>
              <p>
                “Meri Yatra” is one of the Initiative taken by CVRCE TIF, as the
                name itself denotes individual's own Journey. Hence, this
                initiative will act as a platform for entrepreneurs to share
                journeys that matters, Ideas to be mobilized and much more. Our
                belief Statement: “Local people inspiring globally”.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="about-text">
              <h3>Student Associate Program:</h3>
              <p>
                Student Associate Program is a unique initiative, where CVRCE
                TIF is providing an opportunity for students to work as
                Associates. We are looking for individuals who can act as the
                team leaders as well as are having the ability to work as the
                part of a team, in the focused areas like, Community Managers,
                Content (Documentation),Events & outreach, Startup Research,
                IPR, IT & Graphics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
