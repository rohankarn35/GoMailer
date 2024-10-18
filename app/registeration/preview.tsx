"use client";

import { useState } from "react";
import LogsPage from "../logspage/page"; // Import the LogsPage component
import Image from "next/image";

interface ParsedJson {
  users: { name: string; email: string }[];
}

const userPhotoURL = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

export default function PreviewPage({
  subject,
  sender_name,
  sender_email,
  app_password,
  html_template,
  fileContents,
  user_template,
}: {
  subject: string | null;
  sender_name: string;
  sender_email: string;
  app_password: string;
  fileContents: ParsedJson | null;
  html_template?: string;
  user_template?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [emailResponse, setEmailResponse] = useState<string | null>(null);
  const [showLogs, setShowLogs] = useState(false); // State to control logs page visibility
  const [isLogVisible, setIsLogVisible] = useState<boolean>(false); // Animation state

  const handleBack = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setToastMessage("Sending email...");

    try {
      const response = await fetch("http://localhost:8080/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          sender_name,
          sender_email,
          app_password,
          html_template,
          ...fileContents,
        }),
      });

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();
      setEmailResponse(data);
      setToastMessage("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      if (error instanceof Error && error.message.includes("401")) {
        setToastMessage(
          "Invalid email or app password. Please check your credentials."
        );
      } else {
        setToastMessage("Failed to send mail. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewLogs = () => {
    // Show logs with sliding animation
    setShowLogs(true);
    setTimeout(() => {
      setIsLogVisible(true); // Trigger animation after slight delay
    }, 100);
  };

  const handleCloseLogs = () => {
    setIsLogVisible(false); // Start hiding animation
    setTimeout(() => {
      setShowLogs(false); // Hide logs after animation ends
    }, 500); // Match the duration of the animation
  };

  return (
    <>
      <header className="flex justify-start p-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">GOMAILER</h1>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 relative">
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            type="button"
            onClick={handleBack}
            className={`bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-all ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            Back
          </button>
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Submit
          </button>
        </div>

        {toastMessage && (
          <div className="fixed top-20 right-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-between space-x-4">
            <span>{toastMessage}</span>
            {emailResponse && (
              <button
                className="bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-gray-200 transition-all"
                onClick={handleViewLogs} // Show logs page on click
              >
                View Logs
              </button>
            )}
          </div>
        )}

        <div className="bg-gray-800 shadow-lg rounded-lg w-full max-w-3xl p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-white">{subject}</h1>
          </div>

          <div className="flex items-center mb-6">
            <Image
              src={userPhotoURL}
              alt="User Photo"
              className="rounded-full w-12 h-12 mr-4"
            />
            <div>
              <p className="font-medium text-white">
                {sender_name} &lt;{sender_email}&gt;
              </p>
              <p className="text-gray-400 text-sm">to me</p>
            </div>
          </div>

          <div className="border-t pt-4">
            {fileContents ? (
              <iframe
                srcDoc={user_template}
                className="w-full h-96 border border-gray-700 rounded-lg"
                title="Email Content"
              />
            ) : (
              <p className="text-gray-400 text-center">
                No HTML content available.
              </p>
            )}
          </div>
        </div>

        {/* Logs Page with sliding animation */}
        {showLogs && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-80 z-50 flex">
            {/* Sliding Logs Page */}
            <div
              className={`fixed right-0 top-0 w-1/3 h-full bg-gray-900 shadow-lg transform transition-transform duration-500 ease-in-out ${
                isLogVisible ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <LogsPage /> {/* Show the LogsPage here */}
              <button
                className="absolute top-4 right-4 text-white"
                onClick={handleCloseLogs} // Hide logs page on close
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
