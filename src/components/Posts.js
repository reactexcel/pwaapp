import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  comment: {
    marginLeft: "16px",
  },
}));

export default function Posts(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction='row' justify='space-between'>
        <Grid item>
          <img
            src={props.source}
            style={{ width: "100px", height: "80px" }}
            alt='image'
          />
        </Grid>
        <Grid item xs className={classes.comment}>
          <Typography>{props.comment}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
