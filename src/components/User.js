import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <Link to={`users/${props.id}`}>
      <div className="rounded-lg bg-white p-3 h-full shadow-lg">
        <p><strong>Name: </strong>{props.name}</p>
        <p><strong>Address: </strong>{`${props.address.street} - ${props.address.suite} - ${props.address.city}`}</p>
      </div>
    </Link>
  );
};

export default User;
