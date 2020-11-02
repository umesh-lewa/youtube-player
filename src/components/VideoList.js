import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {

  // map through search results and create the 5 video thumbnails
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}
