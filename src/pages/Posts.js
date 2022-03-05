import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Post from "../components/Post";
import * as actionsTypes from "../store/actions";
import { Pagination } from "../components/shared/Pagination";

const Posts = () => {
     //pagination
  const [currentPage,setCurrentPage] = useState(1);
  const [ItemsPerPage] = useState(9);

  const { userId } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionsTypes.getPosts(userId));
  }, [userId, dispatch]);

  //padination
  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem= indexOfLastItem - ItemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem,indexOfLastItem);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
 // console.log("post-----",posts)
  return (
    <>
      <div className="bg-gray-300  p-3 grid md:grid-cols-3 gap-3 auto-rows-min">
        {currentItems.map((post, index) => (
          <Post key={index} {...post} />
        ))}

      </div>
      <Pagination itemsPerPage={ItemsPerPage} totalItems={posts.length} paginate={paginate} />
    </>
  );
};

export default Posts;
