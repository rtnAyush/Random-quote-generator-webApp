import React from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useContext } from "react";
import QuoteContext from "../context/quote/quoteContext";

function Quote() {

    const { quote: [{ content, author }] } = useContext(QuoteContext);

    return (
        <>
            <div id="text-box" style={{ animation: "blink 1.4s ease" }} >
                <FormatQuoteIcon fontSize={"large"} />
                <span id="text">{content}</span>
            </div>
            <div id="author" style={{ animation: "blink 1.4s ease" }}>- {author}</div>
        </>
    );
}

export default Quote;