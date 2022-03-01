import { useSelector } from "react-redux";
import User from "../components/User";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <div className="bg-gray-300 min-h-screen p-3 grid grid-cols-3 gap-2 auto-rows-min">
      {users.map((user, index) => (
        <User key={index} {...user} />
      ))}
    </div>
  );
};

export default Users;
