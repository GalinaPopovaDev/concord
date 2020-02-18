import React from 'react';
import { View, Text, StyleSheet, Switch} from 'react-native';

import Color from '../constants/Colors';

const PaymentFee = () => {
    return (
        <View style={styles.container}>
            <Text>Сплатити комісію з отримувача 24.50грн?</Text>
            <Switch value={true} trackColor={{false: 'lightgray', true: 'lightgray'}} thumbColor={Color.primary}></Switch>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        width: '100%',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 14,
    }
})

export default PaymentFee;