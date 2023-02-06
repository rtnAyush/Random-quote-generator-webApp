import React, { useEffect, useState } from "react";
import "../css/styles.css"
import Quote from "./Quote"
import Btn from "./Btn"
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
    const [quote, setQuote] = useState([]);
    const [newQuote, setNewQuote] = useState("");
    const [randomColorStyle, setRandomColorStyle] = useState({
        backgroundColor: "black",
        color: "black"
    });


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var randomColor = '#';
        for (var i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        setRandomColorStyle({
            backgroundColor: randomColor,
            color: randomColor
        })
    }

    useEffect(() => {
        getRandomColor();

        const cleanFetch = fetch("https://api.quotable.io/random")
            .then(res => res.json())
            .then(
                (quote) => {
                    setQuote(quote)
                }
            )
        return () => clearInterval(cleanFetch);

    }, [newQuote]);

    return (
        <div className="container" style={randomColorStyle} >
            <div id="quote-box" >
                <Quote key={quote._id} quote={quote} />

                <div className="icon-box">
                    <Btn text={<TwitterIcon fontSize={"medium"} />} id={"tweet-quote"} link={"//twitter.com/intent/tweet"} randomColor={randomColorStyle.color} />
                    <Btn text={"New quote"} id={"new-quote"} onCall={setNewQuote} randomColor={randomColorStyle.color} />
                </div>
            </div>
            <footer>
                <p>Made with ❤️ by Ayush</p>
            </footer>
        </div>
    );
}

export default App;