import React from "react";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { getNewQuote } from "../store/actions/index";

function Btn(props) {

    const dispatch = useDispatch();
    // console.log(props.data);

    return (
        <a href={props.link} rel="operner" id={props.id} onClick={() => dispatch(getNewQuote())}>
            <Button variant='containerd'
                sx={{
                    color: "white", backgroundColor: "blue", textTransform: "none", '&:hover': {
                        backgroundColor: "red",
                    }
                }} >{props.text}</Button>
        </a>
    );
}

export default Btn;