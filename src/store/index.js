import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";

export const store = configureStore({
    reducer : {
        EXPENSE : expenseSlice.reducer,
    }
})