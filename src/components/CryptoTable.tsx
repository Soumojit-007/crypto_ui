
import React from "react";
import { useSelector } from "react-redux";
import { selectAllAssets } from "../store/cryptoSlice";
import CryptoTableRow from "./CryptoTableRow";
import { ArrowDown, ArrowUp } from "lucide-react";

const CryptoTable: React.FC = () => {
  const assets = useSelector(selectAllAssets);

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
            <th className="px-4 py-3 font-semibold">#</th>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold text-right">Price</th>
            <th className="px-4 py-3 font-semibold text-right">1h %</th>
            <th className="px-4 py-3 font-semibold text-right">24h %</th>
            <th className="px-4 py-3 font-semibold text-right">7d %</th>
            <th className="px-4 py-3 font-semibold text-right">Market Cap</th>
            <th className="px-4 py-3 font-semibold text-right">Volume(24h)</th>
            <th className="px-4 py-3 font-semibold text-right">Circulating Supply</th>
            <th className="px-4 py-3 font-semibold text-right">Max Supply</th>
            <th className="px-4 py-3 font-semibold text-right">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <CryptoTableRow key={asset.id} asset={asset} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
