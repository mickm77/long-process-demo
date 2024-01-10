import React from "react";
import { buttonPress, typeWriter } from "../helpers/typewriter";



const Data = () => {

    const [spinn, setSpinn] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const fillForm = async () => {
        const num1 = "123";
        const num2 = "456";
        const num3 = "789";
        await typeWriter("num1", num1);
        await typeWriter("num2", num2);
        await typeWriter("num3", num3);
        buttonPress("submit", 30000, () => setSpinn(true), () => { setSpinn(false); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); });

    }


    return <div className="w-full max-w-[550px]">

        <button className="text-green-500 mb-8" onClick={() => fillForm()}>Start</button>
        <form>
            <div className="mb-8">
                <label
                    htmlFor="num1"
                    className="mb-2 block text-base font-medium text-[#07074D]"
                >
                    Important Number 1
                </label>
                <input
                    type="text"
                    name="num1"
                    id="num1"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div className="mb-8">
                <label
                    htmlFor="num2"
                    className="mb-2 block text-base font-medium text-[#07074D]"
                >
                    Important Number 2
                </label>
                <input
                    type="text"
                    name="num2"
                    id="num2"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>

            <div className="mb-8">
                <label
                    htmlFor="num3"
                    className="mb-2 block text-base font-medium text-[#07074D]"
                >
                    Very Important Number 3
                </label>
                <input
                    type="text"
                    name="num3"
                    id="num3"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
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
                    </svg> Saving...</p> : submitted ? "Saved" : "Save"}
                </button>
            </div>
        </form>
    </div>;
}

export default Data;