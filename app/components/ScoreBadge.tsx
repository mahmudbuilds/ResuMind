import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  let bgColor = "bg-badge-red";
  let textColor = "text-badge-red-text";
  let label = "Needs Work";

  if (score > 70) {
    bgColor = "bg-badge-green";
    textColor = "text-badge-green-text";
    label = "Strong";
  } else if (score > 49) {
    bgColor = "bg-badge-yellow";
    textColor = "text-badge-yellow-text";
    label = "Good Start";
  }

  return (
    <div className={`score-badge ${bgColor}`}>
      <p className={`text-xs font-semibold ${textColor}`}>{label}</p>
    </div>
  );
};

export default ScoreBadge;
