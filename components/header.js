import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Custom Components
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitile}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header :{
        paddingTop: 36,
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    headerTitile: {
        color: 'black',
        fontSize: 18
    }
});

export default Header;