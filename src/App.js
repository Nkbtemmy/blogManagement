import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Albums from "./pages/Albums";
import Posts from "./pages/Posts";
import User from "./pages/User";
import Users from "./pages/Users";
import { Comments } from "./pages/Comments";
import AddPost from "./pages/AddPost";

import * as actionTypes from "./store/actions";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionTypes.getUsers());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/users/:userId" exact component={User} />
        <Route path="/users/:userId/posts" exact component={Posts} />
        <Route path="/users/:userId/albums" exact component={Albums} />
        <Route path="/users/:userId/posts/:postId/comments" exact component={Comments} />
        <Route path="/users/:userId/post" exact component={AddPost} />
      </Switch>
    </div>
  );
}
