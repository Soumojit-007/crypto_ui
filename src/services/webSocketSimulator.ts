
import { store } from "../store/store";
import { updateAssetPrice, updateAssetPercentChanges, updateAssetVolume } from "../store/cryptoSlice";
import { CryptoAsset } from "../types/crypto";

class WebSocketSimulator {
  private intervalId: number | null = null;
  private assets: CryptoAsset[] = [];
  
  constructor() {
    this.assets = store.getState().crypto.assets;
  }
  
  connect() {
    console.log("WebSocket simulator connected");
    
    this.intervalId = window.setInterval(() => {
      const assets = store.getState().crypto.assets;
      
      // Randomly select an asset to update
      const randomAssetIndex = Math.floor(Math.random() * assets.length);
      const asset = assets[randomAssetIndex];
      
      // Generate random price change (±0.01% to ±0.5%)
      const priceChangePercent = (Math.random() * 0.5 + 0.01) * (Math.random() > 0.5 ? 1 : -1);
      const newPrice = asset.price * (1 + priceChangePercent / 100);
      
      // Update price
      store.dispatch(updateAssetPrice({ 
        id: asset.id, 
        price: parseFloat(newPrice.toFixed(2))
      }));
      
      // Randomly update percentage changes
      if (Math.random() > 0.7) {
        const change1h = asset.percentChange1h + (Math.random() * 0.2 - 0.1);
        store.dispatch(updateAssetPercentChanges({ 
          id: asset.id, 
          percentChange1h: parseFloat(change1h.toFixed(2))
        }));
      }
      
      if (Math.random() > 0.8) {
        const change24h = asset.percentChange24h + (Math.random() * 0.3 - 0.15);
        store.dispatch(updateAssetPercentChanges({ 
          id: asset.id, 
          percentChange24h: parseFloat(change24h.toFixed(2))
        }));
      }
      
      if (Math.random() > 0.9) {
        const change7d = asset.percentChange7d + (Math.random() * 0.4 - 0.2);
        store.dispatch(updateAssetPercentChanges({ 
          id: asset.id, 
          percentChange7d: parseFloat(change7d.toFixed(2))
        }));
      }
      
      // Update volume with a small random change
      if (Math.random() > 0.6) {
        const volumeChange = asset.volume24h * (Math.random() * 0.01 + 0.001) * (Math.random() > 0.5 ? 1 : -1);
        const newVolume = asset.volume24h + volumeChange;
        store.dispatch(updateAssetVolume({ 
          id: asset.id, 
          volume24h: newVolume
        }));
      }
      
    }, 1500); // Update every 1.5 seconds
  }
  
  disconnect() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      console.log("WebSocket simulator disconnected");
    }
  }
}

export default WebSocketSimulator;
