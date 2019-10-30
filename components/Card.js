import React from 'react';
import { } from 'react-native';
import styled from 'styled-components';

const Card = props => {
    return (
        <CardWrapper {...props}>
            {props.children}
        </CardWrapper>
    )
}

export default Card;

//debug the problem of passing props!
// ${props => props.width }; - FAILS
const CardWrapper = styled.View`
    width: ${props => props.width}px;
    max-width: ${props => props.maxWidth}%;
    align-items: center;
    shadowColor: black;
    shadowOffset: 0px 2px;
    shadowRadius: 6px;
    shadowOpacity: 0.26;
	elevation: 5;
    background-color: white;
	padding: 20px;
	border-radius: 10px;

`;