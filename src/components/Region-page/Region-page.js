import React, {Component} from 'react';
import './style.css';
import Card from "react-bootstrap/Card";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import Spinner from "../Spinner/Spinner";
import CountriesInRegionCard from "../Countries-in-region-card/Countries-in-region-card";
import Filter from "../Filter/Filter";
import C from "../../constants";
import {connect} from "react-redux";
import {getAllCountriesInRegion, getAllSubregions, getAllLanguages} from "../../actions";
import { withRouter } from 'react-router-dom';



class RegionPage extends Component {

    componentDidMount() {
        // this.updateCountries();
        this.update();
    }

    componentDidUpdate(prevProps) {
        console.log('this.props.countries',this.props.countries);
        console.log('prevProps.countries',prevProps.countries);
        console.log('this.props.filterItems',this.props.filterItems);
        console.log('prevProps.filterItems',prevProps.filterItems);
        console.log('this.props.filter',this.props.filter);
        console.log('prevProps.filter',prevProps.filter);
        if (this.props.filter !== prevProps.filter || this.props.region !== prevProps.region) {
            this.update();
        }
    }

    update = () => {
        const {
            region,
            filter ,
            getAllCountriesInRegion,
            getAllSubregions,
            getAllLanguages
        } = this.props;

        getAllCountriesInRegion(region);

        if (filter === C.FILTER_BY_SUBREGIONS) {
            getAllSubregions(region);
        } else if (filter === C.FILTER_BY_LANGUAGES) {
            getAllLanguages(region)
        } else {
            this.props.filterItems = [];
        }
    };
/*

    updateCountries = () => {
        const {region} = this.props;
        // console.log(region);
        this.props.getAllCountriesInRegion(region);
        const {countries, loading, error} = this.props;

        /!*this.setState({
            countries,
            loading,
            error
        })*!/
    };
*/

    hasLanguage = (country, filterValue) => {
        const {languages} = country;
        console.log(country);
        languages.forEach(language => {if (language['name'] === filterValue) {
            return true
        }});
        return false;
    };

    renderContent = (countries, filter, filterValue) => {
        /*const {region, getAllSubregions} = this.props;
        getAllSubregions(region);*/
        const {filterItems, currentFilter} = this.props;
        console.log('filterItems', filterItems);
        /*const countriesFiltered = countries.filter(country => {
            if (filter === C.FILTER_BY_SUBREGIONS) {
                return country['subregion'] === filterValue;
            } else if (filter === C.FILTER_BY_LANGUAGES) {
                return this.hasLanguage(country, filterValue)
            } else {
                return country === country;
            }
        });*/
        return (
            <React.Fragment>
                <Filter items={filterItems}/> <span>Current filter: {currentFilter}</span>
                <CountriesInRegionCard counties={countries}/>

            </React.Fragment>
        )
    };


    render() {
        const {countries, loading, error, filter} = this.props;
        console.log('all-in-reg', countries, loading, error);

        const hasData = !(loading || error);
        const errorMessage = error ? <Card.Body><ErrorIndicator/></Card.Body> : null;
        const spinner = loading ? <Card.Body><Spinner/></Card.Body> : null;
        const content = hasData ? this.renderContent(countries, filter, '') : null;
        // const content =  null;
        return (
            <div className="p-3">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const mapStateToProps = ({countries, filter}) => {
    console.log('mapStateToProps', filter);
    return {
        countries: countries.countries,
        loading: countries.loading,
        error: countries.error,
        filterItems: filter.filterItems
    }
};

export default withRouter(connect(mapStateToProps, {getAllCountriesInRegion, getAllSubregions, getAllLanguages})(RegionPage));