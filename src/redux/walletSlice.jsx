import { createSlice } from '@reduxjs/toolkit';
import { data, transactions } from '../utils/data';

const initialState = {
  transactions: transactions,
  wallet: data
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    updateWalletData: (state, action) => {
      state.wallet = action.payload;
    },
    searchWalletData: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      state.wallet = {
        ...state.wallet,
        txHistory: {
          ...state.wallet.txHistory,
          txids: state.wallet.txHistory.txids.filter(txid =>
            txid.toLowerCase().includes(searchQuery)
          ),
        },
      };
    },
  },
});

export const { updateWalletData, searchWalletData } = walletSlice.actions;
export default walletSlice.reducer;
