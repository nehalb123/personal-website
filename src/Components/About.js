import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <Row>
          {/* <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              height="100%"
              width="50%"
              style={{ borderRadius: "50%" }}
            />
          </Col> */}
          <Col lg={10} pt={4} className="content" >
            <br></br>
            <div>
            <p>Hello! I'm a polyglot developer with inclination towards developing backend systems. I have 3 years of work experience in building systems for 
             large financial institutions. My software development experience is not limited to building distributed services but also includes working on 
             embedded systems and robotics.  I am interested in:</p>
            <p class ="bullet">Distributed Systems</p>
            <p class ="bullet">Machine Learning</p>
            <p class ="bullet">Deep Learning</p>
            <p class ="bullet">Robotics</p>
            <p class ="bullet">Finance</p>
            <br/>
            <p style={{ color: "rgb(232, 239, 246)" }}>
            I am a strong believer of Master Oogway's 🐢 quote, <i>“If you only do what you can do, you will never be more than you are now.”</i>
            </p>
            <br></br>
            <p style={{ color: "rgb(232, 239, 246)" }}>
              I'm always up for a discussion on an interesting idea which requires engineering, feel free to reach out to me!
            </p>
            </div>
            <br></br>
            <div>
              
  
              
             
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+1 2136677306</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:nehal.borole@gmail.com">
                      nehal.borole@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
             
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
