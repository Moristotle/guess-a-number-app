import React from 'react';
import { } from 'react-native';
import styled from 'styled-components';

import Colors from '../constants/Colors';

const NumberContainer = props => {
    return (
        <Container {...props}>
            <Number>
                {props.children}
            </Number>
        </Container>
    )
}

export default NumberContainer;

const Container = styled.View`
    border-width: 2px;
    border-color: ${Colors.primary};
    padding: 10px;
    border-radius: 10px;
    marginVertical: 10px;
    align-items: center;
    justify-content: center;
`;

const Number = styled.Text`
    font-size: 22px;
    color: ${Colors.primary};
`;

