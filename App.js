import React, { useState, useEffect } from "react";
import { } from "react-native";
import styled from "styled-components";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
/*
const fetchFonts = () => {
	Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	})
}
*/
export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);
	const [dataLoaded, setDataLoaded] = useState(false);
	/*
	useEffect(() => {
		if (!dataLoaded) {
			return <AppLoading 
				startAsync={fetchFonts} 
				onFinish={() => setDataLoaded(true)} 
				onError={(err) => console.log(err)}
			/>;
		}
	}, [])
	
*/

	const configureNewGameHandler = () => {
		setGuessRounds(0);
		setUserNumber(0);

	}
	const StartGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
		setGuessRounds(0);
	}

	const gameOverHandler = numOfRounds => {
		setGuessRounds(numOfRounds);
	}

	let content = <StartGameScreen onStartGame={StartGameHandler} />;

	if (userNumber && guessRounds <= 0) {
		content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
	} else if (guessRounds > 0) {
		content = <GameOverScreen 
			roundsNumber={guessRounds} 
			userNumber={userNumber}
			onRestart={configureNewGameHandler}/>;
	}

	return (
			<Container>
				<Header title="Guess a Number" />
				{content}
			</Container>
	);
}

const Container = styled.View`
	flex: 1;
`;
