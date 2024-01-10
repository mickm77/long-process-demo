import React from "react";
import { buttonPress, typeWriter } from "../helpers/typewriter";



const ProgressBar = () => {
    const [complete, setComplete] = React.useState(false);
    const [showProgess, setShowProgress] = React.useState(false);
    const start = async () => {

        await typeWriter("name", "MyFile.jpg");
        await typeWriter("description", "A really nice picture");
        buttonPress("submit", 8000, () => setShowProgress(true), () => setComplete(true));

    };

    const completed = () => {
        setComplete(true);
    };

    if (complete) return (
        <div className="w-full max-w-[550px]">
            <h1 className="bg-green-700 text-xl px-8 py-4 text-center font-semibold rounded">File successfully uploaded</h1>
        </div>
    );

    return <div className="w-full max-w-[550px]">

        <button className="text-green-500 mb-8" onClick={() => start()}>Start</button>
        <form>
            <div className="mb-8">
                <label
                    htmlFor="name"
                    className="mb-2 block text-base font-medium text-[#07074D]"
                >
                    File To Upload
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="File Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div className="mb-8">
                <label
                    htmlFor="description"
                    className="mb-2 block text-base font-medium text-[#07074D]"
                >
                    Description
                </label>
                <input
                    type="input"
                    name="description"
                    id="description"
                    placeholder="A nice picture"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>

            <div>
                {showProgess
                    ? <Bar complete={completed} />
                    : <button
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                        type="button"
                        id="submit"
                    >
                        Upload
                    </button>}
            </div>
        </form>
    </div>;

}

const Bar = ({ complete }) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
                complete();
                return;
            }
            setProgress((prevProgress) => {
                if (prevProgress > 99) {
                    clearInterval(interval);
                    complete();

                    return 100;
                }
                return prevProgress + 10;
            });
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
                className="h-full bg-[#6A64F1] rounded-full"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

export default ProgressBar;