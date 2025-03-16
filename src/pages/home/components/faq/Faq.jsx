import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./Faq.module.css";
import { useState } from "react";
const faqData = [
  {
    question: "What types of coding books do you offer?",
    answer:
      "We offer a wide range of coding books, including beginner guides, advanced programming references, data science, web development, software engineering, and more.",
  },
  {
    question: "Are these books available in both physical and digital formats?",
    answer:
      "Yes! We offer books in paperback, hardcover, and eBook (PDF, ePub, Kindle) formats. Availability may vary by title.",
  },
  {
    question: "Do you have books for beginners in programming?",
    answer:
      "Absolutely! We have beginner-friendly books on Python, JavaScript, C++, Java, and more that are perfect for those just starting out.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Simply browse our collection, add books to your cart, and proceed to checkout. We support multiple payment methods for your convenience.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide! Shipping costs and delivery times vary based on location.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days within the US and 10-15 business days for international orders. Expedited options are available.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes! Once your order is shipped, you will receive a tracking number via email.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards (Visa, Mastercard, AmEx), PayPal, Apple Pay, Google Pay, and Buy Now Pay Later (BNPL) services like Klarna and Afterpay.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index) => {
    setOpenIndex(index);
    if (openIndex === index) {
      setOpen((prev) => !prev);
    } else {
      setOpen(true);
    }
    // setOpen(!open);
  };
  return (
    <div className={classes.faqContainer}>
      <div className={classes.faqHeading}>
        <p>Frequently Asked Questions</p>
        <hr />
      </div>
      <div className={classes.faqContent}>
        {faqData.map((item, index) => {
          return (
            <div className={classes.faqQuestion} key={index}>
              <div className={classes.faqQuestionHeader}>
                <p>{item.question}</p>
                {index === openIndex && open ? (
                  <KeyboardArrowUpIcon
                    sx={{
                      cursor: "pointer",
                      color: "var(--text-color)",
                    }}
                    onClick={() => toggleOpen(index)}
                  />
                ) : (
                  <KeyboardArrowDownIcon
                    sx={{
                      cursor: "pointer",
                      color: "var(--text-color)",
                    }}
                    onClick={() => toggleOpen(index)}
                  />
                )}
              </div>
              {openIndex === index && open && (
                <div className={classes.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
