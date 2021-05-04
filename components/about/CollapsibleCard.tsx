import { useState } from "react";

import { Card, Accordion } from 'react-bootstrap';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import styles from '../../styles/etc.module.css';

interface CollapsibleCardProps {
    children: React.ReactNode
    title: string
    imgSrc: string
    imgDesc: string
}

const CollapsibleCard = ({children, title, imgSrc, imgDesc}: CollapsibleCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    }

    return (
        <Accordion className={"mb-4"}>
            <Card>
                <Card.Img src={imgSrc} alt={imgDesc}/>

                <Card.Body>
                    <Accordion.Toggle
                        eventKey={"0"}
                        as={Card.Title}
                        onClick={toggleExpansion}
                        className={"d-flex justify-content-between"}
                    >
                        {title}

                        {isExpanded ?
                            <BsChevronUp className={styles.cardToggle}/>
                            :
                            <BsChevronDown className={styles.cardToggle}/>
                        }
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey={"0"}>
                        <Card.Text>
                            {children}
                        </Card.Text>
                    </Accordion.Collapse>
                </Card.Body>
            </Card>
        </Accordion>
    )
}

export default CollapsibleCard;