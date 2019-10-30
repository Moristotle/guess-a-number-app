import React from  'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import Colors from '../constants/Colors';

const CustomButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
            <ButtonWrapper {...props}>
                <ButtonContent>
                    {props.children}
                </ButtonContent>
            </ButtonWrapper>
        </TouchableOpacity>
    )
}

export default CustomButton;

const ButtonWrapper = styled.View`
    background-color: ${Colors.primary};
    paddingVertical: 12px;
    paddingHorizontal: 30px;
    border-radius: 25px;
    flex-direction: row;
    align-items: center;
    text-align: center;
`;

const ButtonContent = styled.Text`
    color: white;
   font-size: 18px;
`;