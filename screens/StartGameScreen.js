import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import styled from "styled-components/";

import Card from '../components/Card';
import InputField from '../components/InputField';
import NumberContainer from '../components/NumberContainer';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';

export default function StartGameScreen(props) {

	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();
;
	const numberInputHandler = inputText => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	}

	const resetInputHandler = () => {
		setEnteredValue('');
		setConfirmed(false);
		Keyboard.dismiss();
	}

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid number!", 
				"Number has to be a number between 1 and 99",
				[{text: "okay", style: "destructive", onPress: resetInputHandler}]
				);
			return;
		}
		setConfirmed(true);
		setEnteredValue('');
		setSelectedNumber(parseInt(enteredValue));
		Keyboard.dismiss();
	}

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = (
			<SummaryContainer width={200} maxWidth={80}>
				<TextElement>You selected</TextElement>
					<NumberContainer>
						{selectedNumber}
					</NumberContainer>
					<ConfirmButton 
						color={Colors.primary}
						title="START GAME" 
						onPress={() => props.onStartGame(selectedNumber)} />
			</SummaryContainer>

		);
	}
	return (
		<TouchableWithoutFeedback onPress={() => {
			Keyboard.dismiss();
		}}>
			<Screen>
				<Title>Start a new Game!</Title>
				<Card width={300} maxWidth={90}>
					<TextElement>Select a number between 1 and 99</TextElement>			
					<InputField 
						width={50} 
						blurOnSubmit 
						autoCapitalize="none"
						keyboardType="number-pad"
						maxLength={2} 
						onChangeText={numberInputHandler}
						value={enteredValue}/>
					<ButtonContainer>
						<ButtonWrapper>
							<ResetButton 
								title="Reset" 
								onPress={resetInputHandler} 
								color={Colors.accent}
								/>
						</ButtonWrapper>
						<ButtonWrapper>
							<ConfirmButton 
								title="Confirm" 
								onPress={confirmInputHandler} 
								color={Colors.primary}/>
							</ButtonWrapper>
					</ButtonContainer>
				</Card>
				{confirmedOutput}
	
			</Screen>	
		</TouchableWithoutFeedback>

	);
}

const Screen = styled.View`
	flex: 1;
	padding: 10px;
	align-items: center;
`;

const SummaryContainer = styled(Card)`
	margin-top: 20px;
	align-items: center;

`;

const Title = styled.Text`
	font-size: 20px;
	marginVertical: 10px;
	font-weight: bold;
`;

const Wrapper = styled.View`

`;
const TextElement = styled.Text``;

const ButtonContainer = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	paddingHorizontal: 15;
`;

const Button = styled.Button``;

const ResetButton = styled(Button)`
	
`;

const ConfirmButton = styled(Button)`
	
`;

const ButtonWrapper = styled.View`
	width: 100px;
`;
