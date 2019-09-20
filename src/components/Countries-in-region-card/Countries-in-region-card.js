import React from 'react';
import './style.css';
import Card from "react-bootstrap/Card";
import ToggleFav from "../Toggle-fav/Toggle-fav";

const CountriesInRegionCard = ({counties}) => {
    const items = counties.map(country => {
        return <Card.Body key={country["alpha3Code"]} className="d-flex justify-content-between pt-2 pb-2">
            <div className="text-dark">
                <img src={country["flag"]} alt="country-flag" className="country-flag"/>
                <span className="ml-2">{country['name']}</span>
            </div>
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