import React from 'react';
import './style.css';
import Card from "react-bootstrap/Card";
import ToggleFav from "../Toggle-fav/Toggle-fav";

const CountriesInRegionCard = ({counties}) => {
    const items = counties.map(country => {
        return <Card.Body key={country["alpha3Code"]}>
            {country['name']}
            <ToggleFav country={country['name']}/>
        </Card.Body>
    });
    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    );
};


export default CountriesInRegionCard;