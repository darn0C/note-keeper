import React from "react";
import Paper from '@material-ui/core/Paper';

export default function ToDoTask(props) {
    return (
        <div>
            <Paper elevation={8} style={{width: "25vw", margin: "0 auto"}}>
                <h2 className="noteHeader">{props.title}</h2>
                <hr/>
                <h3 className="noteBody">{props.description}</h3>
            </Paper>
        </div>
    )
}