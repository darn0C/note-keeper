import React, {useEffect, useState} from "react";
import "./styles.css";
import axios from "axios";
import Header from "./components/Header";
import Grid from '@material-ui/core/Grid';
import Table from "./components/Table";
import ToDoTask from "./components/notes/ToDoTask";
import InProgressTask from "./components/notes/InProgressTask"
import FinishedTask from "./components/notes/FinishedTask"
import CreateMenu from "./components/CreateMenu";

export default function App() {

    const [tasks, setTasks] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        axios.get("http://localhost:4000/")
            .then(function(res) {
                setTasks(res.data)
            })
    })

    if (!isMenuOpen) {
        return (
            <div>
                <Header MenuHandling={handleMenu}/>
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <Grid className="taskTable">
                        <Table tableName={"To - Do"} tableColor={"#14274e"} textColor={"#ebebeb"}/>
                        <h1>Todo</h1>
                        {tasks.filter(item => item.toDo === true).map((taskItem, index) => {
                            return (
                                <ToDoTask
                                    key={index}
                                    id={taskItem._id}
                                    title={taskItem.title}
                                    description={taskItem.description}
                                />
                            )
                        })}
                    </Grid>
                    <Grid className="taskTable">
                        <Table tableName={"In Progress"} tableColor={"#d1c145"} textColor={"#222831"}/>
                        {tasks.filter(item => item.inProgress === true).map((taskItem, index) => {
                            return (
                                <InProgressTask
                                    key={index}
                                    id={taskItem._id}
                                    title={taskItem.title}
                                    description={taskItem.description}
                                />
                            )
                        })}
                    </Grid>
                    <Grid className="taskTable">
                        <Table tableName={"Finished"} tableColor={"#54e346"} textColor={"#393e46"}/>
                        {tasks.filter(item => item.finished === true).map((taskItem, index) => {
                            return (
                                <FinishedTask
                                    key={index}
                                    id={taskItem._id}
                                    title={taskItem.title}
                                    description={taskItem.description}
                                />
                            )
                        })}
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