import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

export default function CreateMenu(props) {

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

    return (
        <div>
            <h1>Create your note!</h1>
            <IconButton onClick={props.MenuHandling}
                        style={{
                            margin: "0 48px 0 0",
                            float: "right",
                            backgroundColor: "#ffffff",
                            color: "#646464"
                        }}>
                <ArrowBackIcon/>
            </IconButton>
            <Grid style={{width: "75vw", margin: "72px auto 0 auto"}}>
                <form>
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
        </div>
    )
}