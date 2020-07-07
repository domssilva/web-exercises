import React from "react";

import feedData from "../data/feed";
import Card from "./Card";

import "./CardContainer.scss";

const CardContainer = () => {
  let posts = feedData.filter(obj => obj["posts"].length > 0);
  const allPosts = posts.map(post => (
    <Card user={post} key={post.id} />
  ));

  return (
    <section className="container">
      {allPosts}
    </section>
  );
};

export default CardContainer;
