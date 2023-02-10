import React, { useContext } from "react";
import Button from '@mui/material/Button';
import QuoteContext from "../context/quote/quoteContext";
import ColorContext from "../context/randomColor/colorContext";

function Btn(props) {
    const { fetchData: getQuote } = useContext(QuoteContext);
    const { randomColor: color, getRandomColor: getColor } = useContext(ColorContext);

    return (
        <a href={props.link} rel="operner" id={props.id} onClick={() => {
            getQuote();
            getColor();
        }}>
            <Button variant='containerd'
                sx={{
                    color: "white", backgroundColor: color, textTransform: "none", '&:hover': {
                        backgroundColor: color + "B4",
                    }
                }} >{props.text}</Button>
        </a>
    );
}

export default Btn;