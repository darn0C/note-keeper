import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Grid from '@material-ui/core/Grid';
import Table from "./components/Table";

export default function App() {
    return (
        <div>
            <Header/>
            <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                <Table tableName={"To - Do"} tableColor={"#14274e"} textColor={"#ebebeb"}/>
                <Table tableName={"In Progress"} tableColor={"#d1c145"} textColor={"#222831"}/>
                <Table tableName={"Finished"} tableColor={"#54e346"} textColor={"#393e46"}/>
            </Grid>
        </div>
    )
}