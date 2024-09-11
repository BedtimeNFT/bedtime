import React, { useState } from "react";
import "./Faqs.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const faqData = [
  {
    question: " Why is Bedtime’s Twitter dated from 2008? ",
    answer:
      "Bedtime’s team loved the idea of having a one word username that is easily recognizable and eye-catching. They came across @Bedtime which was created in 2008 and decided to use it as Bedtime’s main Twitter account. They did not end up transferring the username to a new account as they did not see it as a big deal. ",
  },
  {
    question: " What Blockchain Network will the Creations be on? ",
    answer:
      "Bedtime Creations will be stored on the Ethereum network, and minted through a custom smart contract. ",
  },
  {
    question: "  What is the price and supply? ",
    answer:
      "The price of one creation will be 0.025 ETH. The exact price will be played off of the market for the benefit of the Bedtime community. The collection supply will be 10,000. ",
  },
  {
    question: " How can I get Creation?",
    answer:
      "You will be able to mint a Creation here on the Bedtime website. After mint, they will be available on OpenSea and other secondary market NFT platforms.",
  },
  {
    question: " Is the Bedtime dreamlist and whitelist the same thing?",
    answer:
      "The Bedtime dreamlist and whitelist are not the same thing! The dreamlist will be a guaranteed mint opportunity and will be first priority. The whitelist will be overallocated and will come after the dreamlist mint. Anyone whitelisted will have to attempt to mint before selling out. If the 10000 Creations are not sold out by the time the whitelist mint period ends, then mint will become open to the public.",
  },
  // Add more FAQ entries as needed
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="storybg">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="aos-init aos-animate"
      >
        FAQ's
      </h2>
      <div className="accordionbg">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <h3>{faq.question}</h3>
              <div className="AccordionIcon">
                {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
