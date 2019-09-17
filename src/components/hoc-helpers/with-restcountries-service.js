import React from 'react';
import { RestCountriesServiceConsumer } from '../Rest-countries-service-context/Rest-сountries-service-context';

const withRestcountriesService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    return (
      <RestCountriesServiceConsumer>
        {
          (RestCountriesService) => {
            const serviceProps = mapMethodsToProps(RestCountriesService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </RestCountriesServiceConsumer>
    );
  }
};

export default withRestcountriesService;
