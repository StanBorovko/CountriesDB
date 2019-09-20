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

    componentDidMount() {
        this.updateCountry();
        const {updateInterval} = this.props;
        this.interval = setInterval(this.updateCountry, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateCountry = () => {
        this.props.getRandomCountry();
        const {country, loading, error} = this.props;

        this.setState({
            country,
            loading,
            error
        })
    };

    render() {
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


const mapStateToProps = ({country}) => {
    return {
        country: country.country,
        loading: country.loading,
        error: country.error
    }
};


export default connect(mapStateToProps, {getRandomCountry})(RandomCountry);
