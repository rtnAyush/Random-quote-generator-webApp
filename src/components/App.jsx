import "../css/styles.css"
import Quote from "./Quote"
import Btn from "./Btn"
import { useContext } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import QuoteState from "../context/quote/quoteState";

import ColorContext from "../context/randomColor/colorContext";

function App() {

    const { randomColor: color } = useContext(ColorContext);

    return (

        <div className="container" style={{ backgroundColor: color, color: color }}>
            <QuoteState>
                <div id="quote-box" >
                    <Quote />

                    <div className="icon-box">
                        <Btn text={<TwitterIcon fontSize={"medium"} />} id={"tweet-quote"} link={"//twitter.com/intent/tweet"} />
                        <Btn text={"New quote"} id={"new-quote"} />
                    </div>
                </div>
                <footer>
                    <p>Made with ❤️ by Ayush</p>
                </footer>
            </QuoteState>
        </div>

    );
}

export default App;