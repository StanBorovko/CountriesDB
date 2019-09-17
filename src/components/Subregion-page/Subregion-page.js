import React from 'react';
import { withRouter } from 'react-router-dom';
import {CountriesList} from "../rc-components";

const SubregionsPage = ({history, match}) => {
    const { region } = match.params;


    return (
        <React.Fragment>
            {/*<Filter/>*/}
            <CountriesList region={region} onItemSelected={null}/>

        </React.Fragment>
    );
};

export default withRouter(SubregionsPage);
