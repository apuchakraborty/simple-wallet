import { createSlice } from '@reduxjs/toolkit';
import { data, transactions } from '../utils/data';

const initialState = {
  transactions: transactions,
  wallet: data
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
});

export const { updateWalletData, searchWalletData } = walletSlice.actions;
export default walletSlice.reducer;
