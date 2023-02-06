import React from "react";
import Button from '@mui/material/Button';

function Btn(props) {
    return (
        <a href={props.link} rel="operner" id={props.id} onClick={() => props.onCall(true)}>
            <Button variant='containerd'
                sx={{
                    color: "white", backgroundColor: props.randomColor, textTransform: "none", '&:hover': {
                        backgroundColor: props.randomColor + "D6",
                    }
                }} >{props.text}</Button>
        </a>
    );
}

export default Btn;