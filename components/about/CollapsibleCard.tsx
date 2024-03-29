import Image from "next/image";
import { useState, ReactNode, SyntheticEvent } from "react";

import { Card, Accordion } from "react-bootstrap";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import styles from "../../styles/etc.module.scss";

interface CollapsibleCardProps {
  children: ReactNode;
  title: string;
  imgSrc: any;
  imgDesc: any;
  link?: string;
}

const CollapsibleCard = ({
  children,
  title,
  imgSrc,
  imgDesc,
  link,
}: CollapsibleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const styling = {
    backgroundColor: "#f9f9fa",
  };

  return (
    <Accordion className={"mb-4"}>
      <Card style={styling}>
        {link ? (
          <Card.Link href={link} target={"_blank"} rel={"noopener noreferrer"}>
            <Image
              src={imgSrc}
              alt={imgDesc}
              className={"card-img-top"}
              placeholder={"blur"}
            />
          </Card.Link>
        ) : (
          <Image
            src={imgSrc}
            alt={imgDesc}
            className={"card-img-top"}
            placeholder={"blur"}
          />
        )}

        <Card.Body>
          <Accordion.Toggle
            eventKey={"0"}
            as={Card.Title}
            onClick={toggleExpansion}
            className={"d-flex justify-content-between"}
          >
            {title}

            {isExpanded ? (
              <BsChevronUp className={styles.cardToggle} />
            ) : (
              <BsChevronDown className={styles.cardToggle} />
            )}
          </Accordion.Toggle>

          <Accordion.Collapse eventKey={"0"}>
            <Card.Text>{children}</Card.Text>
          </Accordion.Collapse>
        </Card.Body>
      </Card>
    </Accordion>
  );
};

export default CollapsibleCard;
