import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSWApiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = SWApiService => {
  return {
    getData: SWApiService.getPlanet,
    getImageUrl: SWApiService.getPlanetImage
  };
};

export default withSWApiService(mapMethodsToProps)(PlanetDetails);
