import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function CreateMenu (props) {
    return (
        <div>
            <h1>Create Menu</h1>
            <IconButton onClick={props.MenuHandling} style={{
                margin: "0 48px 16px 0",
                display: "inline-block",
                float: "right",
                backgroundColor: "#ffffff",
                color: "#646464"
            }}>
                <ArrowBackIcon/>
            </IconButton>
        </div>
    )
}