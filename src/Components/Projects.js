import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "Medical Data Generation using SOTA Transformer model",
      cardDetailedText: [
        "As medical data access is limited due to patient confidentiality, this project aims to generate synthetic data using Transformer.",
        "Using data augmentation, such datasets can be used for NLP model development on downstream clinically relevant tasks.",
        
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "PyTorch", "Pandas", "medspaCy"],
      links: [
        {
          url: "https://github.com/nehalb123/SyntheticMedicalDataGeneration",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Human Activities Classification on Time Series Data",
      cardDetailedText: [
        "Implemented a logistic regression model (with an accuracy of 93%) using case-controlled sampling technique to classify bending vs other activities on a dataset obtained by a Wireless Sensor Network.",
        "Using the same dataset, the task of multi-class activities (\"bending\", \"walking\", \"cycling\", \"lying\", \"sitting\", \"standing\") classification was performed using Gaussian and Multinomial Naive Bayes classifier with an accuracy of 90%",
        
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "scikit-learn", "Pandas"],
      links: [
        {
          url: "https://github.com/nehalb123/",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Lazers Puzzle Game",
      cardDetailedText: [
        "Guide the laser to its destination in this fun game.",
        "This game has 86 levels and 13 mechanics!",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["C#", "Unity"],
      links: [
        {
          url: "https://github.com/EdwinLeon98/Enigma",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Meeting Minutes",
      cardDetailedText: [
        "Built an NLP based application which can summarize meeting audio to text using Azure Cognitive Services and TextRank Algorithm.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "React", "Azure Cognitive Services"],
      links: [
        {
          url: "https://github.com/nehalb123/meeting-minutes",
          text: "View Source Code",
        },
      ],
    }
  ];

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  const addButton = () => (
    <Fab color="primary" color="blue" aria-label="add">
      <AddIcon />
    </Fab>
  );

  return (
    <section id="projects" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#1F3247" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div>
                        <br></br>
                        <Button
                          key={j} // eslint-disable-line react/no-array-index-key
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
