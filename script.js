// let apiQuotes = [];

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
function newQuote() {
  handleLoading(true);
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  if (quote.text.length > 100) {
    quoteText.classList.add("long-text");
  } else {
    quoteText.classList.remove("long-text");
  }
  authorText.textContent = quote.author ?? "Unkown";
  quoteText.textContent = quote.text;
  handleLoading(false);
}
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -${authorText.textContent}`;
  window.open(tweetUrl, "_blank");
}

function handleLoading(isLoading) {
  quoteContainer.hidden = isLoading;
  loader.hidden = !isLoading;
}
twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);

newQuote();
