import React from 'react';
import { View, Text, StyleSheet, fontFamily } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CardData = ({ balance, step, amount }) => {
    const renderBalance = step === 3 ? amount : balance;
    return (
        <View style={styles.container}>
            {step === 1 && <View style={styles.cardName}>
                <Text style={styles.cardNameLeft}>Golden dream</Text>
                <Text style={styles.cardNameRight}>01/19</Text>
            </View>}
            <View style={styles.balanceContainer}>
                {(step === 1 || step === 2) &&  <FontAwesome name='usd' color='white' size={30} />}
                {(step === 1 || step === 2) && <Text style={styles.balance}>{Number(balance).toFixed(2)}</Text>}
                {step === 3 && <Text style={styles.amount}>{Number(amount).toFixed(2)}</Text>}
            </View>
            {(step === 1 || step === 2) && <View style={styles.cardNumber}>
                <Text style={styles.cardNumberText}>XXXX</Text>
                <Text style={styles.cardNumberText}>XXXX</Text>
                <Text style={styles.cardNumberText}>XXXX</Text>
                <Text style={styles.cardNumberText}>2082</Text>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cardNameLeft: {
        fontSize: 20,
        color: 'white',
    },
    cardNameRight: {
        fontSize: 20,
        color: 'white',
    },
    cardName: {
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    balanceContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    balance: {
        color: 'white',
        fontSize: 53,
        fontWeight: "200",
    },
    amount: {
        width: '100%',
        color: 'white',
        fontSize: 53,
        fontWeight: "200",
        textAlign: 'center',
    },
    cardNumber: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardNumberText: {
        color: 'white',
        fontSize: 18,
    }
})

export default React.memo(CardData);
