// "use client";
// import { useEffect, useState } from "react";

// interface EmailLog {
//   email: string;
//   status: string;
//   message: string;
// }

// export default function LogsPage() {
//   const [emailLogs, setEmailLogs] = useState<EmailLog[] | null>(null);

//   useEffect(() => {
//     // Get response data from query params
//     const params = new URLSearchParams(window.location.search);
//     const data = [
//         {
//           "email": "rohankardvf4@gmail.com",
//           "status": "sent",
//           "message": "Email sent successfully"
//         },
//         {
//           "email": "gdsc.rohankarn@gmail.com",
//           "status": "failed",
//           "message": "Email sent successfully"
//         }
//       ]

//     if (data) {
//       try {
//         const parsedData: EmailLog[] = data;
//         setEmailLogs(parsedData);
//       } catch (error) {
//         console.error("Error parsing response data:", error);
//         setEmailLogs(null);
//       }
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-3xl font-bold mb-4">Email Logs</h1>
//       {emailLogs ? (
//         <div className="space-y-4">
//           {emailLogs.map((log, index) => (
//             <div
//               key={index}
//               className={`p-4 rounded-lg shadow-md ${
//                 "bg-gray-800"
//               }`}
//             >
//               <p className="text-lg">
//                 <span className="font-semibold">Email:</span> {log.email}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">Status:</span>{" "}
//                 <span
//                   className={`${
//                     log.status === "failed"
//                       ? "text-red-400"
//                       : "text-green-400"
//                   }`}
//                 >
//                   {log.status}
//                 </span>
//               </p>
//               <p className={`text-lg  "text-gray-300"`}>
//                 <span className="font-semibold">Message:</span> {log.message}
//               </p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No logs available.</p>
//       )}

//      <a href="/registeration">
//      <button
//         className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//       >
//         Go back
//       </button>
//      </a>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";

interface EmailLog {
  email: string;
  status: string;
  message: string;
}

export default function LogsPage() {
  const [emailLogs, setEmailLogs] = useState<EmailLog[] | null>(null);

  useEffect(() => {
    const data = [
      {
        email: "rohankardvf4@gmail.com",
        status: "sent",
        message: "Email sent successfully",
      },
      {
        email: "gdsc.rohankarn@gmail.com",
        status: "failed",
        message: "Email failed to send",
      },
    ];

    if (data) {
      try {
        const parsedData: EmailLog[] = data;
        setEmailLogs(parsedData);
      } catch (error) {
        console.error("Error parsing response data:", error);
        setEmailLogs(null);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Email Logs</h1>
      {emailLogs ? (
        <div className="space-y-4">
          {emailLogs.map((log, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
              <p className="text-lg">
                <span className="font-semibold">Email:</span> {log.email}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`${
                    log.status === "failed" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {log.status}
                </span>
              </p>
              <p className="text-lg text-gray-300">
                <span className="font-semibold">Message:</span> {log.message}
              </p>
            </div>
          ))}
          <a href="/registeration">
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Go back
            </button>
          </a>
        </div>
      ) : (
        <p>No logs available.</p>
      )}
    </div>
  );
}
