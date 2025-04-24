
import React from "react";

interface SparklineChartProps {
  data: string;
  positive: boolean;
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data, positive }) => {
  // This is a placeholder for a real chart - we would normally use real data
  // A real implementation would use this data to create an SVG path
  return (
    <div className="w-32 h-16">
      <svg viewBox="0 0 100 30" className="w-full h-full">
        <path
          d={positive ? 
            "M0,25 L10,20 L20,22 L30,15 L40,18 L50,10 L60,13 L70,5 L80,8 L90,3 L100,5" : 
            "M0,5 L10,8 L20,3 L30,10 L40,7 L50,15 L60,12 L70,20 L80,18 L90,22 L100,25"}
          fill="none"
          stroke={positive ? "#10B981" : "#EF4444"}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default SparklineChart;
