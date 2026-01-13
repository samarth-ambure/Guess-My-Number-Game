import { Text, View, Pressable, StyleSheet } from 'react-native';

function PrimaryButtons({ children , onPress }) {
    function pressHandler() {
        onPress();
    }

    return (
        <View style={style.buttonOuterContainer}>
            <Pressable 
                onPress={pressHandler} 
                android_ripple={{ color: '#640233' }} // Adds a nice ripple effect on Android
                style={({ pressed }) => pressed ? [style.buttonInnerContainer, style.pressed] : style.buttonInnerContainer}
            >
                <Text style={style.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButtons;

const style = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden', // Ensures ripple effect stays inside borders
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // Shadow for Android
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75, // Visual feedback for iOS
    }
});