import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosBase from "../axios-base";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    axiosBase
      .get(`/users/${userId}`)
      .then((res) => {
        setLoading(false);
        setUser(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [userId]);

  return (
    <div className="bg-gray-300 min-h-screen p-3">
      {loading ? (
        <></>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="my-3 bg-white p-2 rounded-lg">
            <p className="font-bold">Personal Information</p>
            <p className="text-3xl text-center">{user?.name}</p>
            <p>
              <span className="font-semibold">Email: </span>
              {user?.email}
            </p>
            <p className="font-bold">Address</p>
            <div className="grid grid-cols-2">
              <p>
                <span className="font-semibold">Street: </span>
                {user?.address?.street}
              </p>
              <p>
                <span className="font-semibold">Suite: </span>
                {user?.address?.suite}
              </p>
              <p>
                <span className="font-semibold">City: </span>
                {user?.address?.city}
              </p>
              <p>
                <span className="font-semibold">Zipcode: </span>
                {user?.address?.zipcode}
              </p>
              <div className="flex">
                <p>
                  <span className="font-semibold">Latitude: </span>
                  {user?.address?.geo?.lat}
                </p>
                <p>
                  <span className="font-semibold">Longitude: </span>
                  {user?.address?.geo?.lng}
                </p>
              </div>
            </div>
            <p className="font-bold">Company</p>
            <div className="grid grid-cols-2">
              <p>
                <span className="font-semibold">Name: </span>
                {user?.company?.name}
              </p>
              <p>
                <span className="font-semibold">Catch Phrase: </span>
                {user?.company?.catchPhrase}
              </p>
            </div>
            <p className="flex justify-center items-center space-x-4">
              <BsGlobe />
              <a href={user?.website} target="_blank" rel="noreferrer">
                Website
              </a>
            </p>
          </div>
          <div className="my-3 bg-white p-2 rounded-lg flex justify-center space-x-4">
            <Link
              className="underline text-blue-500 hover:text-blue-800"
              to={`/users/${userId}/posts`}
            >
              Posts
            </Link>
            <Link
              className="underline text-blue-500 hover:text-blue-800"
              to={`/users/${userId}/albums`}
            >
              Albums
            </Link>
            <Link
              className="underline text-blue-500 hover:text-blue-800"
              to={`/users/${userId}/post`}
            >
              CREATE POST
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
