import Button from "@material-ui/core/Button";
import Card from "react-bootstrap/Card";

const Achievements = () => {
    const items = [
        {
            // img: ubs,
            cardTitle: "UBS Recognition Award",
            cardText: "Issued on: <br/> Feb, 2019",
            // btnText: "See Credential",
            // btnUrl: "https://www.credential.net/bef2570d-7d63-4f07-be28-57ec4da87373",
        },
        {
            // img: iete,
            cardTitle: "IETE Project Competition",
            cardText: "Issued on: <br/> May, 2018",
            // btnText: "See Credential",
            // btnUrl: "https://www.youracclaim.com/badges/a5e09eea-6e4e-4934-bc2e-1f68679c1bb3/linked_in_profile",
        },
        {
            // img: abhikalp,
            cardTitle: "Abhikalp 2018",
            cardText: "Issued on: <br/> May, 2018",
            // btnText: "See Credential",
            // btnUrl: "https://www.youracclaim.com/badges/caf3f573-a61d-4e0e-8560-5353a6a83693/linked_in_profile",
        },
        {
            // img: inc,
            cardTitle: "Impetus and Concepts",
            cardText: "Second prize for final year project",
        },
    ];
    return (
        <section id="achievements" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Achievements</h2>
                </div>
                <div class="row">
                    {items.map((data, i) => (
                        <div
                            class="col-sm-3 d-flex justify-content-center"
                            key={i}
                        >
                            {/* <div class="card shadow-large h-100 achievement-card" style={{maxWidth: "270px", background: "#343a40", padding: "20px"}}>
                    <img class="card-img-top responsive" src={data.img} height="50%" width="30%"/>
                  <div class="card-body">
                    <h5 class="card-title" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "16px"}}>{data.cardTitle}</h5>
                    <p class="card-text" style={{color: "#74808a"}}>{data.cardText}</p>
                    <a href="https://www.credential.net/bef2570d-7d63-4f07-be28-57ec4da87373" target="_blank" class="btn btn-primary">See Credential</a>
                  </div>
                </div> */}
                            <Card
                                style={{
                                    width: "16rem",
                                    background: "#1F3247",
                                    padding: "20px",
                                    borderColor: "#0463bb",
                                    marginBottom: "10px",
                                }}
                                className="text-center"
                            >
                                {/* <Card.Img variant="top" src={data.img} /> */}
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "rgba(255, 255, 255, 0.7)",
                                            fontSize: "18px",
                                            fontFamily: "JetBrains Mono"
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <br></br>
                                    <Card.Text style={{ color: "#74808a" }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                    {data.btnText && (
                                        <Button
                                            variant="contained"
                                            color="default"
                                            target="_blank"
                                            href={data.btnUrl}
                                        >
                                            {data.btnText}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
