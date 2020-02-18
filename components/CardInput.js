import React, { useRef, useEffect, useState, useContext } from 'react';
import { View, StyleSheet, TextInput, Alert, Button } from 'react-native';

import Colors from '../constants/Colors';
import { cardInputAction, stepForeward } from '../store/actions';
import {ActionsDispatch} from '../App';

const CardInput = ({digitsPerInput, cardNumber}) => {

    const [cardNumberValue, setCardNumberValue] = useState(['','','','']);

    const cardMode = digitsPerInput === 4;

    useEffect( ()=> {
        if(cardMode && cardNumber) {
            const card = [];
            setCardNumberValue( prevNumber => prevNumber.map((item, index) => {
                return cardNumber.slice(index * 4, index * 4 + 4)
            }))
        }
    }, [cardNumber])

    useEffect(() => {
        if (cardNumber) {
            changeFocus(3)
        } else {
            changeFocus(0)
        }
    }, [])

    const dispatch = useContext(ActionsDispatch);

    let inputs = [];

    cardNumberValue.forEach( num => {
        inputs.push(useRef(null))
    })

    const changeFocus = index => {
        inputs[index].current.focus()
    }

    const inputChangeHandler = (number, index) => {
        number = number.replace(/[^0-9]/g, '');

        if (number.length > digitsPerInput) {

            if (number.length === digitsPerInput * 4) {
                setCardNumberValue( prevNumber => {
                    return prevNumber.map( (input, index) => {
                        const start = index * digitsPerInput;
                        const end = start + digitsPerInput;
                        return number.slice(start, end);
                    })    
                });
                changeFocus(inputs.length - 1)

            } else {

                if (cardMode){
                    Alert.alert('НЕВІРНИЙ НОМЕР', 'Номер картки повинен містити 16 цифр.', [{text: 'OK'}])
                } else {
                    Alert.alert('НЕВІРНИЙ ПАРОЛЬ', 'Пароль повинен містити 4 цифри.', [{text: 'OK'}])
                }
            }
        } else {
            setCardNumberValue( prevCard => {
                const newCard = [...prevCard]
                newCard[index] = number;
                return newCard;
            });

            if (number.length === digitsPerInput && index < 3) {
                changeFocus(index + 1);
            }
        }
    }

    const onBackspacePress = (value, index) => {
        if (value.nativeEvent.key === 'Backspace' && cardNumberValue[index].length === 0 && index > 0) {
            changeFocus(index - 1);

            setCardNumberValue( prevCard => {
                const newCard = [...prevCard]
                newCard[index - 1] = prevCard[index - 1].slice(0, digitsPerInput - 1);
                return newCard;
            });
        }
    }

    const cardSubmitHandler = () => {
        const number = cardNumberValue.reduce( ( acc, currNum ) => {
            return acc + currNum;
        }, '')
        if (cardMode && number.length !== 16) {
            Alert.alert('НЕВІРНИЙ НОМЕР', 'Номер картки повинен містити 16 цифр.', [{text: 'OK'}])
        } else if (!cardMode && number.length !== 4) {
            Alert.alert('НЕВІРНИЙ ПАРОЛЬ', 'Пароль повинен містити 4 цифри.', [{text: 'OK'}])
        } else if (cardMode) {
            dispatch(cardInputAction(number))
            dispatch(stepForeward());
        } else {
            dispatch(stepForeward());
        }
        
    }

    const renderInputs = () => {
        return inputs.map( (input, index) => (
            <TextInput
            key={index}
                ref = {input}
                style={styles.input}
                autoCapitalize = 'none'
                autoCorrect = {false}
                keyboardType = 'numeric'
                onChangeText = {(num) => inputChangeHandler(num, index)}
                value = {cardNumberValue[index]}
                onKeyPress = {(value) => onBackspacePress(value, index)}
                maxLength = {cardNumberValue[index].length === digitsPerInput ? digitsPerInput : undefined}
            />
        ))
    }

    const buttonTitle = cardMode ? "Далі" : "Переказати";

    return (
        <View >
            <View style={styles.container}>
            {renderInputs()}
            </View>
            <Button title={buttonTitle} color={Colors.primary} onPress={cardSubmitHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 20,
    },
    input: {
        borderBottomColor: Colors.fontSecondary,
        borderBottomWidth: 1,
        width: 65,
        textAlign: 'center',
        fontSize: 18,
        color: Colors.fontSecondary,
        letterSpacing: 1.5
    },
})

export default CardInput;