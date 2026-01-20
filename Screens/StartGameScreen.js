import { TextInput, StyleSheet, View, Alert, Text } from 'react-native'; // Added Text to imports
import { useState } from 'react';
import PrimaryButtons from '../compononts/PrimaryButtons';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber(''); 
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        
        onPickNumber(chosenNumber); 
    }

    return (
        <View style={Styles.inputContainer}>
            {/* Added Instruction Text */}
            <Text style={Styles.instructionText}>Enter A Number</Text>
            
            <TextInput 
                style={Styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={Styles.buttonsContainer}>
                <View style={Styles.buttonContainer}>
                    <PrimaryButtons onPress={resetInputHandler}>Reset</PrimaryButtons>
                </View>
                <View style={Styles.buttonContainer}>
                    <PrimaryButtons onPress={confirmInputHandler}>Confirm</PrimaryButtons> 
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const Styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 16,
        marginTop: 100,
        backgroundColor: '#3b0622', 
        borderRadius: 8,
        elevation: 4, 
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    // New style for the instruction text
    instructionText: {
        color: '#ddb52f',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 8,
    },
    buttonsContainer: {
        flexDirection: 'row', 
    },
    buttonContainer: {
        flex: 1, 
    }
});