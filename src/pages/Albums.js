import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Album from "../components/Album";

import * as actionsTypes from "../store/actions";

const Albums = () => {
  const { userId } = useParams();
  const albums = useSelector((state) => state.albums.albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionsTypes.getAlbums(userId));
  }, [userId, dispatch]);

  return (
    <div className="bg-gray-300 min-h-screen p-3 grid grid-cols-3 gap-3 auto-rows-min">
      {albums.map((album, index) => (
        <Album key={index} {...album} />
      ))}
    </div>
  );
};

export default Albums;
