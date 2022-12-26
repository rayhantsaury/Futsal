import React, { useEffect, useState } from "react";
import "./home.css";
import Posts from "./posts/Posts";
import axios from "axios";
import { useLocation } from "react-router-dom";
const NewsCard = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
        <div className="home">
          <Posts posts={posts} />
      </div>
  );
};

export default NewsCard;
