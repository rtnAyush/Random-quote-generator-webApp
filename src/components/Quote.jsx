import React from "react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Quote(props) {

    return (
        <>
            <div id="text-box" >
                <FormatQuoteIcon fontSize={"large"} />
                <span id="text">{props.quote.content}</span>
            </div>
            <div id="author">- {props.quote.author}</div>
        </>
    );
}

export default Quote;