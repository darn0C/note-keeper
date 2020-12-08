import React from "react";
import Paper from '@material-ui/core/Paper';
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ToDoTask(props) {
    return (
        <div>
            <Paper elevation={8} style={{width: "25vw", margin: "0 auto"}}>
                <h2 className="noteHeader">{props.title}</h2>
                <hr/>
                <h3 className="noteBody">{props.description}</h3>
                <IconButton
                    style={{backgroundColor: "#222831", color: "#54e346", marginRight: "8px"}}><DoneIcon/></IconButton>
                <IconButton style={{backgroundColor: "#222831", color: "#bb2205"}}><DeleteIcon/></IconButton>
            </Paper>
        </div>
    )
}