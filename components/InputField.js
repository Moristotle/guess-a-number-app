import React from 'react';
import { } from 'react-native';
import styled from 'styled-components';

const InputField = props => {
    return (
        <Input {...props} />
    )
}

export default InputField;

const Input = styled.TextInput`
    width: ${props => props.width}px;
    height: 30px;
    border-bottom-color: grey;
    border-bottom-width: 1px;
    marginVertical: 10px;
    text-align: center;
`;