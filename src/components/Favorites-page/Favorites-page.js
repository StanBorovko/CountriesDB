import React, {Component} from 'react';
import "./style.css";
import CountriesInRegionCard from "../Countries-in-region-card/Countries-in-region-card";
import Card from "react-bootstrap/Card";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import Spinner from "../Spinner/Spinner";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getAllFavorites} from "../../actions";
import {compareArrays} from "../../resorces/arrayComparator";


class FavoritesPage extends Component {

    componentDidMount() {
        this.update();
    }

    componentDidUpdate(prevProps) {
        if (!compareArrays(this.props.countries, prevProps.countries)) {
            this.update();
        }
    }

    update = () => {
        const {getAllFavorites} = this.props;

        // getAllFavorites();
    };

    renderContent = () => {
        const {countries} = this.props;
        let pageTitle = 'Favorite Countries';
        return (
            <React.Fragment>
                <h1 className="text-center text-uppercase font-weight-bold text-warning">{pageTitle}</h1>
                <h2 className="text-center text-uppercase font-weight-bold text-warning">Page under construction</h2>
                {/*<CountriesInRegionCard counties={countries}/>*/}

            </React.Fragment>
        )
    };


    render() {
        const {countries, loading, error} = this.props;

        const hasData = !(loading || error);
        const errorMessage = error ? <Card.Body><ErrorIndicator/></Card.Body> : null;
        const spinner = loading ? <Card.Body><Spinner/></Card.Body> : null;
        const content = hasData ? this.renderContent(countries) : null;
        return (
            <div className="p-3">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const mapStateToProps = ({favorites}) => {
    return {
        countries: favorites.favorites
    }
};

export default withRouter(connect(mapStateToProps, {getAllFavorites})(FavoritesPage));