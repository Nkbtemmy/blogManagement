import { Link } from "react-router-dom";

const Post = (props) => {
  return (
      <div className="rounded-lg bg-white h-full shadow-lg text-center">
        <p className="text-xl font-bold bg-red-400 rounded-lg">
          {props.title}
        </p>
        <p className="p-3">{props.body}</p>
        <Link to={`posts/${props.id}/comments`}>
           <button type="button" className="btn bg-teal-500  p-2 text-white m-2">View Comments</button>
        </Link>
      </div>
  );
};

export default Post;
