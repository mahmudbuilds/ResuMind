import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

interface Tip {
  type: "good" | "improve";
  tip: string;
  explanation: string;
}

interface SectionData {
  score: number;
  tips: Tip[];
}

const ScoreBadgeSnippet = ({ score }: { score: number }) => {
  let bgColor = "bg-red-100 text-red-700";
  let icon = null;

  if (score > 69) {
    bgColor = "bg-green-100 text-green-700";
    icon = <img src="/icons/check.svg" className="w-3 h-3" alt="check" />;
  } else if (score > 39) {
    bgColor = "bg-yellow-100 text-yellow-700";
  }

  return (
    <div
      className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${bgColor}`}
    >
      {icon}
      {score}/100
    </div>
  );
};

export default function Details({ feedback }: { feedback: Feedback }) {
  const sections = [
    { id: "toneAndStyle", title: "Tone & Style", data: feedback.toneAndStyle },
    { id: "content", title: "Content", data: feedback.content },
    { id: "structure", title: "Structure", data: feedback.structure },
    { id: "skills", title: "Skills", data: feedback.skills },
  ];

  return (
    <div className="w-full bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Detailed Feedback
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4"
      >
        {sections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="border border-gray-100 rounded-2xl px-4 py-2 bg-gray-50/30 overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-2">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-lg font-bold text-gray-800">
                  {section.title}
                </span>
                <ScoreBadgeSnippet score={section.data.score} />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="flex flex-col gap-4">
                {section.data.tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        tip.type === "good" ? "bg-green-50" : "bg-yellow-50"
                      }`}
                    >
                      <img
                        src={
                          tip.type === "good"
                            ? "/icons/check.svg"
                            : "/icons/warning.svg"
                        }
                        className="w-4 h-4"
                        alt={tip.type}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-gray-900 text-sm">
                        {tip.tip}
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {tip.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
