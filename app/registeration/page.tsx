"use client";

import { useState } from "react";
import ClientDetails from "./clientdetails"; // Import your client details function
import { useRouter } from "next/navigation"; // Use Next.js router for navigation

export default function EmailForm() {
  const router = useRouter(); // Initialize Next.js router
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_email: "",
    app_password: "",
  });

  const [step, setStep] = useState(1); // Track the step of the form

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    // Move to the next step
    setStep(3); // Switch to the next step, which will render ClientDetails
  };

  // Conditionally render components based on step
  if (step === 3) {
    return <ClientDetails {...formData} />; // Pass formData to ClientDetails if needed
  }

  return (
    <>
      <div>
        <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
          <h1 className="text-2xl font-bold">GOMAILER</h1>
          <button
            onClick={() => {
              router.push("/documentation");
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              transform="matrix(1, 0, 0, 1, 0, 0)"
              className="w-8 h-8"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g clipPath="url(#clip0_429_11160)">
                  <circle
                    cx="12"
                    cy="11.9999"
                    r="9"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                  <rect
                    x="12"
                    y="8"
                    width="0.01"
                    height="0.01"
                    stroke="#ffffff"
                    strokeWidth="3.75"
                    strokeLinejoin="round"
                  ></rect>
                  <path
                    d="M12 12V16"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_11160">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </g>
            </svg>
          </button>
        </header>
      </div>

      <div className="flex justify-center items-center h-screen bg-gray-900">
        <form
          className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
          onSubmit={handleNext}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Email Sender Form
          </h2>

          {/* Sender's Name */}
          <label htmlFor="senderName" className="block text-white mb-2">
            Sender's Name:
          </label>
          <input
            type="text"
            id="senderName"
            name="sender_name"
            value={formData.sender_name}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />

          {/* Email ID */}
          <label htmlFor="senderEmail" className="block text-white mb-2">
            Email ID:
          </label>
          <input
            type="email"
            id="senderEmail"
            name="sender_email"
            value={formData.sender_email}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />

          {/* App Password */}
          <label htmlFor="appPass" className="block text-white mb-2">
            App Password:
          </label>
          <input
            type="text"
            id="appPass"
            name="app_password"
            value={formData.app_password}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter app password"
            required
          />

          {/* Next Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
}
