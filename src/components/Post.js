import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <Link to={`/posts/${props.id}`}>
      <div className="rounded-lg bg-white h-full shadow-lg text-center">
        <p className="text-xl font-bold bg-red-400 rounded-lg">
          {props.title}
        </p>
        <p className="p-3">{props.body}</p>
      </div>
    </Link>
  );
};

export default Post;
