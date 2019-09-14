import React from 'react';

const {
    Provider : RestCountriesServiceProvider,
    Consumer : RestCountriesServiceConsumer
} = React.createContext();

export {
    RestCountriesServiceProvider,
    RestCountriesServiceConsumer
};
