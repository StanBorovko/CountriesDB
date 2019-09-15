import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CountryView = ({country}) => {
    const {
        name,
        capital,
        currencies: [{name: currencyName, symbol: currencySymbol}],
        languages: [{name: languageName}],
        flag,
        population
    } = country;
    return (
        <Container className="country-view">
            <Row>
                <Col xs={7}>
                    <div className="country-view__name h1">{name}</div>
                    <div className="country-view__capital h2">Capital: {capital}</div>
                    <div className="country-view__population h4">Population: {population}</div>
                    <div className="country-view__language h4">Language: {languageName}</div>
                    <div className="country-view__currency">
                        <span className="country-view__currency-name h4">Currency: {currencyName} {currencySymbol} </span>
                    </div>
                </Col>
                <Col xs={5}>
                    <img src={flag} alt={name + ' flag'} className="country-view__flag"/>
                </Col>
            </Row>
        </Container>
    )
};

export default CountryView;
/*

<div className="country-view">
    <img src={flag} alt={name + ' flag'} className="country-view__flag"/>
    <h3 className="country-view__name">{name}</h3>
    <div className="country-view__capital">Capital: {capital}</div>
    <div className="country-view__population">Population: {population}</div>
    <div className="country-view__language">Language: {languageName}</div>
    <div className="country-view__currency">
        <div className="country-view__currency-name">Currency: {currencyName}</div>
        <div className="country-view__symbol badge badge-light">{currencySymbol}</div>
    </div>
</div>*/
