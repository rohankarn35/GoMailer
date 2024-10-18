import { FC } from "react";
import Head from "next/head";

const Documentation: FC = () => {
  return (
    <>
      <header className="flex justify-start p-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">GOMAILER</h1>
      </header>
      <div className="bg-gray-900 min-h-screen py-10 px-5">
        <Head>
          <title>Email Sending Service Documentation</title>
          <meta
            name="description"
            content="Documentation for the Email Sending Service"
          />
        </Head>
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-6 hover:text-blue-400 transition duration-300">
            Email Sending Service Documentation
          </h1>
          <p className="mb-4 text-gray-300">
            Welcome to our email sending service! Follow the instructions below
            to get started with sending emails efficiently.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-6 mb-3">
            Prerequisites
          </h2>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            <li>
              1. An app password for the email account from which the email will
              be sent.
            </li>
            <li>
              2. A JSON file containing the names and emails of your clients.
            </li>
            <li>
              3. An HTML file for the email content. Use{" "}
              <code className="bg-gray-700 text-white rounded px-1">
                %name%
              </code>{" "}
              in the HTML file to indicate where the client&apos;s name should be
              placed.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold text-white mt-6 mb-3">
            Important Notes
          </h2>
          <p className="mb-4 text-gray-300">
            - If you are using the free service of Gmail, please note that there
            is a daily limit of 100 emails. For higher volume sending, consider
            purchasing a premium Gmail service.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-6 mb-3">
            How to Use
          </h2>
          <ol className="list-decimal list-inside mb-4 text-gray-300">
            <li>
              Obtain the app password for your Gmail account. This can be done
              through your Google Account settings.
            </li>
            <li>
              Create a JSON file containing the names and emails of your clients
              in the following format:
              <pre className="bg-gray-700 text-white p-2 rounded mt-2">
                {`[
  { "name": "Client 1", "email": "client1@example.com" },
  { "name": "Client 2", "email": "client2@example.com" }
]`}
              </pre>
            </li>
            <li>
              Design your HTML email template, ensuring to include{" "}
              <code className="bg-gray-700 text-white rounded px-1">
                %name%
              </code>{" "}
              where you want the client&apos;s name to appear.
            </li>
            <li>
              Use the provided interface on our website to upload your JSON file
              and HTML template, along with entering your app password and
              sender details.
            </li>
            <li>
              Hit the send button, and your emails will be dispatched to your
              clients!
            </li>
          </ol>

          <h2 className="text-3xl font-semibold text-white mt-6 mb-3">
            Support
          </h2>
          <p className="mb-4 text-gray-300">
            If you encounter any issues or have questions, feel free to contact
            our support team.
          </p>
        </div>
      </div>
    </>
  );
};

export default Documentation;
