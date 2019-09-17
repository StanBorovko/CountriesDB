import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSWApiService } from '../hoc-helpers';

const StarShipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = SWApiService => {
  return {
    getData: SWApiService.getStarShip,
    getImageUrl: SWApiService.getStarShipImage
  }
};

export default withSWApiService(mapMethodsToProps)(StarShipDetails);
