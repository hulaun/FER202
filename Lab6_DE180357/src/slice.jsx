import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accounts: [],
};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload;
    },
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    updateAccount: (state, action) => {
      const index = state.accounts.findIndex(account => account.accountId === action.payload.accountId);
      state.accounts[index] = action.payload;
    },
    deleteAccount: (state, action) => {
      state.accounts = state.accounts.filter(account => account.accountId !== action.payload);
    },
  },
});

export const { setAccounts, addAccount, updateAccount, deleteAccount, setError, setLoading, setIdle } = accountSlice.actions;

export default accountSlice.reducer;
