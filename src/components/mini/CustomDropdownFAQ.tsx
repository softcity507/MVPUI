import React, { useState } from "react";
import { Description } from "./Description";
import { Heading } from "./Heading";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";


interface FAQ {
  question: string;
  answer: string;
}

 const faqs: FAQ[] = [
  {
    question: "How does the tool work?",
    answer:
      "It's super simple - You just create your account, download the Chrome extension, add your domain and choose the funnel template you want to use, then answer a few questions and let the MVP tool generate the funnel into your account.",
  },
  {
    question: "What's the pricing for this tool?",
    answer:
      "We've spent months developing this and there's AI credits involved for us, so we can't make it free forever. Everyone gets 3 free funnels generated and then you can upgrade to the lifetime deal where you can generate all the funnels you want, without paying a monthly fee for our software.",
  },
  {
    question: "What if I get stuck and need help?",
    answer:
      "No problem, we have a link when you join where you can access a Private Community to get additional support and guidance if needed - but we also have video tutorials showing you how simple it is to setup. Literally anyone can do this, because it's just a few clicks and the tool does the rest. And if you ever need anything, you can always email us at support@MVP.ai .",
  },
  {
    question: "Is there a money back guarantee?",
    answer:
      "Due to the nature of our product, we've had to protect our company and development team against any potential fraud and theft, so there will be no refunds available, no exceptions. We've made the tool easy to use, and we provide tutorials on how to use it so there shouldn't be any issues for you. And while there's no refunds available, we welcome feedback and you can always request additional updates.",
  },
  {
    question: "Which softwares can MVP generate funnels in?",
    answer:
      "Happy you asked - we only support HighLevel and we're proud to help more people easily use GHL to launch funnels in seconds. Plus, you get 30 days free of GHL when you sign up with our link, so you can try it out for free to decide if you like it or not.",
  },
  {
    question: "Do I need a HighLevel subscription?",
    answer:
      "Yes, you need a GHL subscription or a white-label Saas of GHL where you can import the funnels.",
  },
];

export const CustomDropdownFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 hover:border-gray-500   p-3 rounded-[10px] my-4 cursor-pointer"
        >
          <div
            className="flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <Heading text={faq.question} className="text-lg text-gray-600 [@media(max-width:400px)]:text-sm text-left"/>
            {activeIndex === index ? <FaChevronUp className="text-gray-600"  size={20}/> : <FaChevronDown className="text-gray-600"  size={20}/>}
          </div>
          {activeIndex === index && (
            <Description text={faq.answer} desClass="px-2 mt-2" />
          )}
        </div>
      ))}
    </div>
  );
};

 