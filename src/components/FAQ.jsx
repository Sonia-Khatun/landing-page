import { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "You can return any product within 7 days of delivery.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes, free shipping on orders over $99.",
  },
  {
    question: "How do I track my order?",
    answer: "You’ll receive a tracking link via email once shipped.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
       
        <div className="w-full md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1706552627475-2617a0495e41?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="FAQ Illustration"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow transition duration-300 ease-in-out"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 font-medium text-lg flex justify-between items-center"
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 py-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
