import React from "react";
import { buttonPress, typeWriter } from "../helpers/typewriter";



const Data2 = () => {

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
        {spinn && <Saver />}
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
                    {spinn ? "Saving..." : "Save"}
                </button>
            </div>
        </form>
    </div>;
}

const Saver = () => {

    const pleaseWaitPhrases = [
        "Uploading data...",
        "Recalculating the meaning of life...",
        "Trying to find out if there is a train strike on Saturday...",
        "...There is a lot to do in the background, still saving..."
    ]

    const [phrase, setPhrase] = React.useState(pleaseWaitPhrases[0]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setPhrase(pleaseWaitPhrases[Math.floor(Math.random() * pleaseWaitPhrases.length)]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="w-[300px] h-[150px] bg-white rounded-sm">
            <p className="bg-[#6A64F1] px-4 py-2 ">Saving...</p>
            <div className="text-gray-800 text-sm p-6 flex justify-center items-center"><p>{phrase}</p></div>
        </div>
    </div>
}

export default Data2;