import { createAction, createReducer } from "@reduxjs/toolkit";

export const addToCardAction = createAction("addToCard");
export const decreaseCardItemAction = createAction("decreaseCardItemAction");

export const cardReducer = createReducer({ cardList: {} }, (builder) => {
  builder.addCase(addToCardAction, (state, action) => {
    const product = action.payload;
    if (state.cardList[product.id]) {
      state.cardList[product.id].count = state.cardList[product.id].count + 1;
    } else {
      state.cardList[product.id] = { ...product, count: 1 };
    }
  });
  builder.addCase(decreaseCardItemAction, (state, action) => {
    const product = action.payload;
    if (state.cardList[product.id].count === 1) {
      delete state.cardList[product.id];
    } else {
      state.cardList[product.id].count = state.cardList[product.id].count - 1;
    }
  });
});
