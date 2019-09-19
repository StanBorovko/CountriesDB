import React, {Component} from 'react';
import './style.css';
import Card from "react-bootstrap/Card";
import {connect} from "react-redux";
import {getAllCountriesInRegion} from "../../actions";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import Spinner from "../Spinner/Spinner";
import CountriesInRegionCard from "../Countries-in-region-card/Countries-in-region-card";


class AllCountriesInRegion extends Component {
    componentDidMount() {
        this.updateCountries();
    }

    updateCountries = () => {
        const {region} = this.props;
        // console.log(region);
        this.props.getAllCountriesInRegion(region);
        const {countries, loading, error} = this.props;

        this.setState({
            countries,
            loading,
            error
        })
    };

    render() {
        const {countries, loading, error} = this.props;
        // console.log('all-in-reg', countries, loading, error);

        const hasData = !(loading || error);
        const errorMessage = error ? <Card.Body><ErrorIndicator/></Card.Body> : null;
        const spinner = loading ? <Card.Body><Spinner/></Card.Body> : null;
        const content = hasData ? <CountriesInRegionCard counties={countries}/> : null;
        // console.log('all-in-reg', content);
        return (
            <React.Fragment>
                {errorMessage}
                {spinner}
                {content}
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({countries}) => {
    return {
        countries: countries.countries,
        loading: countries.loading,
        error: countries.error
    }
};


export default connect(mapStateToProps, {getAllCountriesInRegion})(AllCountriesInRegion);
