"use client";
import { useState } from "react";

interface ParsedJson {
  users: { name: string; email: string }[];
}
import EmailForm from "./page"; // Import the EmailForm component
import PreviewPage from "./preview";

export default function ClientDetails({
  sender_name,
  sender_email,
  app_password,
}: {
  sender_name: string;
  sender_email: string;
  app_password: string;
}) {
  const [step, setStep] = useState(4); // Start on step 2 (clientdetails page)
  const [html_template, setFileJson] = useState<string>("");
  const [userContent, setUserJson] = useState<string>("");
  const [fileContent, setFileContent] = useState<ParsedJson | null>(null); // Declare state with the specific type
  const [subject, setSubject] = useState<string | null>(null);

  // Function to handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Safely access the file
    if (file && file.type === "text/html") {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          let htmlContent = e.target.result as string;
          let userContent = e.target.result as string;
          userContent = userContent.replace(/%name%/g, sender_name); // Replace all occurrences of %name% with "user"
          setFileJson(htmlContent); // Set the modified content of the HTML file
          setUserJson(userContent); // Set the modified content of the HTML file
        }
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid HTML file.");
    }
  };

  const isValidParsedJson = (json: any): json is ParsedJson => {
    return (
      json &&
      Array.isArray(json.users) &&
      json.users.every(
        (user: any) =>
          typeof user.name === "string" && typeof user.email === "string"
      )
    );
  };

  const handleJsonUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Safely access the file
    if (file && file.type === "application/json") {
      // Check if the file is a JSON file
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          try {
            const parsedJson = JSON.parse(e.target.result as string); // Parse the JSON content
            // Type-check the parsed JSON
            if (isValidParsedJson(parsedJson)) {
              setFileContent(parsedJson); // Set the parsed JSON object if it matches the expected structure
            } else {
              throw new Error(
                "Invalid JSON structure. Expecting a 'users' array with 'name' and 'email' fields."
              );
            }
          } catch (error: any) {
            alert(`Error parsing the JSON file: ${error.message}`);
          }
        }
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid JSON file.");
    }
  };

  // Function to handle going back to the email form
  const handleBack = (e: React.FormEvent) => {
    e.preventDefault();

    setStep(1); // Set step to 1 to show the EmailForm component again
  };
  const handlePreview = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fileInputs = form.querySelectorAll('input[type="file"]'); // Get all file inputs
    fileInputs.forEach((input) => {
      (input as HTMLInputElement).value = "";
    });
    // Handle the preview functionality here
    if (subject && fileContent && fileContent) setStep(2);
  };

  // Conditionally render the EmailForm or ClientDetails based on the step
  if (step === 1) {
    return <EmailForm />; // Go back to the previous page (EmailForm)
  }
  if (step === 2) {
    return (
      <PreviewPage
        sender_name={sender_name}
        sender_email={sender_email}
        app_password={app_password}
        fileContents={fileContent}
        user_template={userContent}
        html_template={html_template}
        subject={subject}
      />
    );
  }

  return (
    <>
      <header className="flex justify-start p-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">GOMAILER</h1>
      </header>
      <main className="flex justify-center items-center h-screen bg-gray-900">
        <form
          className="flex flex-col w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md"
          onSubmit={handlePreview}
        >
          <label htmlFor="textField" className="text-white mb-2 font-medium">
            Subject of the email:
          </label>
          <input
            type="text"
            id="textField"
            name="textField"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="p-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="fileJson" className="text-white mb-2 font-medium">
            Upload Json File:
          </label>
          <input
            onChange={handleJsonUpload}
            type="file"
            id="fileJson"
            name="fileJson"
            accept=".json"
            className="mb-4 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-700"
          />

          <label htmlFor="fileUpload" className="text-white mb-2 font-medium">
            Upload HTML File:
          </label>
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            accept=".html"
            onChange={handleFileUpload}
            className="mb-4 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-700"
          />

          <button
            type="submit"
            //   onClick={handlePreview}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
          >
            Preview
          </button>

          {/* Back Button */}
          <button
            type="button"
            onClick={handleBack}
            className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
          >
            Back
          </button>
        </form>
      </main>
    </>
  );
}
