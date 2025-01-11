import React from "react";
import { Col, Row } from "react-bootstrap";

import Java from "../../../assets/imgs/techstack/java.png";
import Python from "../../../assets/imgs/techstack/python.png";
import CLanguage from "../../../assets/imgs/techstack/c_language.png";
import CPP from "../../../assets/imgs/techstack/cpp.png";
import RLanguage from "../../../assets/imgs/techstack/r_language.png";
import SQL from "../../../assets/imgs/techstack/sql.png";


const programmingLang = [
    { src: Python, alt: "Python", tooltipContent: "Python" },
    { src: Java, alt: "Java", tooltipContent: "Java" },
    { src: SQL, alt: "SQL", tooltipContent: "SQL" },
   
    { src: CLanguage, alt: "C", tooltipContent: "C" },
    { src: CPP, alt: "C++", tooltipContent: "C++" },
   
];

function ProgrammingLangStack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {programmingLang.map((pl) => (
                <Col key={pl.alt} xs={4} md={2} className="tech-icons">
                    <img
                        src={pl.src}
                        width={100}
                        alt={pl.alt}
                        data-tooltip-id="tech-tooltip"
                        data-tooltip-content={pl.tooltipContent}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default ProgrammingLangStack;
