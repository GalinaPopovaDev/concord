import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const ReceiverCard = ({ cardNumber }) => {
    const splitedCard = [];
    for (let i = 0; i < 4; i++) {
        splitedCard.push(cardNumber.slice(i * 4, i * 4 + 4))
    }

    const renderCard = () => {
        return splitedCard.map(
            item => <Text key={item} style={styles.cardItem}>{item}</Text>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>На картку іншого банку</Text>
            <View style={styles.card}>
                {renderCard()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginVertical: 5,
    },
    card: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 5,
    },
    cardItem: {
        fontSize: 18,
        color: Colors.fontSecondary,
        letterSpacing: 1.5,
    },
})

export default ReceiverCard;