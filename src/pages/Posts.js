import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Post from "../components/Post";

import * as actionsTypes from "../store/actions";

const Posts = () => {
  const { userId } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionsTypes.getPosts(userId));
  }, [userId, dispatch]);

  return (
    <div className="bg-gray-300 min-h-screen p-3 grid grid-cols-3 gap-3 auto-rows-min">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Posts;
