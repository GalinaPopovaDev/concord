import React from 'react';
import { View, StyleSheet, Picker, Animated } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import CardInput from '../components/CardInput';
import AnimatedView from '../components/Animation';


const HomeScreen = ({ balance, cardNumber, step }) => {
    return (
        <AnimatedView style={styles.screen}>
            <Header balance={balance} title="Грошові перекази" step={step} />
            <View style={styles.pickerBlock}>
                <Picker style={styles.picker}>
                    <Picker.Item label='На картку іншого банку VISA/MC' value='На картку іншого банку VISA/MC' />
                </Picker>
                <CardInput digitsPerInput={4} cardNumber={cardNumber}/>
            </View>
        </AnimatedView>
    );
};

const styles = StyleSheet.create({
    pickerBlock: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
});

HomeScreen.propTypes = {
    balance: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
}

export default HomeScreen;
