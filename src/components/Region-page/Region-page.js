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
import {withRouter} from 'react-router-dom';


class RegionPage extends Component {

    state = {
        currentFilter: null
    };

    componentDidMount() {
        this.update();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter || this.props.region !== prevProps.region) {
            this.update();
        }
    }

    update = () => {
        const {
            region,
            filter,
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

        this.setState({currentFilter: null});
    };

    onFilterChange = currentFilter => {
        this.setState({currentFilter});
    };

    hasSubregion = (country, filterValue) => {
        return country['subregion'] === filterValue;
    };

    hasLanguage = (country, filterValue) => {
        const {languages} = country;
        let flag = false;
        languages.forEach(language => {
            if (language['name'] === filterValue) {
                flag = true;
            }
        });
        return flag;
    };

    renderContent = () => {
        const {countries, filter, filterItems, region} = this.props,
            {currentFilter} = this.state;
        const countriesFiltered = countries.filter(country => {
            if (currentFilter) {
                if (filter === C.FILTER_BY_SUBREGIONS) {
                    return this.hasSubregion(country, currentFilter);
                } else if (filter === C.FILTER_BY_LANGUAGES) {
                    return this.hasLanguage(country, currentFilter)
                } else {
                    return true;
                }
            } else {
                return true;
            }
        });
        let pageTitle = '';
        if (filter === C.FILTER_BY_SUBREGIONS) {
            pageTitle += `Subregions of ${region}`;
        } else if (filter === C.FILTER_BY_LANGUAGES) {
            pageTitle += `Languages of ${region}`;
        } else {
            pageTitle += region;
        }
        return (
            <React.Fragment>
                <h1 className="text-center text-uppercase font-weight-bold text-warning">{pageTitle}</h1>
                <Filter items={filterItems}
                        filter={currentFilter}
                        onFilterChange={this.onFilterChange}/>
                <span className="ml-3 text-secondary">Current filter: {(currentFilter) ? currentFilter : 'All'}</span>
                <CountriesInRegionCard counties={countriesFiltered}/>

            </React.Fragment>
        )
    };


    render() {
        const {countries, loading, error, filter} = this.props;

        const hasData = !(loading || error);
        const errorMessage = error ? <Card.Body><ErrorIndicator/></Card.Body> : null;
        const spinner = loading ? <Card.Body><Spinner/></Card.Body> : null;
        const content = hasData ? this.renderContent(countries, filter) : null;
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
    return {
        countries: countries.countries,
        loading: countries.loading,
        error: countries.error,
        filterItems: filter.filterItems
    }
};

export default withRouter(connect(mapStateToProps, {
    getAllCountriesInRegion,
    getAllSubregions,
    getAllLanguages
})(RegionPage));