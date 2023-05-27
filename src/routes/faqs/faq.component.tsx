import React from 'react';
import FAQComponent from '../../components/FAQ/FAQ.component';

const faqs = [
  {
    question: 'How can I return an item?',
    answer: 'You can initiate a return by contacting our customer support team or visiting our Returns page.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards',
  },
  {
    question: 'What is the return period?',
    answer: 'You can return an item within 14 days of purchase'
  },
  {
    question: 'Can I sell the item that I purchased from this store?',
    answer: 'You are not allowed to resell the purchased items as these are only for personal use.'
  },
  {
    question: 'How long will it take for an item to get delivered?',
    answer: 'We will ship your item to your address with out courier partners i.e. Delhivery, Bluedart, DTDC. It should be delivered within 7 days.'
  },
];

const Faqs: React.FC = () => {
  return (
    <div>
      <FAQComponent faqs={faqs} />
    </div>
  );
};

export default Faqs;