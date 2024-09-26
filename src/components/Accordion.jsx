import { useState } from "react";

export default function Accordion({title, answer}) {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className="p-2 mx-5 mb-2 border border-black rounded-lg hover:bg-emerald-50 md:mx-32">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full pr-1 "
            >
                <span className="border-b-4 border-emerald-100">{title}</span>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <svg
                    className="mt-1 ml-8 fill-emerald-700 shrink-0"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                </svg>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">{answer}</div>
            </div>
        </div>
    )
}
