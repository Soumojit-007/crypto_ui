
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CryptoAsset } from "../types/crypto";
import { mockCryptoData } from "../data/mockCryptoData";
import { RootState } from "./store";

interface CryptoState {
  assets: CryptoAsset[];
  loading: boolean;
  error: string | null;
}

const initialState: CryptoState = {
  assets: mockCryptoData,
  loading: false,
  error: null,
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAssetPrice: (
      state,
      action: PayloadAction<{ id: string; price: number }>
    ) => {
      const { id, price } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        asset.price = price;
      }
    },
    updateAssetPercentChanges: (
      state,
      action: PayloadAction<{
        id: string;
        percentChange1h?: number;
        percentChange24h?: number;
        percentChange7d?: number;
      }>
    ) => {
      const { id, percentChange1h, percentChange24h, percentChange7d } =
        action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        if (percentChange1h !== undefined) {
          asset.percentChange1h = percentChange1h;
        }
        if (percentChange24h !== undefined) {
          asset.percentChange24h = percentChange24h;
        }
        if (percentChange7d !== undefined) {
          asset.percentChange7d = percentChange7d;
        }
      }
    },
    updateAssetVolume: (
      state,
      action: PayloadAction<{ id: string; volume24h: number }>
    ) => {
      const { id, volume24h } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        asset.volume24h = volume24h;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  updateAssetPrice,
  updateAssetPercentChanges,
  updateAssetVolume,
  setLoading,
  setError,
} = cryptoSlice.actions;

// Export selectors
export const selectAllAssets = (state: RootState) => state.crypto.assets;
export const selectAssetById = (state: RootState, id: string) =>
  state.crypto.assets.find((asset) => asset.id === id);
export const selectLoading = (state: RootState) => state.crypto.loading;
export const selectError = (state: RootState) => state.crypto.error;

export default cryptoSlice.reducer;
