import React from "react";

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

export default function ATS({ score, suggestions }: ATSProps) {
  let bgColor = "from-red-100";
  let icon = "/icons/ats-bad.svg";

  if (score > 69) {
    bgColor = "from-green-100";
    icon = "/icons/ats-good.svg";
  } else if (score > 49) {
    bgColor = "from-yellow-100";
    icon = "/icons/ats-warning.svg";
  }

  return (
    <div
      className={`flex flex-col gap-6 p-8 rounded-3xl bg-gradient-to-b ${bgColor} to-white shadow-sm border border-gray-100`}
    >
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-50">
          <img src={icon} alt="ATS Status" className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">
          ATS Score - {score}/100
        </h3>
      </div>

      {/* Description Section */}
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-1">
            Impact on your search
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            Your ATS score represents how well your resume is optimized for
            Applicant Tracking Systems. A higher score improves your chances of
            passing through automated filters to reach human recruiters.
          </p>
        </div>

        {/* List of Suggestions */}
        <div className="flex flex-col gap-3 my-2">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-3 bg-white/50 rounded-xl border border-white"
            >
              <img
                src={
                  suggestion.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt={suggestion.type}
                className="w-5 h-5 mt-0.5"
              />
              <p className="text-gray-700 text-sm font-medium">
                {suggestion.tip}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="text-sm font-semibold text-gray-600 mt-2 text-center">
          {score > 79
            ? "Excellent job! Your resume is highly compatible with most tracking systems."
            : "Address the suggestions above to improve your score and visibility to recruiters."}
        </p>
      </div>
    </div>
  );
}
