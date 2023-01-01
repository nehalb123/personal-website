import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import Chip from "@material-ui/core/Chip";

export default function Experience() {
  const items = [
    {
      date: "June 2022 - August 2022",
      technologies: ["Java", "Kotlin", "Splunk"],
      cardTitle: "BlackRock",
      cardSubtitle: "Software Engineering Intern",
      cardDetailedText: [
        "Enhanced a functionality for tax liability by introducing one-sided slack variables which are used in the portfolio optimization problem.",
        "Developed a Splunk Dashboard for the clients team which tracks healthiness and displays internal performance breakdown of the proposal services used for producing client reports and debugging."
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "July 2018 – July 2021",
      technologies: ["Java", "React", "Spring Boot", "JPA", "CockroachDB", "Consul", "Kafka", "ELK"],
      cardTitle: "UBS",
      cardSubtitle: "Software Engineer",
      cardDetailedText: [
        "Developed a microservices based programming platform which focused on availability and performance for UBS-specific programming contest for 5k+ employees. Event driven application which has Kafka as the backbone.",
        "Developed generic React based components for trading violations based application which were used by the entire development team. These components significantly reduced the size of bundle and load time. Improved business engagement by migrating legacy application meant for external money managers to ReactJS.",
        "Implemented a multithreaded functionality to upload financial models which reduced the upload time and made the UI non-blocking. Built and maintained RESTful APIs that were utilized for validations in the Advisory application. Increased test coverage using JUnit and Mockito.",

      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "September 2017 - June 2018",
      technologies: ["C++", , "ROS", "Javascript"],
      cardTitle: "Theta Controls",
      cardSubtitle: "Intern",
      cardDetailedText: [
        "Created an autonomous robot using ROS framework and Nvidia Jetson TK1 to navigate in warehouses and assembly lines.",
        "The autonomous vehicle uses modified version of ROS navigation stack(SLAM) and YOLOv2 to detect objects",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#343a40" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "#0563bb",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "14",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "350",
                        color: "#7e8890",
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "#74808a",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                    <div className="experience-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
