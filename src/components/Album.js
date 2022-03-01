import { BsDot } from "react-icons/bs";

const Album = (props) => {
  return (
    <li className="bg-white shadow-lg py-3 px-2 flex items-center rounded">
      <BsDot />
      {props.title}
    </li>
  );
};

export default Album;
