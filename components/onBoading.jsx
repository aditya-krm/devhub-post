"use client";

import React, { useState } from "react";

const steps = [
  {
    title: "Step 1: Create Your Profile",
    description:
      "Let others know about your expertise and what you’re passionate about. Upload a profile picture, write a bio, and showcase your skills.",
  },
  {
    title: "Step 2: Explore Knowledge",
    description:
      "Dive into a wealth of knowledge from experienced developers. Browse resources, articles, and tutorials shared by the community.",
  },
  {
    title: "Step 3: Share Your Expertise",
    description:
      "Contribute to the community by sharing your own knowledge. Write articles, tutorials, or post coding resources to help others.",
  },
  {
    title: "Step 4: Connect with Developers",
    description:
      "Engage with the DevHub community by following other developers, collaborating on projects, and joining discussions.",
  },
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(-1); // Set initial state to -1 for welcome screen

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep >= 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      {/* Welcome Screen */}
      {currentStep === -1 ? (
        <div className="text-center mb-8 w-[60%]">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="orange_gradient">Devhub!</span>{" "}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A community-driven platform where developers share their knowledge
            and discover insights from others. Let's get started on your
            journey.
          </p>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
            onClick={nextStep}
          >
            Start Onboarding
          </button>
        </div>
      ) : (
        <>
          {/* Onboarding Steps */}
          <div className="w-full max-w-2xl flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-600 mb-4">
              {steps[currentStep].description}
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-between w-full mt-6">
              <button
                className={`px-4 py-2 bg-gray-400 text-white rounded-lg ${
                  currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </button>
              <button
                className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${
                  currentStep === steps.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
              >
                Next
              </button>
            </div>
          </div>

          {/* Final Call to Action */}
          {currentStep === steps.length - 1 && (
            <div className="w-full text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Dive In?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Start sharing your knowledge and discover endless possibilities.
              </p>
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg">
                Get Started Now
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Onboarding;
