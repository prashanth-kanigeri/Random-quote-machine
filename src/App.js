import { useState, useEffect } from "react";
import "./App.css";
import data from "./quotes";

function App() {
  const [quote, setQuote] = useState("");
  const [author,setAuthor]=useState("");
  const [bgColor, setBgColor] = useState("#42542C");
  // Fetch random quote from ZenQuotes API
const newQuote=()=>{
  const randomQuote = data[Math.floor(Math.random()*data.length)];
console.log(randomQuote);
  setQuote(randomQuote.q);
setAuthor(randomQuote.a)
const newColor = randomColor();
    setBgColor(newColor);
    document.getElementById("root").style.backgroundColor = newColor;

};
  // Function to generate a random color
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  useEffect(() => {
    newQuote();
    console.log("useEffect triggered"); 
  }, []);
console.log("Quote" +quote);
  // Create a tweet link
  const tweetQuote = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`;

  return (
    <div id="quote-box">
      <div id="container">
        <div id="text" style={{ color: bgColor }}>
          <p>"{quote}"</p> {/* Use correct property 'text' */}
        </div>
        <div id="author" style={{ color: bgColor }}>
          <p>- {author}</p> {/* Use correct property 'author' */}
        </div>
      </div>
      <div id="btn">
        <button
          id="new-quote"
          onClick={newQuote}
          style={{ backgroundColor: bgColor }}
        >
          New Quote
        </button>
        <a
          id="tweet-quote"
          className="btn btn-info"
          href={tweetQuote}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
