import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Comment=()=> {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
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
      </form>
    )
}

export default Comment;