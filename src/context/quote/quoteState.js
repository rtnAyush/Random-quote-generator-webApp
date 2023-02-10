import QuoteContext from "./quoteContext";
import { useState, useEffect } from "react";
import axios from "axios";

const QuoteState = (props) => {

    const [quote, setQuote] = useState([]);

    async function fetchData() {
        const res = await axios.get("https://api.quotable.io/random");
        setQuote(res.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <QuoteContext.Provider value={{ quote, fetchData }}>
            {props.children}
        </QuoteContext.Provider>
    )
}

export default QuoteState;