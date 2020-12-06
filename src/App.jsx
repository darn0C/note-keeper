import React, {useState} from "react";
import "./styles.css";
import Header from "./components/Header";
import Grid from '@material-ui/core/Grid';
import Table from "./components/Table";
import Note from "./components/Note"

export default function App() {

    const {toDoNotes, setToDoNotes} = useState([]);
    const {inProgressNotes, setInProgressNotes} = useState([]);
    const {finishedNotes, setFinishedNotes} = useState([]);

    function updateToDoNotes () {
        console.log(toDoNotes)
    }

    function updateInProgressNotes () {
        console.log(inProgressNotes)
    }

    function updateFinishedNotes () {
        console.log(finishedNotes)
    }

    return (
        <div>
            <Header/>
            <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                <Grid class="taskTable">
                    <Table tableName={"To - Do"} tableColor={"#14274e"} textColor={"#ebebeb"}/>
                    <h1>Todo</h1>
                    <Note/>
                </Grid >
                <Grid class="taskTable">
                    <Table tableName={"In Progress"} tableColor={"#d1c145"} textColor={"#222831"}/>
                    <h1>In Progress</h1>
                </Grid>
                <Grid class="taskTable">
                    <Table tableName={"Finished"} tableColor={"#54e346"} textColor={"#393e46"}/>
                    <h1>Finished</h1>
                </Grid>
            </Grid>
        </div>
    )
}