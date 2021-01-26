import React, {useEffect, useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import DeletedTask from "./notes/DeletedTask";
import Typography from "@material-ui/core/Typography";

export default function CreateMenu(props) {

    const [tasks, setTasks] = useState([]);

    const [task, setTask] = useState({title: "", description: ""})

    function handleChange(event) {

        const {name, value} = event.target

        setTask(prevValue => {
            if (name === "title") {
                return {
                    title: value,
                    description: prevValue.description
                }
            } else if (name === "description") {
                return {
                    title: prevValue.title,
                    description: value
                }
            }
        })
    }

    function handleSubmit(event) {

        event.preventDefault()

        const data = {
            title: task.title,
            description: task.description
        }

        axios.post("https://note-keeper-api-darnoc.herokuapp.com/new", data)
            .then(function (res) {
                console.log(res)
            })
            .catch(function (err) {
                console.log(err)
            })

        setTask({
            title: "",
            description: ""
        })

    }

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

    const returnTask = async (id) => {
        const res = await axios.post("https://note-keeper-api-darnoc.herokuapp.com/returnTask/" + id)
        setTasks(res.data)
    }

    const killTask = async (id) => {
        const res = await axios.post("https://note-keeper-api-darnoc.herokuapp.com/killTask/" + id)
        setTasks(res.data)
    }

    return (
        <div>
            <h1>Create your note!</h1>
            <IconButton onClick={props.onMenuClose}
                        style={{
                            margin: "0 48px 0 0",
                            float: "right",
                            backgroundColor: "#ffffff",
                            color: "#646464"
                        }}>
                <ArrowBackIcon/>
            </IconButton>
            <Grid style={{width: "75vw", margin: "72px auto 0 auto"}}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="filled-basic"
                        label="Title"
                        variant="filled"
                        style={{width: "50%", margin: "auto"}}
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                    />
                    <TextField
                        id="filled-basic"
                        label="Description"
                        variant="filled"
                        multiline
                        rows={2}
                        style={{width: "75%", margin: "12px auto 0 auto"}}
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                    />
                    <IconButton
                        type="submit"
                        style={{
                            backgroundColor: "#ffffff",
                            color: "#646464",
                            margin: "36px 0 0 8px",
                        }}>
                        <AddIcon/>
                    </IconButton>
                </form>
            </Grid>
            <hr/>
            <Typography
                style={{
                    backgroundColor: "#222831",
                    color: "#bb2205",
                    width: "30vw",
                    fontWeight: "700",
                    margin: "0 auto"
                }}
                variant={"h2"}>DELETED</Typography>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
                {tasks.filter(item => item.deleted === true).map((taskItem, index) => {
                    return (
                        <DeletedTask
                            key={index}
                            id={taskItem._id}
                            title={taskItem.title}
                            description={taskItem.description}
                            onReturn={() => returnTask(taskItem._id)}
                            onKill={() => killTask(taskItem._id)}
                        />
                    )
                })}
            </Grid>
        </div>
    )
}