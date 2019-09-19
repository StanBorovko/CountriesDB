import React, {Component} from 'react';
import './style.css';
import {connect} from "react-redux";
import {getAllCountriesInRegion} from "../../actions";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import Spinner from "../Spinner/Spinner";
import CountriesInRegionCard from "../Countries-in-region-card/Countries-in-region-card";
import {withRouter} from "react-router-dom";


class AllCountriesInRegion extends Component {
    componentDidMount() {
        this.update();
    }

    componentDidUpdate(prevProps) {
        if (this.props.region !== prevProps.region) {
            this.update();
        }
    }


    update = () => {
        const {region} = this.props;
        // console.log(region);
        this.props.getAllCountriesInRegion(region);
        // const {countries, loading, error} = this.props;
/*
        this.setState({
            countries,
            loading,
            error
        })*/
    };

    render() {
        const {countries, loading, error} = this.props;
        console.log('all-in-reg', countries, loading, error);

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/>: null;
        const spinner = loading ? <Spinner/> : null;
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


export default withRouter(connect(mapStateToProps, {getAllCountriesInRegion})(AllCountriesInRegion));
