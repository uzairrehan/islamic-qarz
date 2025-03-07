import { CalculatedType, LoanState } from "@/types/loanType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


const initialState: LoanState = {
  value: undefined,
};

export const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    addLoan: (state, action: PayloadAction<CalculatedType>) => {
      state.value = action.payload;
    },
    deleteLoan: (state) => {
      state.value = undefined;
    },
  },
});

// all actions
export const { addLoan, deleteLoan } = loanSlice.actions;

// all selectors
export const selectCount = (state: RootState) => state.loan.value;

export default loanSlice.reducer;
