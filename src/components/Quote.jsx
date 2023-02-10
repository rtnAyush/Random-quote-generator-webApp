import React from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Quote(props) {

    return (
        <>
            <div id="text-box" style={{ animation: "blink 1.4s ease" }} >
                <FormatQuoteIcon fontSize={"large"} />
                <span id="text"></span>
            </div>
            <div id="author" style={{ animation: "blink 1.4s ease" }}>- </div>
        </>
    );
}

export default Quote;