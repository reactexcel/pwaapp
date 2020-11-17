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
  const [source, setSource] = useState();
  const[openCommentModal,setOpenCommentModal]=useState(false)

  useEffect(()=>{
    navigator.mediaDevices.getUserMedia({video: true})
    .then(gotMedia)
    .catch(error => console.error('getUserMedia() error:', error));
  
  function gotMedia(mediaStream) {
     
    const mediaStreamTrack = mediaStream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(mediaStreamTrack);

  }
  },[])

  const uploadImage = (blob)=> {
    var newImg = document.createElement('img'),
    url = URL.createObjectURL(blob);
    console.log(url,'hhhhhhhhhhhh')
    setSource(url)
newImg.onload = function() {
  // no longer need to read the blob so it's revoked
  URL.revokeObjectURL(url);
};

newImg.src = url;

// document.body.appendChild(newImg);


   
};
const handleAddComment=()=>{
  if(source){
    setOpenCommentModal(!openCommentModal)
  }
}
  return (
    <div>
       <Comment open={openCommentModal}/>
      <MenuBar />
      <div className='main'>
        <div className={classes.root}>
          <Camera sendFile={uploadImage}/>
        </div>
      </div>
    <button onClick={handleAddComment}>Add Comment</button>
   

    </div>
  );
};

export default Home;
