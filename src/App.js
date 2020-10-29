import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail, Header } from "./components";

import youtube from "./api/youtube";

export default () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // hit Youtube API with the Search term entered by user
  async function handleSubmit(searchTerm) {

    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      }
    });

    setVideos(videos);
    // set the current video as the first search result
    setSelectedVideo(videos[0]);

  }

  return (

    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>

          <Header />

          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>

          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>

        </Grid>
      </Grid>
    </Grid>

  );

};
