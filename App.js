import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  // Logic to switch screens
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
  screen = <GameScreen userNumber={userNumber} />;
}

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1595053809115-f2aa7481979b?q=80&w=2070' }} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  backgroundImage: { opacity: 0.15 }
});