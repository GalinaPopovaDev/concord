import { CARD_INPUT, AMOUNT_INPUT, STEP_FOREWARD, STEP_BACK } from './actions';

const initialState = {
    cardNumber: '',
    amount: 0.00,
    balance: 2950.00,
    step: 1,
  };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CARD_INPUT:
            return { ...state, cardNumber: action.payload };
        case AMOUNT_INPUT:
            return { ...state, amount: action.payload};
        case STEP_FOREWARD:
            return {...state, step: state.step + 1};
        case STEP_BACK: {
            if (state.step === 2) {
                return {...state, step: state.step - 1, amount: 0}  
            } 
            if (state.step === 4) {
                return {...initialState, balance: state.balance - state.amount};
            }
            return {...state, step: state.step - 1}
        }                 
        default:
            return state;
    }
}