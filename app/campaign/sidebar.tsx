
"use client";

import React from "react";
import { ArrowLeft, CheckCircle, Circle } from "lucide-react";
import Link from "next/link";

interface Step {
  title: string;
  description?: string;
  completed: boolean;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <div className="flex flex-col space-y-4 border-l-2 border-gray-300 pl-6">
      {steps?.map((step, index) => (
        <div key={index} className="relative flex items-start gap-4">
          <div className="absolute -left-6 top-1">
            {step.completed ? (
              <CheckCircle className="text-green-500" size={20} />
            ) : (
              <Circle className="text-gray-400" size={20} />
            )}
          </div>
          <div>
            <h3
              className={`text-sm font-semibold ${step.completed ? "text-green-600" : "text-gray-700"}`}
            >
              {step.title}
            </h3>
            {step.description && (
              <p className="text-xs text-gray-500">{step.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;

// Example usage
const steps: Step[] = [
  { title: "Define campaign objective", description: "Main objective: Purchase", completed: true },
  { title: "Map funnel stages", description: "Awareness - Consideration - Conversion", completed: true },
  { title: "Select channel mix", completed: true },
  { title: "Formats selection", completed: true },
  { title: "Set buy objectives and types", completed: true },
  { title: "Mid-recap", completed: false },
  { title: "Plan campaign schedule", completed: false },
  { title: "Configure ad sets and budget", completed: false },
  { title: "Establish goals", completed: false },
  { title: "Overview of your campaign", completed: false },
];

export function Sidebar() {
  return (
    <div className="hidden md:block md:w-1/4 bg-white md:top-0 p-8 h-full border-r border-gray-300 mx-auto mr-10">
      <div className="flex gap-4 items-center p-4 font-bold">
      <span><ArrowLeft /></span>
      <Link href="/">Back to Dashboard</Link>
      </div>
    
  
      <h2 className="text-xl font-bold mb-4">Spring Collection Launch 2025</h2>
      <Stepper steps={steps} />
    </div>
  );
}
