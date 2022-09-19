import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoPage = () => {
  const { recipeDetail } = useSelector((state) => state.recipe);

  const id = recipeDetail.video;
  const id2 = id.split("=")[1];
  const id3 = id2.split("&")[0];

  return (
    <Fragment>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
            <div class="card">
              <LiteYouTubeEmbed id={id3} />
              <div class="card-body">
                <div class="title-video">
                  <h5>{recipeDetail.title}</h5>
                  <p>3 month ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoPage;
