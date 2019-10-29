import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// User Defined Components
import Colors from '../constants/colors';
const NumberContainer = props => {
    return (
        <View>
            <Text>Chosen Number</Text>
            <View style={styles.startBtn}>
                <View style={{...styles.selectedNum, ...props.style}}>
                    <Text style={styles.textNum}>{props.selectedNumber}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
});

export default NumberContainer;