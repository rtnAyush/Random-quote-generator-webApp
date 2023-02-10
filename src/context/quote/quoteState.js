import QuoteContext from "./quoteContext";
import { useState, useEffect } from "react";
import axios from "axios";

const QuoteState = (props) => {

    const [quotes, setQuote] = useState([{
        content: "null",
        author: ""
    }]);

    async function fetchData() {
        const res = await axios.get("https://api.quotable.io/random");
        setQuote([res.data, ...quotes]);
    }
    // console.log(quote);
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])
    console.log(quotes);

    const quote = quotes.filter((quote, idx) => {
        return idx === 0;
    })
    return (
        <QuoteContext.Provider value={{ quote, fetchData }}>
            {props.children}
        </QuoteContext.Provider>
    )
}

export default QuoteState;