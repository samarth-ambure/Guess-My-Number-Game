import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import PrimaryButtons from '../compononts/PrimaryButtons';

function GameOverScreen({ roundsNumber, userNumber, onRestart }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>GAME OVER!</Text>
      
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image} 
          source={require('./Images/GameOverImg.jpg')}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to 
        guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>

      <PrimaryButtons onPress={onRestart}>Start New Game</PrimaryButtons>
    </View>
  );
}

export default GameOverScreen;

// Determine screen width for responsive image sizing
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
  imageContainer: {
    // Creates a circular frame for the image
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: '#3b0622',
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    color: 'white',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#ddb52f', // Highlights the numbers in yellow
  },
});