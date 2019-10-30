import React from 'react';
import { } from 'react-native';
import styled from 'styled-components';

import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';

const GameOverScreen = props => {
    return (
            <Wrapper>
                <Title>The game is over!</Title>
                <ImageContainer>
                    <BackgroundImage 
                    source={require('../assets/dab.png')}
                    />
                </ImageContainer>
                <TextContainer>
                    <Text>
                        I needed{' '} 
                        <TextHighlight>{props.roundsNumber}</TextHighlight> rounds to 
                        guess your number{' '} 
                        <TextHighlight>{props.userNumber}</TextHighlight>
                    </Text>
                </TextContainer>
                <CustomButton onPress={props.onRestart}>
                    NEW GAME
                </CustomButton>

            </Wrapper>
  
    );

}

export default GameOverScreen;

const ImageContainer = styled.View`
    width: 300px;
    height: 300px;
    border-radius: 150px;
    border-width: 3px;
    border-color: black;
    overflow: hidden;
    marginVertical: 30px;
`;
const BackgroundImage = styled.Image`
    width: 100%;
    height: 100%;
`;
const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primary};
`;

const Text = styled.Text`
    color: white;
    text-align: center;
    font-size: 20px;
    
`;

const TextContainer = styled.View`
    marginHorizontal: 30px;
    marginVertical: 15px;
`;
const Title = styled(Text)`
    font-weight: bold;
    font-size: 30px;
`;

const TextHighlight = styled(Text)`
    color: red;
`;

const NewGameButton = styled.Button`

`;

const ButtonWrapper = styled.View`
	width: 100px;
`;