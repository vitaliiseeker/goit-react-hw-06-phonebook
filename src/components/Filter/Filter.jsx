import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from "./Filter.styled"


export const Filter = ({ value, onChange }) => (
    <>
        <Label>

            <Input
                type="text"
                value={value}
                placeholder="Find contacts by name"
                onChange={onChange}
            />
        </Label>
    </>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

