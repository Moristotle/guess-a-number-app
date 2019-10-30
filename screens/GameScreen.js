import React, { useState, useRef, useEffect } from 'react';
import { Alert, ScrollView, FlatList } from 'react-native';
import styled from 'styled-components';
import { Ionicons, } from '@expo/vector-icons'

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/Colors'
import CustomButton from '../components/CustomButton';

const GenerateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return GenerateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
}

const renderListItem = (value, numOfRound) => (
    <ListWrapper key={value}>
        <ListItem>Guess #{numOfRound}</ListItem>
        <ListItem>{value}</ListItem>
    </ListWrapper>
)

const GameScreen = props => {
    const initialGuess = GenerateRandomNumber(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    console.log("[props.userChoice]", props.userChoice);
    console.log("[currentGuess]", currentGuess);
    console.log("[currentLow.current 1.0]", currentLow);
    console.log("[currentHigh.current 1.0]", currentHigh);

    const { userChoice, onGameOver } = props;
    //clever tactic to extract props and specify them in useEffect
    //avoids having to pass props to dependency array

    useEffect(() => {
        if (currentGuess === userChoice) {
            props.onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver ])

    const NextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert(
                'Why you always lyin..', 
                'You have to tell the truth, and nothing but truth..!', 
                [{text: 'aight!', style: 'cancel'}
            ]);
            return; 
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
            console.log("[currentHigh.current 2.0]", currentHigh.current);
        } else {
            currentLow.current = currentGuess + 1;
            console.log("[currentLow.current 2.0]", currentLow.current);
        }
        const nextNumber = GenerateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(currentGuesses => [nextNumber, ...currentGuesses]);
    };


    return (
        <Container>
            <Instructions> Computer: is your number lower or greater than my guess? </Instructions>
            <Wrapper>

                <NumberWrapper width={140} maxWidth={70}>
                    <Text>Your Number</Text> 
                    <NumberContainer>{props.userChoice}</NumberContainer>
                 </NumberWrapper>
                <NumberWrapper width={140} maxWidth={70}>
                    <Text>My Guess</Text>
                    <NumberContainer>{currentGuess}</NumberContainer>
                </NumberWrapper>
        
            </Wrapper>

            <CardWrapper width={300} maxWidth={80}>
                <CustomButton onPress={NextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24}  color="white" />
                </CustomButton>
                <CustomButton onPress={NextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white"/>
                </CustomButton>
            </CardWrapper>
            <ListContainer>  
                {/*justifyContent: flex-end, makes the items being added to the end first*/}       
                <ScrollView contentContainerStyle={{alignItems: "center", flexGrow: 1, justifyContent: "flex-end" }}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>
            </ListContainer>

        </Container>
    );


}

export default GameScreen;

const Container = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
   
`;

const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;

`;

const Text = styled.Text`
    font-size: 15px;
`;

const Instructions = styled.Text`
    margin-top: 15px;
    text-align: center;
    font-size: 20px; 
    font-weight: bold;
    
`;

const NumberWrapper = styled(Card)`
    justify-content: space-around;
    margin-top: 20px;
    text-align: center;
    margin-right: 10px;
`;

const CardWrapper = styled(Card)`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    
`;

const Button = styled.Button`

`;

const ListWrapper = styled.View`
    border-color: #ccc;
    border-width: 1px;
    padding: 15px;
    border-radius: 3px;
    marginVertical: 10px;
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
`;

const ListItem = styled.Text`

`;

const ListContainer = styled.View`
    width: 80%;
    flex: 1;
`;

const ButtonWrapper = styled.View`
	width: 10px;
`;