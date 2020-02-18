import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { ActionsDispatch } from '../App';
import { stepBack } from '../store/actions';
import CardData from './CardData';

const Header = ({ title, balance, amount, step }) => {

    const dispatch = useContext(ActionsDispatch);

    const backHandler = () => {
        if (step !== 1) {
            dispatch(stepBack())
        }
    }

    const renderTopLine = () => {
        if (step === 4) {
            return (
                <View style={styles.back}>
                    <AntDesign name='close' color='white' size={25} />
                    <Text style={styles.backText}>Закрити</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.back}>
                    <AntDesign name='left' color='white' size={25} />
                    <Text style={styles.backText}>Назад</Text>
                </View>
            )
        }
    }

    return (
        <View style={styles.header}>
            <View style={styles.topLilne}>
                <TouchableWithoutFeedback onPress={backHandler}>
                    {renderTopLine()}
                </TouchableWithoutFeedback>
                <Text style={styles.headerTitle}>{title}</Text>
                <View style={styles.bell}>
                    <AntDesign name='bells' color='white' size={18} />
                </View>
            </View >
            <View style={styles.cardData}>
                <CardData balance={balance} step={step} amount={amount} />
            </View>
            {step === 1 && <Text style={styles.pagination}>__  __  __  __  __  __  __  __</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        alignItems: "center",
        paddingBottom: 10,
    },
    topLilne: {
        height: 45,
        paddingHorizontal: 10,
        flexDirection: "row",
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
    },
    back: {
        position: 'absolute',
        left: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bell: {
        position: 'absolute',
        right: 10,
    },
    backText: {
        color: 'white',
        fontSize: 14,
    },
    cardData: {
    },
    pagination: {
        fontSize: 31,
        color: 'white',
        lineHeight: 26,
    }
})

export default React.memo(Header);
