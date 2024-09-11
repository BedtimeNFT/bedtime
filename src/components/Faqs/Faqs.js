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
    question: " What Blockchain are the Bedtime Creations on? ",
    answer:
      "Bedtime Creations are minted on the Ethereum blockchain through a custom ERC-721 smart contract. ",
  },
  {
    question: " How can I get a Bedtime Creations OG NFT? ",
    answer:
      " They are available from the secondary market on MagicEden.io or OpenSea.io and other secondary market NFT platforms. ",
  },
  {
    question: " How can I get a Bedtime Creations Companion? ",
    answer:
      "You can mint a Companion here on the Bedtime website by going to the Mint page from the menu. After you mint, they will be available to see on MagicEden or OpenSea and other secondary market NFT platforms. ",
  },
  {
    question: "  What is the Companion mint price and supply? ",
    answer:
      "The price of a Companion mint is 1 ETH. If you mint 5 you will get one free. The collection consists of 1,000 total. There are 3 rarity types with 600 Emeralds, 350 Rubys, and only 50 Diamond Companions. ",
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
