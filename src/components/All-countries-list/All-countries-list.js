import React from 'react';
import './style.css';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import C from "../../constants";
import AllCountriesInRegion from "./All-countries-in-region";

const AllCountriesList = () => {
        let eventKey = 0;
        const content = C.REGIONS.map(region =>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        {region}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={eventKey++}>
                    <AllCountriesInRegion region={region.toLowerCase()}/>
                </Accordion.Collapse>
            </Card>
        );
        return (
            <Accordion>
                {content}
            </Accordion>
        );
    }
;


export default AllCountriesList;