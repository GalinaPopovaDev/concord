import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import CardInput from '../components/CardInput';
import Colors from '../constants/Colors';
import AnimatedView from '../components/Animation';

const ConfirmationScreen = ({ amount, step, balance }) => {

    return (
        <AnimatedView style={styles.screen}>
            <Header title="Підтвердження" amount={amount} step={step} balance={balance} />
            <View style={styles.container}>
                <View style={styles.info}>
                    <View style={styles.shield}>
                        <SimpleLineIcons name='shield' color={Colors.warning} size={60} />
                    </View>
                    <Text style={styles.message}>Введіть пароль з СМС, що надіслано на Ваш номер</Text>
                    <Text style={styles.message}>Ніколи не передавайте його іншим особам</Text>
                </View>
                <Text style={styles.sms}>ПАРОЛЬ З СМС</Text>
                <CardInput digitsPerInput={1} />
            </View>
        </AnimatedView>
    );
};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
    },
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 10,
        flexDirection: "column",
    },
    message: {
        fontSize: 12,
    },
    info: {
        alignItems: 'center',
        marginBottom: 20,
    },
    sms: {
        fontSize: 10,
        textAlign: 'left',
        fontWeight: '100',
        color: Colors.fontSecondary,
    }
});

export default React.memo(ConfirmationScreen);