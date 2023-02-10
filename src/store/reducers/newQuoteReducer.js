import axios from "axios";
let initialState = {
    content: "",
    author: ""
}

async function newQuoteReducer(state = initialState, action) {
    switch (action.type) {
        case "NEW_QUOTE":
            console.log("reducer called");
            const newQuote = await axios.get("https://api.quotable.io/random");

            // console.log(newQuote.data);
            return {
                content: newQuote.data.content,
                author: newQuote.data.author,
            }
        // return {
        //     content: "newQuote.data.content",
        //     author: "newQuote.data.author",
        // }


        default:
            // console.log("default");
            return state;
    }
}

export default newQuoteReducer;