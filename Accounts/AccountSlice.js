import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    balance:0,
    loan:0,
    loanPurpose:''
}

export const AccountSlice = createSlice({
    name:'accounts',
    initialState,
    reducers:{
        deposite(state, action){
            state.balance += action.payload
        },

        withdraw(state, action){
            state.balance -= action.payload
        },

        requestLoan:{
            prepare(amount, purpose){
                return{
                    payload:(amount, purpose)
                };
            },
            reducer(state, action){
                state.loan = action.payload.amount;
            state.purpose = action.payload.purpose;
            state.balance += action.payload.amount;
            }
        },
        
        payLoan(state, action){
            state.balance -= state.loan;
            state.loan = 0;
            state.purpose = '';
        }
    }
})

export const {deposite, withdraw,requestLoan, payLoan} = AccountSlice.actions;

export default AccountSlice.reducer