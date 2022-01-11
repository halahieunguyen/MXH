import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ user_name }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = user_name
        ? await axios.get("http://localhost/MXH/public/api/user" + user_name)
        : await axios.get("http://localhost/MXH/public/api/user" + user._id);
        
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
        
      );
      console.log(res);
    };
    fetchPosts();
  }, [user_name, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!user_name || user_name === user.user_name) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}