import React from "react";
import { buttonPress, typeWriter } from "../helpers/typewriter";


const Spinner = () => {

  const [spinn, setSpinn] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);


  const fillForm = async () => {
    const nameText = "Jonn Smythe";
    const emailText = "jonn@smythe.com";
    const subjectText = "Hello World!";
    const messageText = "Hi! Please contact me at your earliest convenience. Thanks!";
    await typeWriter("name", nameText);
    await typeWriter("email", emailText);
    await typeWriter("subject", subjectText);
    await typeWriter("message", messageText);
    buttonPress("submit", 16000, () => setSpinn(true), () => { setSpinn(false); setSubmitted(true); });
  }

  if (submitted) return (
    <div className="w-full max-w-[550px]">
      <h1 className="bg-green-700 text-xl px-8 py-4 text-center font-semibold rounded">Thank you for your submission!</h1>
    </div>
  );

  return <div className="w-full max-w-[550px]">

    <button className="text-green-500 mb-8" onClick={() => fillForm()}>Start</button>
    <form>
      <div className="mb-8">
        <label
          htmlFor="name"
          className="mb-2 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="email"
          className="mb-2 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
          type="input"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="subject"
          className="mb-2 block text-base font-medium text-[#07074D]"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="message"
          className="mb-2 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea
          rows={4}
          name="message"
          id="message"
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          type="button"
          id="submit"
        >
          {spinn ? <p className="flex"><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> Submitting...</p> : "Submit"}
        </button>
      </div>
    </form>
  </div>;
}

export default Spinner;
