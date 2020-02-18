export const CARD_INPUT = "CARD_INPUT";
export const AMOUNT_INPUT = "AMOUNT_INPUT";
export const STEP_FOREWARD = "STEP_FOREWARD";
export const STEP_BACK = "STEP_BACK";

export const cardInputAction = cardNumber => ({
    type: CARD_INPUT,
    payload: cardNumber,
});

export const amountInputAction = paymentAmount => ({
    type: AMOUNT_INPUT,
    payload: paymentAmount,
});

export const stepForeward = () => ({
    type: STEP_FOREWARD
});

export const stepBack = () => ({
    type: STEP_BACK
});
