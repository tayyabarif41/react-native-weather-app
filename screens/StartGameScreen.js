import React , {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

// User Defined Components
import Card from '../components/card';
import Colors from '../constants/colors';
import Input from '../components/input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
    
    const [entederNumber, setEnteredNumber] = useState('');
    const [confirmed, setComfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = input => {
        setEnteredNumber(input.replace(/[^0-9]/g,''));
    };

    const resetInputHandler = () => {
        setEnteredNumber('');
        setComfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenValue = parseInt(entederNumber);
        if(isNaN(chosenValue)|| chosenValue <=0 || chosenValue > 99){
            Alert.alert('Invalid Input', 'Entered Number Must be Between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return
        }
            setComfirmed(true);
            setEnteredNumber('');
            setSelectedNumber(parseInt(entederNumber));
    };

    let confirmedNumber;
    if(confirmed){
        confirmedNumber = <Card style={styles.strtGameCard}>
                            {/* <Text>Chosen Number</Text>
                            <View style={styles.startBtn}>
                                <View style={styles.selectedNum}><Text style={styles.textNum}>{selectedNumber}</Text></View>
                            </View> */}
                            <NumberContainer selectedNumber={selectedNumber}></NumberContainer>
                                <View style={styles.btn}><Button  title='Start' onPress={() => props.onStartGame(selectedNumber)} color={Colors.primary}/></View>
                          </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.starGame}>
                <Text style={styles.startGamesDes}>Welcome to Game Screen</Text>
                <Card style={styles.inputContainer}>
                    <Text>Enter the Number</Text>
                    <Input style={styles.inputStyle} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2} 
                        onChangeText={numberInputHandler}
                        value={entederNumber}
                    />
                    <View style={styles.btnLayout}>
                        <View style={styles.btn}><Button title="Reset" onPress={resetInputHandler} color={Colors.secondry}/></View>
                        <View style={styles.btn}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/></View>
                    </View>
                </Card>
                {confirmedNumber}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    starGame: {
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5
    },
    startGamesDes :{
        fontFamily: 'open-sans-bold',
        padding: 10,
        fontSize: 15
    },
    inputLayout:{
        width: 1,
        borderBottomColor: "black"
    },  
    inputContainer :{
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
    },
    btnLayout:{
        marginTop: 10,
        width: "100%",
        flexDirection: "row",   
        justifyContent:'space-evenly',    
        alignItems: 'center',
    },
    btn:{
        width: 80,
    },
    strtGameCard:{
        marginTop: 10,
        width: 200,
        maxWidth: "80%",
        alignItems: 'center',
    },
    inputStyle :{
        width: 30,
        textAlign: 'center',
    },
    startBtn: {
        alignItems: "center"
    },
    selectedNum :{
        margin: 10,
        padding: 30,
        height: 60,
        borderColor: Colors.secondry,
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
    },
    textNum: {
        fontSize: 22,
        color: Colors.primary,
    }
})

export default StartGameScreen;
