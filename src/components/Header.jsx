import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from '@material-ui/icons/Create';

export default function Header(props) {
    return (
        <div>
            <h1>Note Keeper</h1>
            <h3 style={{
                display: "inline-block",
                margin: "auto 0 auto 96px"
            }}>
                Write down your notes and keep them safe here :) <br/>
                And you can change their progress too!
            </h3>
            <IconButton onClick={props.MenuHandling} style={{
                margin: "0 48px 16px 0",
                display: "inline-block",
                float: "right",
                backgroundColor: "#ffffff",
                color: "#646464"
            }}>
                <CreateIcon/>
            </IconButton>
        </div>
    )
}