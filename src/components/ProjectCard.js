import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./css/Cards.css"; 

function ProjectCard(props) {
  return ( 
    <Card className="project-card-view bg-gradient-to-r from-slate-50 to-slate-300"> 
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="text-gray-900 text-center font-bolder">{props.title}</Card.Title>
        <Card.Text className="text-gray-700 font-Raleway" style={{ textAlign: "justify" }}>
          {props.description} 
        </Card.Text>
        <Button
          className="viewbtn"
          variant="primary"
          href={props.ghLink}
          target="_blank"
        >
          View
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
