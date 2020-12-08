import React from "react";
import Typography from '@material-ui/core/Typography';

export default function Tables(props) {

    const tableColor = props.tableColor
    const textColor = props.textColor

    return (
        <div>
            <Typography
                style={{backgroundColor: tableColor, color: textColor, width: "30vw", fontWeight: "700"}}
                variant={"h2"}>{props.tableName}</Typography>
        </div>
    )
}