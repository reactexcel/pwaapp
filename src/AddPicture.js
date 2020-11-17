import React, { useEffect, useState } from "react";
import MenuBar from "./components/MenuBar";
import { makeStyles } from "@material-ui/core/styles";
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import Comment from "./components/Comment";
import Camera from './components/Camera'
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    textAlign: "center",
  },
  imgBox: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "10px",
    border: "none",
  },
  img: {
    height: "inherit",
    maxWidth: "inherit",
  },
  input: {
    display: "none",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [source, setSource] = useState("");

  useEffect(()=>{
    navigator.mediaDevices.getUserMedia({video: true})
    .then(gotMedia)
    .catch(error => console.error('getUserMedia() error:', error));
  
  function gotMedia(mediaStream) {
     
    const mediaStreamTrack = mediaStream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(mediaStreamTrack);
    console.log(imageCapture);
  }
  },[])

  const uploadImage = async file => {
    console.log(file,'lllllllllll')
    const formData = new FormData();
    formData.append('file', file);

    // Connect to a seaweedfs instance
};
  return (
    <div>
      <MenuBar />
      <div className='main'>
        <div className={classes.root}>
          <Camera sendFile={uploadImage}/>
        </div>
      </div>
    
      <Comment />
    </div>
  );
};

export default Home;
