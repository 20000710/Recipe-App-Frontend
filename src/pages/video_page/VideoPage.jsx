import React, { Fragment } from "react";
import videoTes from "../../asset/img/fake_uni_demo.mp4";

const VideoPage = () => {
  return (
    <Fragment>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
            <div class="card">
              <video width="100%" controls>
                <source src={videoTes} type="video/mp4" />
              </video>
              <div class="card-body">
                <div class="title-video">
                  <h5>
                    Beef steak with curry sauce - <span>[Step 4]</span> cut the
                    condiment and then mix it
                  </h5>
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
