import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      border:'none'
    },
   
  },
  addcomments:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}
}));

const Comment=(props)=> {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
const [open,setOpen]=useState(false)

    const handleClose = () => {
        setOpen(!open);
    };
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const handleAddPost=(e)=>{
e.preventDefault();
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={props.open}>
        <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          id="outlined-multiline-static"
          label="Comment here..."
          multiline
          rows={4}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className={classes.addcomments}>
      <TelegramIcon onClick={handleAddPost}/>
      </div>
      </form>
    </Dialog>
    )
}

export default Comment;