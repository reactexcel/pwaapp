import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TelegramIcon from "@material-ui/icons/Telegram";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      border: "none",
    },
  },
  addcomments: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelComment: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "6px",
    cursor: "pointer",
  },
  saveComment: {
    cursor: "pointer",
  },
}));

const Comment = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleAddPost = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={props.open}
    >
      <DialogTitle id='simple-dialog-title' className={classes.cancelComment}>
        <ClearIcon onClick={props.handleCancelComment} />
      </DialogTitle>
      <form className={classes.root} noValidate autoComplete='off'>
        <div>
          <TextField
            id='outlined-multiline-static'
            label='Comment here...'
            multiline
            rows={4}
            variant='outlined'
            onChange={handleChange}
          />
        </div>
        <div className={classes.addcomments}>
          <TelegramIcon
            onClick={handleAddPost}
            className={classes.saveComment}
          />
        </div>
      </form>
    </Dialog>
  );
};

export default Comment;
