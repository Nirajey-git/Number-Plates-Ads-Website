import React from 'react'
import { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const makeTenFAQ = [
  {
    id: 1,
    question: "What are Standard Number Plate Covers?",
    answer: "Standard covers are clear protective frames that keep your plates safe from dirt, scratches, and fading while keeping a simple look."
  },
  {
    id: 2,
    question: "What are Premium Number Plate Covers?",
    answer: "Premium covers offer extra durability and stylish finishes such as tinted, chrome, or carbon-fiber effects, giving your car a sleek appearance."
  },
  {
    id: 3,
    question: "What are Euro-Style Plate Covers?",
    answer: "Euro covers are designed for the longer, slimmer European-style plates. They provide full protection while complementing the modern Euro plate design."
  },
  {
    id: 4,
    question: "Are the covers easy to install?",
    answer: "Yes! Most covers simply clip or screw on over your number plate. No special tools are usually required."
  },
  {
    id: 5,
    question: "Are number plate covers legal?",
    answer: "Clear covers are generally legal as long as they don’t block visibility of the plate. Tinted or decorative covers may have restrictions depending on local laws."
  }
];

  return (
    <div className="w-full h-100vh mt-5 bg-white flex  flex-col justify-center overflow-y-hidden">
            <div className="w-full m-auto  bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center mb-6 font-sans">Frequently Asked Questions</h2>
                {makeTenFAQ.map((q) => (
                    <div key={q.id} className="mb-4 last:mb-0 max-w-[1200px] m-auto">
                        <button className="w-full text-left text-xl focus:outline-none p-4 bg-white rounded-lg shadow-md flex justify-between items-center" onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
                            {q.question}
                            {activeQuestion === q.id ? (
                                <FaChevronUp/>
                                
                            ) : (
                                <FaChevronDown/>
                            
                            )}

                        </button>
                        {activeQuestion === q.id && (
                            <div className="mt-2 p-4 bg-white rounded-lg shadow-inner">
                                <p className="text-gray-700">{q.answer}</p>
                            </div>
                        )}
                        </div>
                ))}
                

            </div>
    
        </div>

   
  )
}
