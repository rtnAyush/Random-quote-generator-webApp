function getNewQuote() {
    console.log("action clicked");
    return {
        type: 'NEW_QUOTE'
    }
}

export { getNewQuote };