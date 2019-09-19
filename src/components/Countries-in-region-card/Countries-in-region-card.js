import React from 'react';
import './style.css';
import Card from "react-bootstrap/Card";

const CountriesInRegionCard = ({counties}) => {
    // console.log(counties);
    const items = counties.map(country => {
        return <Card.Body>{country.name}</Card.Body>
    });
    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    );
};


export default CountriesInRegionCard;