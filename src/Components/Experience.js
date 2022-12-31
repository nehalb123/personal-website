import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
    {
      date: "June 2022 - August 2022",
      cardTitle: "BlackRock",
      cardSubtitle: "Software Engineering Intern",
      // cardDetailedText: [
      //   "Developing new security detections and platform empowering service teams.",
      // ].map(function (text) {
      //   return <li>{text}</li>;
      // }),
    },
    {
      date: "July 2018 – July 2021",
      cardTitle: "UBS",
      cardSubtitle: "Software Engineer",
      cardDetailedText: [
        "Collected JSON data by web-scraping, using open API end points and storing it in a RDBMS.",
        "Responsible for building SKU Classification system using the collected data.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "September 2017 - June 2018",
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
