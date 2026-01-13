import { View, Text, StyleSheet } from 'react-native';

function GameScreen({ userNumber }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{/* Guess will go here later */}</Text>
      </View>

      <View>
        <Text>Higher or Lower?</Text>
        <View>
            {/* We will add + and - buttons here in the next step */}
        </View>
      </View>
      
      <View>
        {/* Log Rounds */}
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
  numberContainer: {
    borderWidth: 4,
    borderColor: '#ddb52f',
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: '#ddb52f',
    fontSize: 36,
    fontWeight: 'bold',
  },
});