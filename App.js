import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import {AppLoadins, AppLoading} from 'expo';

// Fonts
import * as Font from 'expo-font';
// User Defined Components
import Header from './components/header';
import StartGameScreen from'./screens/StartGameScreen';
import PlayScreen from './screens/playScreen';
import GameOverScreen from './screens/gameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  })
}
export default function App() {

  const[selectedNumber, setSelectedNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return (
            <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)}
                        onError={err => console.log(err)}/>)
  }

  const startNewGameHandler = () => {
    setGuessRounds(0);
    setSelectedNumber(null);
  }

  const renderScreenHandler = userNumber => {
    setSelectedNumber(userNumber);
    setGuessRounds(0)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

 
  
  let content = <StartGameScreen onStartGame={renderScreenHandler}/>;

  if(selectedNumber && guessRounds <= 0){
    content = <PlayScreen userChoice={selectedNumber}  gameOver={gameOverHandler} newGame= {startNewGameHandler} />
  }else if (guessRounds > 0){
    content=<GameOverScreen number={selectedNumber} rounds={guessRounds} newGame= {startNewGameHandler}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {

    }
});
