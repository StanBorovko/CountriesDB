import React from 'react';
import './style.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Filter = ({items}) => {
    let id = 2;
    const filterItems = items.map(item => <Dropdown.Item eventKey={id++} key={item}>{item}</Dropdown.Item>);
    return (
        <ButtonGroup vertical>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1" key="">All</Dropdown.Item>
                {filterItems}
            </DropdownButton>
        </ButtonGroup>
    );
};

export default Filter;