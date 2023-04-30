import React from "react";
import "./css/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import useradminpanel from "../images/dashboard.png";
import tindog from "../images/tindog.png";
import clustering from "../images/fuzzyClustering.png";

function Projectlist() {
  return (
    <div className="rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Dashboard Panel"
                description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                ghLink="https://steady-youtiao-bfcbb8.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={tindog}
                isBlog={false}
                title="Tindog"
                description="Tindog is a hypothetical dog dating application that can be created using the Bootstrap framework for web development. Bootstrap is a popular front-end development framework that provides pre-designed HTML, CSS, and JavaScript components that can be easily customized and integrated into a web application."
                ghLink="https://lucent-brigadeiros-2c2699.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={clustering}
                isBlog={false}
                title="Fuzzy Clustering Visualizer"
                description="A fuzzy clustering visualizer made using HTML, CSS, and JavaScript is a web-based application that enables users to visualize the results of fuzzy clustering algorithms on a dataset. Fuzzy clustering is a technique used in data analysis and machine learning to group similar data points into clusters based on their similarity."
                ghLink="https://radiant-basbousa-ac81d0.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
