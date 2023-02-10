// import React, { useState } from "react";
// import { useSelector } from "react-redux";
import "../css/styles.css"
import Quote from "./Quote"
import Btn from "./Btn"
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {

    // const [randomColorStyle, setRandomColorStyle] = useState({
    //     backgroundColor: "black",
    //     color: "black"
    // });

    // function getRandomColor() {
    //     var letters = '0123456789ABCDEF';
    //     var randomColor = '#';
    //     for (var i = 0; i < 6; i++) {
    //         randomColor += letters[Math.floor(Math.random() * 16)];
    //     }
    //     setRandomColorStyle({
    //         backgroundColor: randomColor,
    //         color: randomColor
    //     })
    // }
    // getRandomColor();

    return (
        <div className="container"  >
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
        </div>
    );
}

export default App;