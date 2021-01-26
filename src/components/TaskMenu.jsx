import React, {useEffect, useState} from "react";
import "../styles.css";
import axios from "axios";
import Header from "./Header";
import Grid from '@material-ui/core/Grid';
import Table from "./Table";
import ToDoTask from "./notes/ToDoTask";
import InProgressTask from "./notes/InProgressTask"
import FinishedTask from "./notes/FinishedTask"

export default function TaskMenu(props) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await axios.get("https://note-keeper-api-darnoc.herokuapp.com/", {
                Headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });
            setTasks(res.data)
        };
        fetchTasks()
    }, []);

    const taskInProgress = async (id) => {
        const res = await axios.post("https://note-keeper-api-darnoc.herokuapp.com/inProgressTask/" + id)
        setTasks(res.data)
    }

    const taskFinished = async (id) => {
        const res = await axios.post("https://note-keeper-api-darnoc.herokuapp.com/finishedTask/" + id)
        setTasks(res.data)
    }

    const taskDeleted = async (id) => {
        const res = await axios.post("https://note-keeper-api-darnoc.herokuapp.com/deletedTask/" + id)
        setTasks(res.data)
    }

    return (
        <div>
            <Header MenuHandling={props.onMenuOpen}/>
            <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                <Grid className="taskTable">
                    <Table tableName={"To - Do"} tableColor={"#14274e"} textColor={"#ebebeb"}/>
                    {tasks.filter(item => item.toDo === true).map((taskItem, index) => {
                        return (
                            <ToDoTask
                                key={index}
                                id={taskItem._id}
                                title={taskItem.title}
                                description={taskItem.description}
                                onProgress={() => taskInProgress(taskItem._id)}
                                onFinish={() => taskFinished(taskItem._id)}
                                onDelete={() => taskDeleted(taskItem._id)}
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
                                onFinish={() => taskFinished(taskItem._id)}
                                onDelete={() => taskDeleted(taskItem._id)}
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
                                onDelete={() => taskDeleted(taskItem._id)}
                            />
                        )
                    })}
                </Grid>
            </Grid>
        </div>
    )
}
