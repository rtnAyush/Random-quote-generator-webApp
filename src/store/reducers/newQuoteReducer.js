import axios from "axios";
let initialState = {
    quotes: []
};

async function newQuoteReducer(state = initialState, action) {
    switch (action.type) {
        case "NEW_QUOTE":
            console.log("reducer called");
            const newQuote = await axios.get("https://api.quotable.io/random");

            // console.log(newQuote.data);
            return {
                ...state,
                quotes: [newQuote.data]
            }

        default:
            console.log("default");
            return state;
    }
}

export default newQuoteReducer;