import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Button, TextInput, Alert, Animated } from 'react-native';

import Header from '../components/Header';
import ReceiverCard from '../components/ReceiverCard';
import PaymentFee from '../components/PaymentFee';
import AnimatedView from '../components/Animation';
import { amountInputAction, stepForeward } from '../store/actions';
import Colors from '../constants/Colors';
import { ActionsDispatch } from '../App';

const PaymentScreen = ({ cardNumber, balance, amount, step }) => {
    const [amountValue, setAmountValue] = useState();
    const [balanceValue, setBalanceValue] = useState(balance);

    useEffect(() => {
        setBalanceValue(balance.toFixed(2));
    }, [balance])

    useEffect(() => {
        setAmountValue(amount);
        const newBalance = balance - amount;
        setBalanceValue(newBalance.toFixed(2));
    }, [amount])

    const dispatch = useContext(ActionsDispatch);

    const amountSubmitHandler = () => {
        if (!Number(amountValue)) {
            Alert.alert('ВВЕДІТЬ СУМУ', 'Сума переказу не може бути пустою або 0', [{ text: 'OK' }])
        } else {
            dispatch(amountInputAction(amountValue));
            dispatch(stepForeward())
        }
    }

    const ammountInputHandler = value => {
        value = value.replace(/\.\./g, '.');
        value = value.replace(/[^0-9.]/g, '');

        if (value.includes('.')) {
            if (value.split('.').length === 3) {
                return;
            }
            if (value.split('.')[1].length > 2) {
                return;
            }
        }

        if (/\./.test(value) && !(/\.[0-9]{0,2}$/.test(value))) {
            Alert.alert('НЕВІРНА СУМА', 'Сума повинна містити 2 цифри після крапки', [{ text: 'OK' }])
        } else {
            if (value > +balance) {
                Alert.alert('НЕДОСТАТНЬО КОШТІВ', 'Сума переказу не може перевищувати наявний баланс', [{ text: 'OK' }])
            } else {
                setAmountValue(value);
                const newBalance = balance - value;
                setBalanceValue(newBalance.toFixed(2));
            }
        }
    }

    return (
        <AnimatedView style={styles.screen} type="rightToLeft">
            <Header title="Сумма переказу" balance={balanceValue} step={step} />
            <View style={styles.container}>
                <ReceiverCard cardNumber={cardNumber} />
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='numeric'
                    value={amountValue}
                    onChangeText={ammountInputHandler}
                    autoFocus={true}
                />
                <PaymentFee />
                <View style={styles.button}>
                    <Button title="Підтвердити" onPress={amountSubmitHandler} color={Colors.primary} />
                </View>
            </View>
        </AnimatedView>
    );
};

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'flex-start',
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.fontSecondary,
        color: Colors.fontBlue,
        textAlign: 'center',
        width: '70%',
        fontSize: 28,
    },
    button: {
        width: '100%',
    }
});

export default React.memo(PaymentScreen);