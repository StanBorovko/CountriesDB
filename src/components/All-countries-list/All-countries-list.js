import React, {Component} from 'react';
import './style.css';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import C from "../../constants";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import Spinner from "../Spinner/Spinner";
import CountriesInRegionCard from "../Countries-in-region-card/Countries-in-region-card";
import {connect} from "react-redux";
import {getAllCountries} from "../../actions";

class AllCountriesList extends Component {
    componentDidMount() {
        this.update();
    }

    componentDidUpdate(prevProps) {
        if (this.props.region !== prevProps.region) {
            this.update();
        }
    }

    update = () => {
        this.props.getAllCountries();
    };

    content = (countries) => {
        let eventKey = -1;
        return C.REGIONS.map(region => {
                eventKey++;
                return (
                    <Card key={eventKey}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={eventKey.toString()}>
                                {region}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={eventKey.toString()}>
                            <Card.Body>
                                <CountriesInRegionCard counties={countries.filter(country => {
                                    return country['region'] === region;
                                })}/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>);
            }
        );
    };

    render() {
        const {countries, loading, error} = this.props;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? this.content(countries) : null;
        return (
            <Accordion>
                {errorMessage}
                {spinner}
                {content}
            </Accordion>
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

export default connect(mapStateToProps, {getAllCountries})(AllCountriesList);