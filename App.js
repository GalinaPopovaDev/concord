import React, { useReducer, createContext } from 'react';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import PaymentScreen from './screens/PaymentScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import SuccessScreen from './screens/SuccessScreen';
import reducer from './store/reducer';

const initialState = {
  cardNumber: '',
  amount: 0.00,
  balance: 2950.00,
  step: 1,
};

export const ActionsDispatch = createContext(null);

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { amount, cardNumber, balance, step } = state;

  // Content optional rendering
  let content = <HomeScreen balance={balance.toFixed(2)} cardNumber={cardNumber} step={step}/>;
  if (step === 4) {
    content = <SuccessScreen step={step}/>;
  } else if (step === 3) {
    content = <ConfirmationScreen amount={amount} step={step} balane={balance}/>;
  } else if (step === 2) {
    content = <PaymentScreen cardNumber={cardNumber} balance={balance} amount={amount} step={step}/>
  }

  return (
    <View style={styles.container}>
      <ActionsDispatch.Provider value={dispatch}>
        {content}
      </ActionsDispatch.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    marginTop: 24,
  },
});

export default App;
