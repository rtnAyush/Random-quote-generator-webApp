import ColorContext from "./colorContext";
import { useEffect, useState } from "react";

const ColorState = (props) => {

    const [randomColor, setRandomColor] = useState("black");

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let randomColor = '#';
        for (var i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }

        setRandomColor(randomColor);
    }

    useEffect(() => {
        getRandomColor();
    }, []);

    return (
        <ColorContext.Provider value={{ randomColor, getRandomColor }}>
            {props.children}
        </ColorContext.Provider>
    )
}

export default ColorState;