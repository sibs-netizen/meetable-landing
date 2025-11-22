import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Meetable work?",
      answer: "We match six people around a table in your city. You choose the date, we handle the venue, guest list, and logistics."
    },
    {
      question: "Do I come alone?",
      answer: "Most guests arrive solo, which makes it easier to connect. You're welcome to bring a friend, but seats are booked individually."
    },
    {
      question: "What about dietary requirements?",
      answer: "We ask for your dietary needs in advance and work with partner restaurants to accommodate them wherever possible."
    },
    {
      question: "Is this a dating event?",
      answer: "Meetable is friendship-first. Some people may click romantically, but the focus is on building meaningful connections."
    },
    {
        question: "How do you choose locations?",
        answer: "We partner with highly-rated local restaurants that offer a great ambiance for conversation and connection."
    },
    {
        question: "What if I don't click with anyone?",
        answer: "Our matching algorithm is designed to maximize compatibility, but connection is personal. Even if you don't find a new best friend, you'll enjoy a great meal and conversation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <h2 className="faq-heading">Any questions?</h2>
      <p className="faq-subtitle">
        We cover everything from how dinners work to dietary requirements and safety.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
