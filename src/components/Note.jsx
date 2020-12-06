import React from "react";
import "../styles.css";
import Paper from '@material-ui/core/Paper';

export default function Note() {
    return (
        <div>
            <Paper elevation={8} style={{width: "25vw", margin: "0 auto"}}>
                <h2 className="noteHeader">Limpiar ventanillas</h2>
                <hr/>
                <h3 className="noteBody">Terminar de limpiar las ventanillasTerminar de limpiar las ventanillasTerminar
                    de limpiar las ventanillas</h3>
            </Paper>
        </div>
    )
}