import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import QuotesContent from "./QuoteContent";

const QuoteContainer = () => {
  const [quotes, setQuotes] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((response) => {
        setQuotes(response.data.quotes);
        if (response.data.quotes.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * response.data.quotes.length
          );
          setQuoteIndex(response.data.quotes[randomIndex]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleQuoteChange = () => {
    if (quotes.length === 0) return;
    setIsTransitioning(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuoteIndex(quotes[randomIndex]);
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <>
      <QuotesContent
        quotes={quotes}
        isTransitioning={isTransitioning}
        quoteIndex={quoteIndex}
        handleQuoteChange={handleQuoteChange}
      />
    </>
  );
};

export default QuoteContainer;
