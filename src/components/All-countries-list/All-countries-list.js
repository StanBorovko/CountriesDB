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
        // const {region} = this.props;
        // console.log(region);
        this.props.getAllCountries();
        // const {countries, loading, error} = this.props;
        /*
                this.setState({
                    countries,
                    loading,
                    error
                })*/
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
                                    // console.log(countries);
                                    // console.log('country in region',country, country['region'], region, country['region'] === region);
                                    return country['region'] === region;
                                })}/>
                                {/*<AllCountriesInRegion region={region.toLowerCase()}/>*/}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>);
            }
        );
    };

    render() {
        const {countries, loading, error} = this.props;
        // console.log('all-in-reg', countries, loading, error);

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? this.content(countries) : null;
        // console.log('all-in-reg', content);
        return (
            <Accordion>
                {errorMessage}
                {spinner}
                {content}
            </Accordion>
        );
    }
}

/*

const AllCountriesList = () => {
        let eventKey = -1;
        const content = C.REGIONS.map(region =>
            {
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
                        <AllCountriesInRegion region={region.toLowerCase()}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>);
            }
        );
        return (
            <Accordion>
                {content}
            </Accordion>
        );
    }
;

*/

const mapStateToProps = ({countries}) => {
    return {
        countries: countries.countries,
        loading: countries.loading,
        error: countries.error
    }
};

export default connect(mapStateToProps, {getAllCountries})(AllCountriesList);