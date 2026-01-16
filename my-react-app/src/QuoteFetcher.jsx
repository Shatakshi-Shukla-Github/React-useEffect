import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
    setIsLoading(false);
  }
  return (
    <div>
      {isLoading && <div class="loader"></div>}
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
      {!isLoading && <button onClick={fetchQuote}>Get Quote</button>}
    </div>
  );
}
