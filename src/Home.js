import React, { useEffect, useState } from "react";
import MenuBar from "../src/components/MenuBar";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PostsList from "../src/components/Posts";
import Fab from "@material-ui/core/Fab";
import { PostListRequest, ImageRequest } from "../src/redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    textAlign: "center",
  },
  postdata: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    padding: "6px",
    // margin: "16px",
  },
  addNewImage: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "16px",
    marginRight: "16px",
  },
}));

const Home = (props) => {
  const dispatch = useDispatch();
  const allPostList = useSelector((state) => state.PostListstatus);
  const imageUrl = useSelector((state) => state.Imagestatus);
  const [data, setData] = useState();
  const [urlData, setUrlData] = useState([]);
  const classes = useStyles();

  const handleAddPicture = () => {
    props.history.push("/addpicture");
  };

  useEffect(async () => {
    if (imageUrl?.data && allPostList?.data) {
      const filteredArray = await Promise.all(
        allPostList?.data.map((val) => {
          const imageArray = imageUrl?.data.find((el) => {
            return el._id == val._id;
          });
          val["image"] = imageArray?.imageName ? imageArray.imageName : "";
          return val;
        })
      );

      if (filteredArray.length) {
        setData(filteredArray);
      }
    }
  }, [imageUrl?.data.length]);

  useEffect(async () => {
    if (allPostList.data) {
      allPostList.data.map(async (allpost) => {
        await dispatch(ImageRequest(allpost._id));
      });
    }
  }, [allPostList.data]);

  useEffect(() => {
    if (localStorage.getItem("post")) {
      const allPosts = JSON.parse(localStorage.getItem("post"));
      setData(allPosts);
    }
    dispatch(PostListRequest());
  }, []);

  const isOnline = navigator.onLine;

  return (
    <div>
      <MenuBar />
      <Grid
        direction='row'
        justify='space-between'
        alignItems='center'
        container
      >
        {data?.map((post, i) => {
          return (
            <Grid
              item
              className={classes.postdata}
              xs={12}
              sm={6}
              md={6}
              spacing={2}
            >
              <PostsList key={i} source={post.image} comment={post.comment} />
            </Grid>
          );
        })}
      </Grid>
      <div className={classes.addNewImage}>
        <Fab color='primary'>
          <AddIcon fontSize='large' onClick={handleAddPicture} />
        </Fab>
      </div>
    </div>
  );
};

export default Home;
