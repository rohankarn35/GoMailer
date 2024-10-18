// "use client";
// export default function Home() {
//   return (
//     <>
 
// <main className="flex justify-center items-center h-screen bg-black">
//   <form className="flex flex-col w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
//     <label htmlFor="textField" className="text-white mb-2 font-medium">Subject of the email:</label>
//     <input
//       type="text"
//       id="textField"
//       name="textField"
//       className="p-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />

// <label htmlFor="fileUpload" className="text-white mb-2 font-medium">Upload Json File:</label>
//     <input
//       type="file"
//       id="fileUpload"
//       name="fileUpload"
//       accept=".json"
//       className="mb-4 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-700"
//     />
   

//     <label htmlFor="fileUpload" className="text-white mb-2 font-medium">Upload HTML File:</label>
//     <input
//       type="file"
//       id="fileUpload"
//       name="fileUpload"
//       accept=".html"
//       className="mb-4 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-700"
//     />

//     <button
//       type="submit"
//       className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
//     >
//       Preview
//     </button>
//   </form>
// </main>

//     </>
//   );
// }

// // "use client";

// // import { useState } from 'react';

// // export default function Home() {
// //   const [fileContent, setFileContent] = useState<string | null>(null);

// //   // Function to handle file upload
// //   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = event.target.files?.[0]; // Safely access the file
// //     if (file && file.type === 'text/html') {
// //       const reader = new FileReader();
// //       reader.onload = (e: ProgressEvent<FileReader>) => {
// //         if (e.target?.result) {
// //           setFileContent(e.target.result as string); // Set the content of the HTML file
// //         }
// //       };
// //       reader.readAsText(file);
// //     } else {
// //       alert('Please upload a valid HTML file.');
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Dynamic layout */}
// //       <div
// //         className={`flex h-screen bg-gray-900 transition-all duration-500 ${
// //           fileContent ? 'justify-start' : 'justify-center'
// //         } items-center`}
// //       >
// //         {/* Left side: Form */}
// //         <div
// //           className={`flex-col p-8 transition-all duration-500 ${
// //             fileContent ? 'w-1/2' : 'w-full flex justify-center'
// //           }`}
// //         >
// //           <form className="flex flex-col w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
// //             {/* Subject Field */}
// //             <label htmlFor="textField" className="text-white mb-2 font-medium">
// //               Subject of the email
// //             </label>
// //             <input
// //               type="text"
// //               id="textField"
// //               name="textField"
// //               className="p-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />

// //             {/* JSON File Upload */}
// //             <label htmlFor="jsonFileUpload" className="text-white mb-2 font-medium">
// //               Upload JSON File:
// //             </label>
// //             <input
// //               type="file"
// //               id="jsonFileUpload"
// //               name="jsonFileUpload"
// //               accept=".json"
// //               className="mb-4 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-700"
// //             />

// //             {/* HTML File Upload */}
// //             <label htmlFor="fileUpload" className="text-white mb-2 font-medium">
// //               Upload HTML File:
// //             </label>
// //             <input
// //               type="file"
// //               id="fileUpload"
// //               name="fileUpload"
// //               accept=".html"
// //               className="mb-4 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-700"
// //               onChange={handleFileUpload} // Call file handler on change
// //             />

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
// //             >
// //               Preview
// //             </button>
// //           </form>
// //         </div>

// //         {/* Right side: HTML rendering (only visible after file upload) */}
// //         {fileContent && (
// //           <div className="w-1/2 flex justify-center items-center p-8">
// //             <div className="bg-black w-full max-w-lg h-96 border border-gray-400 rounded-lg overflow-hidden">
// //               <iframe
// //                 srcDoc={fileContent} // Render the HTML content in the iframe
// //                 title="Embedded HTML"
// //                 className="w-full h-full"
// //               />
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // }

// pages/LandingPage.tsx

// pages/LandingPage.tsx
"use client";
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [isMounted, setIsMounted] = useState(false);

  // Mount effect to trigger animations after the component is loaded
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      {/* Main Title */}
      <h1
        className={`text-5xl md:text-7xl font-bold mb-4 transition-opacity duration-1000 ease-in-out transform ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        GOMAILER
      </h1>

      {/* Tagline */}
      <p
        className={`text-xl md:text-2xl text-center mb-8 max-w-md transition-opacity duration-1000 ease-in-out delay-200 transform ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        Send your email to the client in one click
      </p>

      {/* Start Button */}
      <a href="/registeration" className="mt-8">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Start
        </button>
      </a>
    </div>
  );
}
