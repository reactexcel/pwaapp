import React from "react";
import MenuBar from "../src/components/MenuBar";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import {} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    textAlign: "center",
  },
  addPicture: {
    color: "red",
  },
}));
const Home = (props) => {
  const classes = useStyles();

  const handleAddPicture = () => {
    props.history.push("/addpicture");
  };
  return (
    <div>
      <MenuBar />
      <AddCircleOutlineIcon
        fontSize='large'
        className={classes.addPicture}
        onClick={handleAddPicture}
      />
    </div>
  );
};

export default Home;
