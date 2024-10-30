import React from "react";
import { useState, useEffect } from "react";
import "./QuoteContent.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const QuoteContent = ({
  quotes,
  isTransitioning,
  quoteIndex,
  handleQuoteChange,
}) => {
  return (
    <div id="quote-box" className="quote-box-wrapper">
      {quotes.length > 0 ? (
        <div
          className={`quote ${
            isTransitioning ? "fade-out" : "fade-in"
          } quote-content`}
        >
          <h2 id="text" className="quote-text">
            {quoteIndex.quote}
          </h2>
          <p id="author" className="quote-author">
            - {quoteIndex.author}
          </p>
        </div>
      ) : (
        <p>No quotes available</p>
      )}
      <button onClick={handleQuoteChange} id="new-quote" className="buttons">
        New Quote
      </button>
      <a
        id="tweet-quote"
        className="btn btn-info"
        href={
          quoteIndex
            ? `https://twitter.com/intent/tweet?text="${quoteIndex.quote} - ${quoteIndex.author}"`
            : "#"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-square-x-twitter fa-2x"></i>
      </a>
    </div>
  );
};

export default QuoteContent;
