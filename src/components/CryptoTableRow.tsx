
import React, { memo, useState } from "react";
import { CryptoAsset } from "../types/crypto";
import { ArrowDown, ArrowUp, TrendingDown, TrendingUp, Bitcoin } from "lucide-react";
import SparklineChart from "./SparklineChart";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface CryptoTableRowProps {
  asset: CryptoAsset;
  index: number;
}

// Format numbers with commas
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Format large numbers with abbreviations
const formatLargeNumber = (num: number): string => {
  if (num >= 1e12) {
    return `$${(num / 1e12).toFixed(2)}T`;
  } else if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(2)}B`;
  } else if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)}M`;
  } else {
    return `$${formatNumber(num)}`;
  }
};

const CryptoTableRow: React.FC<CryptoTableRowProps> = memo(({ asset, index }) => {
  const [imageError, setImageError] = useState(false);

  // Determine if percent change is positive or negative and select appropriate color and icon
  const getPercentChangeDisplay = (percentChange: number) => {
    if (percentChange > 0) {
      return {
        color: "text-green-500",
        icon: <TrendingUp className="inline w-4 h-4 mr-1" />,
        value: `+${percentChange.toFixed(2)}%`,
      };
    } else if (percentChange < 0) {
      return {
        color: "text-red-500",
        icon: <TrendingDown className="inline w-4 h-4 mr-1" />,
        value: `${percentChange.toFixed(2)}%`,
      };
    } else {
      return {
        color: "text-gray-500",
        icon: null,
        value: `${percentChange.toFixed(2)}%`,
      };
    }
  };

  const percentChange1h = getPercentChangeDisplay(asset.percentChange1h);
  const percentChange24h = getPercentChangeDisplay(asset.percentChange24h);
  const percentChange7d = getPercentChangeDisplay(asset.percentChange7d);

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-4 py-4">{index + 1}</td>
      <td className="px-4 py-4">
        <div className="flex items-center">
          <Avatar className="w-8 h-8 mr-2 bg-gray-200 rounded-full">
            <AvatarImage 
              src={asset.logo} 
              alt={asset.name} 
              onError={() => setImageError(true)} 
            />
            <AvatarFallback className="text-xs">
              {asset.symbol.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{asset.name}</div>
            <div className="text-gray-500 text-sm">{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-right font-medium">
        ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>
      <td className={`px-4 py-4 text-right ${percentChange1h.color}`}>
        {percentChange1h.icon}
        {percentChange1h.value}
      </td>
      <td className={`px-4 py-4 text-right ${percentChange24h.color}`}>
        {percentChange24h.icon}
        {percentChange24h.value}
      </td>
      <td className={`px-4 py-4 text-right ${percentChange7d.color}`}>
        {percentChange7d.icon}
        {percentChange7d.value}
      </td>
      <td className="px-4 py-4 text-right">{formatLargeNumber(asset.marketCap)}</td>
      <td className="px-4 py-4 text-right">{formatLargeNumber(asset.volume24h)}</td>
      <td className="px-4 py-4 text-right">
        {asset.circulatingSupply.toFixed(2)}M {asset.symbol}
      </td>
      <td className="px-4 py-4 text-right">
        {asset.maxSupply ? `${asset.maxSupply}M` : "∞"}
      </td>
      <td className="px-4 py-4">
        <SparklineChart data={asset.sparkline7d} positive={asset.percentChange7d >= 0} />
      </td>
    </tr>
  );
});

export default CryptoTableRow;
