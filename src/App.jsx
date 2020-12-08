import React, {useState} from "react";
import "./styles.css";
import Header from "./components/Header";
import Grid from '@material-ui/core/Grid';
import Table from "./components/Table";
import Note from "./components/Note"
import CreateMenu from "./components/CreateMenu";

export default function App() {

    const {notes, setNotes} = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenu () {
        setIsMenuOpen(!isMenuOpen)
    }

    if (!isMenuOpen) {
        return (
            <div>
                <Header MenuHandling={handleMenu}/>
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <Grid className="taskTable">
                        <Table tableName={"To - Do"} tableColor={"#14274e"} textColor={"#ebebeb"}/>
                        <h1>Todo</h1>
                        <Note/>
                    </Grid>
                    <Grid className="taskTable">
                        <Table tableName={"In Progress"} tableColor={"#d1c145"} textColor={"#222831"}/>
                        <h1>In Progress</h1>
                    </Grid>
                    <Grid className="taskTable">
                        <Table tableName={"Finished"} tableColor={"#54e346"} textColor={"#393e46"}/>
                        <h1>Finished</h1>
                    </Grid>
                </Grid>
            </div>
        )
    } else if (isMenuOpen) {
        return (
            <div>
                <CreateMenu MenuHandling={handleMenu}/>
            </div>
        )
    }
}