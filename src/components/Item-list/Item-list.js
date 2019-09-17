import React from 'react';
import { withData } from '../hoc-helpers';
import RestCountriesService from '../../services/Rest-сountries-service';
import './style.css';
import ListGroup from "react-bootstrap/ListGroup";

const ItemList = props => {
    const {data, onItemSelected, children: renderLabel} = props;
    const items = data.map((item) => {
        const {numericCode} = item,
            label = renderLabel(item);
        return (
            <ListGroup.Item key={numericCode}
            onClick={() => onItemSelected(numericCode)}>
                {label}
            </ListGroup.Item>
        );
    });
    return (
      <ListGroup>
        {items}
      </ListGroup>
    );
};

const { getAllCountriesInRegion } = new RestCountriesService();

export default withData(ItemList, getAllCountriesInRegion);
