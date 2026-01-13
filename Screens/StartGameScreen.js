import { TextInput, StyleSheet, View, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButtons from '../compononts/PrimaryButtons';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber(''); // Clears the text input
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        // Validation: Must be a number, between 1-99
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        
        onPickNumber(chosenNumber); // Passes the number to App.js to switch screens
    }

    return (
        <View style={Styles.inputContainer}>
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

// ... (Styles stay the same as your previous message)

// ... (Styles stay the same as your previous message)



const Styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        justifyContent: 'center', // Fixed typo
        alignItems: 'center', // Fixed typo
        padding: 16,
        marginTop: 100,
        backgroundColor: '#3b0622', // Changed to a darker plum for better contrast
        borderRadius: 8,
        elevation: 4, // Shadow for Android
        shadowColor: 'black', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
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
        flexDirection: 'row', // Places buttons side-by-side
    },
    buttonContainer: {
        flex: 1, // Ensures buttons take up equal space
    }
});