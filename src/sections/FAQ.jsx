import { useState } from 'react';
import FAQData from '../data/FAQ.data';

const FAQ = () => {
    const [activeIndices, setActiveIndices] = useState(Array(FAQData.length).fill(null));

    const toggleAccordion = (columnIndex, questionIndex) => {
        setActiveIndices(prevIndices => {
            const newIndices = [...prevIndices];
            newIndices[columnIndex] = newIndices[columnIndex] === questionIndex ? null : questionIndex;
            return newIndices;
        });
    };

    return (
        <section className="text-white">
            <h2 className="text-3xl text-accent1 font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="flex flex-wrap justify-center items-center w-[80%] m-auto">
                {FAQData.map((item, columnIndex) => (
                    <div
                        key={columnIndex} className="p-3 flex flex-col text-center md:w-1/2 w-full justify-center items-center space-y-5"
                    >
                        <h3 className="text-xl text-accent2">
                            {item.title}
                        </h3>
                        {
                            item.questions.map((question, questionIndex) => (
                                <div
                                    key={questionIndex}
                                    className="rounded-md border border-accent2 p-4 w-full"
                                >
                                    <div
                                        className="cursor-pointer flex justify-between items-center"
                                        onClick={() => toggleAccordion(columnIndex, questionIndex)}
                                    >
                                        <div className="font-semibold">{question.question}</div>
                                        <div>{activeIndices[columnIndex] === questionIndex ? '-' : '+'}</div>
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${activeIndices[columnIndex] === questionIndex ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                        dangerouslySetInnerHTML={{ __html: question.answer }}
                                    />
                                </div>
                            ))

                        }
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
