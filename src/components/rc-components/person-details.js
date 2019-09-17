import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSWApiService } from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (SWApiService) => {
  return {
    getData: SWApiService.getPerson,
    getImageUrl: SWApiService.getPersonImage
  }
};

export default withSWApiService(mapMethodsToProps)(PersonDetails);
