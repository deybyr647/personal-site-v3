import Link from "next/link";

import { Card } from "react-bootstrap";

import styles from "../../styles/etc.module.scss";

interface ProjectProps {
  project: {
    githubLink: string;
    imgSrc: string;
    liveDemoLink: string;
    logoSrc: string;
    longDescription: string;
    projectName: string;
    shortDescription: string;
    tagline: string;
    techStack: string[];
    uid?: string;
  };
  isAdmin: boolean;
}

const ProjectCard = ({ project, isAdmin }: ProjectProps) => {
  const styling = {
    backgroundColor: "#f9f9fa",
  };

  return (
    <Card style={styling}>
      <Card.Img
        src={project.imgSrc}
        alt={project.projectName}
        className={"border"}
      />
      <Card.Body>
        <Card.Title>{project.projectName}</Card.Title>

        <Card.Text>{project.shortDescription}</Card.Text>

        {isAdmin ? (
          <Link href={`/admin/${project.uid}`}>
            <a className={`btn ${styles.linkButton}`}>Edit Project</a>
          </Link>
        ) : (
          <Link href={`/projects/${project.uid}`}>
            <a className={`btn ${styles.linkButton}`}>Learn More</a>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export type { ProjectProps };
export default ProjectCard;
