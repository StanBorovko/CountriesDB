import React from 'react';
import './style.css';
import ListGroup from "react-bootstrap/ListGroup";
import withRestcountriesService from "../hoc-helpers/with-restcountries-service";
import RestCountriesService from '../../services/Rest-сountries-service';
import {withData} from "../hoc-helpers";
import compose from "../hoc-helpers/compose";

const CountriesInRegionCard = ({region}) => {
    console.log(region);
    const items = region.map(country => {
        return <ListGroup.Item>{country.name}</ListGroup.Item>
    });
    return (
        <ListGroup>
            {items}
        </ListGroup>
    );
};

const mapCountriesInRegionMethodsToProps = RestCountriesService => {
    return {
        getData: RestCountriesService.getAllCountriesInRegion
    };
};

export default compose(
    withRestcountriesService(mapCountriesInRegionMethodsToProps),
    withData
)(CountriesInRegionCard);