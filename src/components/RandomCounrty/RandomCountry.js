import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux'

import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../Error-indicator/Error-indicator';
import Jumbotron from "react-bootstrap/Jumbotron";
import CountryView from "../CountryView/CountryView";
import {getRandomCountry} from "../../actions";

class RandomCountry extends Component {
    static defaultProps = {
        updateInterval: 10000
    };

    state = {
        country: {},
        loading: true
    };

    // restCountriesService = new RestCountriesService();

    // countryCodes = getCounrtyCodes();

    componentDidMount() {
        //TODO: make fetching new country at loading;

        this.updateCountry();
        const {updateInterval} = this.props;
        this.interval = setInterval(this.updateCountry, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
/*
    onCountryLoaded = country => {
        // console.log(country);
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
    };*/

    updateCountry = () => {
        /*const {country, loading, error} = this.props.getRandomCountry();
        console.log('getRandomCountry', this.props.getRandomCountry());
        console.log('getRandomCountry', country, loading, error);*/
        this.props.getRandomCountry();
        const {country, loading, error} = this.props;
        // console.log('getRandomCountry', country, loading, error);

        this.setState({
            country,
            loading,
            error
        })
        /*
        const randomIndex = Math.floor(Math.random() * (this.countryCodes.length + 1)),
            randomCountryCode = this.countryCodes[randomIndex];
        this.restCountriesService
            .getCountry(randomCountryCode)
            .then(this.onCountryLoaded)
            .catch(this.onError);*/
    };

    render() {
        // const country = JSON.stringify(this.state.country);
        const {country, loading, error} = this.state;
        // console.log(country, loading, error);
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


const mapStateToProps = ({country}) => {
    // console.log('country', country);
    return {
    country: country.country,
    loading: country.loading,
    error: country.error
}};


export default connect(mapStateToProps,{getRandomCountry})(RandomCountry);
