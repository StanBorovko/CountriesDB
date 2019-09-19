import React from 'react';
import './style.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Filter = ({items, filter, onFilterChange}) => {
    let id = 2;
    const filterItems = items.map(item => (
            <Dropdown.Item eventKey={id}
                           key={id++}
                           onClick={() => {
                               onFilterChange(item)
                           }}>
                {item}
            </Dropdown.Item>
        )),
        filterTitle = (filter) ? filter : "Filters";
    return (
        <ButtonGroup vertical>
            <DropdownButton as={ButtonGroup} title={filterTitle} id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1" key="1" onClick={() => {
                    onFilterChange(null)
                }}>All</Dropdown.Item>
                {filterItems}
            </DropdownButton>
        </ButtonGroup>
    );
};

export default Filter;