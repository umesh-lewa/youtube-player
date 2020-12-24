import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default ({ video }) => {

  // show loading message until video value gets populated with data
  if (!video){ 
    return <div>Loading...</div>;
  }

  // embed the url of the  specific selected videos and show the video details below it
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (

    <React.Fragment>
      
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>

      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>

    </React.Fragment>

  );
}