import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {

  const skills_programming_language = [
    "Java", "Python", "Javascript", "C++", "C", "SQL", "Typescript"
  ]
  const skills_frameworks = [
    "Spring Boot", "React", "JPA", "ROS", "scikit-learn", "PyTorch", "Keras",
    "OpenCV"
  ]
  const skills_databases = [
    "MySQL", "Postgres", "CockroachDB", "MongoDB", "Cassandra"
  ]
  const skills_tools = [
    "Git", "Maven", "Splunk", "Azure", "Kafka", "Docker", "Consul"
  ]
  return (
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>
        
        <div class = "grid-container">
          
         
          <ul class = "grid-item grid-item-1">
          <h4>Languages</h4>
              {
                skills_programming_language.map((skill, i) => (
                  <p class="languages" key={i}>{skill}</p>
                ))
              }
          </ul>
          
          <ul class = "grid-item grid-item-2">
          <h4>Databases</h4>
              {
                skills_databases.map((skill, i) => (
                  <p class="databases" key={i}>{skill}</p>
                ))
              }
          </ul>
          
          <ul class = "grid-item grid-item-3">
          <h4>Frameworks/Libraries</h4>
              {
                skills_frameworks.map((skill, i) => (
                  <p class="frameworks" key={i}>{skill}</p>
                ))
              }
          </ul>
          
          <ul class = "grid-item grid-item-4">
          <h4>Tools</h4>
              {
                skills_tools.map((skill, i) => (
                  <p class="tools" key={i}>{skill}</p>
                ))
              }
          </ul>

          
          
        </div>

      </div>
    </section>
  );
}

export default Skills;