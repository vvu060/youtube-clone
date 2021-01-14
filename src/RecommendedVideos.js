import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          views="2M Views"
          timestamp="2 days ago"
          channel="Vishal Urankar"
          channelImage="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/98358963_1911791658957144_8536280984365039616_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=f_lmQcoBQngAX8LCVMa&_nc_ht=scontent-maa2-2.xx&oh=702258ce1f6583ba791724ffd1f3121f&oe=5FCEA460"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        />

        <VideoCard
          title="Lorem Ipsum"
          views="2M Views"
          timestamp="2 days ago"
          channel="Vishal Urankar"
          channelImage="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/98358963_1911791658957144_8536280984365039616_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=f_lmQcoBQngAX8LCVMa&_nc_ht=scontent-maa2-2.xx&oh=702258ce1f6583ba791724ffd1f3121f&oe=5FCEA460"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        />

        <VideoCard
          title="Lorem Ipsum"
          views="2M Views"
          timestamp="2 days ago"
          channel="Vishal Urankar"
          channelImage="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/98358963_1911791658957144_8536280984365039616_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=f_lmQcoBQngAX8LCVMa&_nc_ht=scontent-maa2-2.xx&oh=702258ce1f6583ba791724ffd1f3121f&oe=5FCEA460"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        />

        <VideoCard
          title="Lorem Ipsum"
          views="2M Views"
          timestamp="2 days ago"
          channel="Vishal Urankar"
          channelImage="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/98358963_1911791658957144_8536280984365039616_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=f_lmQcoBQngAX8LCVMa&_nc_ht=scontent-maa2-2.xx&oh=702258ce1f6583ba791724ffd1f3121f&oe=5FCEA460"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
