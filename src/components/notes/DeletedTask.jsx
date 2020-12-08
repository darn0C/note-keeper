import React from "react";
import Paper from '@material-ui/core/Paper';
import IconButton from "@material-ui/core/IconButton";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

export default function DeletedTask(props) {
    return (
        <div>
            <Paper elevation={8} style={{width: "25vw"}}>
                <h2 className="noteHeader">{props.title}</h2>
                <hr/>
                <h3 className="noteBody">{props.description}</h3>

                <IconButton onClick={props.onReturn}
                            style={{backgroundColor: "#222831", color: "#0e49b5"}}>
                    <KeyboardReturnIcon/>
                </IconButton>

            </Paper>
        </div>
    )
}