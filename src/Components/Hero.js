import img from "./images/3.jpeg";
import USC_img from "./images/USC.png"
import Typed from "react-typed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

export default function Hero() {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
      <Container data-aos="zoom-in" data-aos-delay="500">
        <Row>
          <Col lg={7} className="item-center">
            <p id="top">
              Hey <span class="wave">👋</span>! I'm
            </p>
            <h1>Nehal Borole</h1>
            <br />
            {/* <p>
              I'm a&nbsp;
              <span
                class="typed"
                data-typed-items="Developer, Tabla Player, Gamer"
              >
                <Typed
                  strings={["Developer", "Tabla Player", "Gamer"]}
                  loop
                  typeSpeed={90}
                  backSpeed={60}
                  smartBackspace
                  shuffle={false}
                  backDelay={500}
                  fadeOut={true}
                  fadeOutDelay={200}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
            </p> */}
            
            <p>
            <i class="bi bi-chevron-right"></i> Yet Another Software Engineer 
            </p>
            <p>
            <i class="bi bi-chevron-right"></i> Masters student at <b>University of Southern California</b> <span><img id="trojan" src={USC_img}/></span>
            </p>
            
            <div class="social-links">
              <a href="https://www.instagram.com/nehal_borole/">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="https://github.com/nehalb123">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/nehal-borole/">
                <i class="bx bxl-linkedin"></i>
              </a>
              <a href="mailto:nehal.borole@gmail.com">
                <i class="bx bx-envelope"></i>
              </a>
            </div>
            <br />
            <Button
              variant="outlined"
              target="_blank"
              href="https://drive.google.com/file/d/1AiHVgrzbncWBL5tYJiqLMQSnTmOByppL/view?usp=sharing"
              startIcon={<CloudDownloadIcon />}
              style={{
                color: "rgb(232, 239, 246)",
                borderColor: "rgb(232, 239, 246)",
              }}
            >
              Resume
            </Button>
          </Col>
          <Col
            lg={5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <img
              src={img}
              height="100%"
              width="65%"
              style={{
                borderRadius: "30px",
              }}
            />
          </Col>
          </Row>
      </Container>
    </section>
  );
}
