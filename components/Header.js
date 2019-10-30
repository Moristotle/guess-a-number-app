import React from 'react';
import { } from 'react-native';
import styled from 'styled-components';

import Colors from '../constants/Colors';

const Header = props => {
    return (
        <HeaderWrapper>
            <Title>{props.title}</Title>
        </HeaderWrapper>
    );
}

export default Header; 

const HeaderWrapper = styled.View`
    width: 100%;
    height: 90px;
    padding-top: 36px;
    background-color: ${Colors.primary};
    align-items: center;
    justify-content: center;
    border-bottom-color: black;
    border-bottom-width: 2px;
`;

const Title = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;