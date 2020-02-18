import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import AnimatedView from '../components/Animation';
import Colors from '../constants/Colors';


const SuccessScreen = ({ step }) => {
    return (
        <AnimatedView style={styles.screen}>
            <Header title="Результат" step={step} />
            <View style={styles.container}>
                <View style={styles.success}>
                    <SimpleLineIcons name='like' color={Colors.fontBlue} size={100} />
                    <Text style={styles.successText}>Успішно!</Text>
                    <Text>Платіж надіслано на опрацювання</Text>
                </View>
                <View style={styles.draft}>
                    <View style={styles.draftText}>
                        <Text style={styles.draftTextItem}>Шановний Артеме!</Text>
                        <Text style={styles.draftTextItem}>Чи бажаєте ви додати цю операцію до ваших шаблонів?</Text>
                    </View>
                    <Button title="Зберегти як шаблон" color={Colors.primary}/>
                </View>
            </View>
            <View style={styles.footer}>
                <SimpleLineIcons name='wallet' size={20} />
                <SimpleLineIcons name='screen-smartphone' size={20} />
                <SimpleLineIcons name='refresh' size={20} />
                <SimpleLineIcons name='home' size={20} />
                <SimpleLineIcons name='options-vertical' size={20} />
            </View>
        </AnimatedView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        padding: 20,
    },
    success: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    successText: {
        fontSize: 35,
        color: Colors.fontBlue,
        paddingTop: 10,
    },
    draft: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: Colors.fontSecondary,
        paddingTop: 5,
    },
    draftText: {
        alignItems: 'center',
        marginBottom: 15,
    },
    draftTextItem: {
        textAlign: 'center',
        color: Colors.fontSecondary,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopColor: 'lightgrey',
        borderTopWidth: 4,
        height: 45,
    }
});

export default React.memo(SuccessScreen);