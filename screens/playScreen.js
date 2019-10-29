import React,{ useState, useRef, useEffect } from'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';
// Dummy Comment
const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (randomNum === exclude) {
      return generateRandomNumber(min, max, exclude);
    }
    else {
      return randomNum;
    };
  };


const PlayScreen = props => {
const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {userChoice, gameOver} = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
        console.log("Rounds", rounds);
        props.gameOver(rounds);
    }
  }, [currentGuess, userChoice, props.gameOver]);

  const guessNumberHelper = direction => {
    if ((direction === 'lower' && currentGuess < props.userChoice) ||
        (direction === 'greater' && currentGuess > props.userChoice)) {
          Alert.alert('Are you  sure?', 'You know that this is wrong',
                      [{text: 'Try again', style: 'cancel'}]
          );
        return;
      } 
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    }
    else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(currentLow.current,
                                             currentHigh.current,
                                             currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(currentRounds => currentRounds + 1);
  };

   
   return (
       <View style={styles.screen}>
           <Text>Opponent's Guess</Text>
           <NumberContainer selectedNumber={currentGuess}></NumberContainer>
           <View style={styles.btnContainer}>
              <Button title="lower"  onPress={guessNumberHelper.bind(this, 'lower')}/>
              <Button title="higher" onPress={guessNumberHelper.bind(this, 'higher')}/>
           </View>
           <View>
             <Button title="New Game" onPress={props.newGame}/>
           </View> 
       </View>
   )
}

const styles= StyleSheet.create({
    screen :{
        alignItems: 'center',
        padding: 10, 
    },
    btnContainer:{
        marginTop: 10,
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-around',
        maxWidth: '80%'
    },
   
})

export default PlayScreen