import React, { useEffect, useState } from "react";
import MenuBar from "../src/components/MenuBar";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PostsList from "../src/components/Posts";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    textAlign: "center",
  },
  addPicture: {
    color: "red",
  },
  postdata: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    padding: "6px",
    margin: "16px",
  },
  addNewImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Home = (props) => {
  const [data, setData] = useState();
  const classes = useStyles();

  const handleAddPicture = () => {
    props.history.push("/addpicture");
  };
  useEffect(() => {
    if (localStorage.getItem("post")) {
      const allPosts = JSON.parse(localStorage.getItem("post"));
      setData(allPosts);
    }
  }, []);

  return (
    <div>
      <MenuBar />

      {data?.map((post, i) => {
        return (
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
            xs={12}
            sm={6}
            className={classes.postdata}
            spacing={2}
          >{console.log(post,'PPPPP')}
            <PostsList key={i} source={post.file} comment={post.comment} />
          </Grid>
        );
      })}
      <div className={classes.addNewImage}>
        <AddCircleOutlineIcon
          fontSize='large'
          className={classes.addPicture}
          onClick={handleAddPicture}
        />
      </div>
    </div>
  );
};

export default Home;
