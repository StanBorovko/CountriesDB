import React from 'react';
import './style.css';
import RandomCountry from "../RandomCounrty/RandomCountry";
import AllCountriesList from "../All-countries-list/All-countries-list";

const HomePage = () => {
    return (
        <React.Fragment>
            <RandomCountry/>
            <AllCountriesList/>
        </React.Fragment>
    )
};

export default HomePage;