import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';


const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game is Over</Text>
      <Text>Number Was :{props.number}</Text>
      <Text>Total No Of Rounds: {props.rounds}</Text>
      <Button title="Start New Game" onPress={props.newGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;