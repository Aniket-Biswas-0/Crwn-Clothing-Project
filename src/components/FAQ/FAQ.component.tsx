import React, { useState } from 'react';

import {
  FAQContainer,
  FAQQuestion,
  FAQItems,
  FAQAnswer
} from './FAQ.styles';

type FAQ = {
  question: string;
  answer: string;
};

type FAQComponentProps = {
  faqs: FAQ[];
};

const FAQComponent: React.FC<FAQComponentProps> = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (index === expandedIndex) {
      setExpandedIndex(null); // Collapse if the same question is clicked again
    } else {
      setExpandedIndex(index); // Expand the clicked question
    }
  };

  return (
    <FAQContainer>
      <h2>FAQ</h2>
      {faqs.map((faq, index) => (
        <FAQItems key={index} className="faq-item">
          <FAQQuestion
            className={`question ${index === expandedIndex ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
          </FAQQuestion>
          {index === expandedIndex && <FAQAnswer className="answer">{faq.answer}</FAQAnswer>}
        </FAQItems>
      ))}
    </FAQContainer>
  );
};

export default FAQComponent;