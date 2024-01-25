import { configureStore } from '@reduxjs/toolkit'
import AccountSlice from './Accounts/AccountSlice'

const store = configureStore({
    reducer:{
        account:AccountSlice,
    }
})

export default store