import React, {Component} from 'react';
import './style.css';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../Error-indicator/Error-indicator';
import RestCountriesService from "../../services/Rest-сountries-service";
import {getCounrtyCodes} from "../../resorces/country-codes";
import Jumbotron from "react-bootstrap/Jumbotron";
import CountryView from "../CountryView/CountryView";

export default class RandomCountry extends Component {
    static defaultProps = {
        updateInterval: 10000
    };

    state = {
        country: {},
        loading: true
    };

    restCountriesService = new RestCountriesService();

    countryCodes = getCounrtyCodes();

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onCountryLoaded = country => {
        console.log(country);
        this.setState({
            country,
            loading: false,
            error: false
        });
    };

    onError = err => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const randomIndex = Math.floor(Math.random() * (this.countryCodes.length + 1)),
            randomCountryCode = this.countryCodes[randomIndex];
        this.restCountriesService
            .getCountry(randomCountryCode)
            .then(this.onCountryLoaded)
            .catch(this.onError);
    };

    render() {
        // const country = JSON.stringify(this.state.country);
        const {country, loading, error} = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <CountryView country={country}/> : null;
        return (
            <Jumbotron className="d-flex justify-content-center align-items-center bg-light text-dark">
                {errorMessage}
                {spinner}
                {content}
            </Jumbotron>
        )

    }
}

