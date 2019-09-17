import React from 'react';
import ItemList from '../Item-list/Item-list';
import {
    withData,
    withRestcountriesService,
    withChildFunction,
    compose
} from '../hoc-helpers/index';

const renderName = ({name}) => <span>{name}</span>;

const mapCountriesMethodsToProps = RestCountriesService => {
    return {
        getData: RestCountriesService.getAllCountriesInRegion
    };
};

// const CountriesList = withRestcountriesService(mapCountriesMethodsToProps)(ItemList);
const CountriesList = compose(
    withRestcountriesService(mapCountriesMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

export {
    CountriesList
};
