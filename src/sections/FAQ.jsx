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
        <section className="text-white my-[8rem]" id='faq'>
            <h2 className="text-3xl text-accent1 font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80%] mx-auto">
                {FAQData.map((item, columnIndex) => (
                    <div
                        key={columnIndex} className='flex flex-col gap-6'
                    >
                        <h3 className="text-xl text-accent2">
                            {item.title}
                        </h3>
                        {
                            item.questions.map((question, questionIndex) => (
                                <div
                                    key={questionIndex}
                                    className="rounded-lg border border-accent2 p-4"
                                >
                                    <div
                                        className="cursor-pointer flex justify-between items-center"
                                        onClick={() => toggleAccordion(columnIndex, questionIndex)}
                                    >
                                        <div className="font-semibold">{question.question}</div>
                                        <div>{activeIndices[columnIndex] === questionIndex ? '-' : '+'}</div>
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${activeIndices[columnIndex] === questionIndex
                                                ? 'max-h-[1000px] opacity-100'
                                                : 'max-h-0 opacity-0'
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
