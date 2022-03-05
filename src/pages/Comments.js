import React, {useState, useEffect } from 'react'
import { useParams } from "react-router";
import axios from 'axios';
import { Comment } from '../components/Comments'
import { Pagination } from '../components/shared/Pagination';



export const Comments = () => {
    const [comments,setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const { postId } = useParams();
    //pagination
    const [currentPage,setCurrentPage] = useState(1);
    const [ItemsPerPage] = useState(4);
    //--------------------------------------
    useEffect(()=>{
        const fetchComments = async () =>{
            setLoading(true);
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            setComments(res.data);
            setLoading(false);
        }
        fetchComments();
    }, [])

  //padination
  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem= indexOfLastItem - ItemsPerPage;
  const currentItems = comments.slice(indexOfFirstItem,indexOfLastItem);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    //console.log(comments)
  return (
    <div className="px-5 mt-3">
        <h1 className=" text-lime-600 text-center text-2xl p-7">User Comments</h1>
        <Comment loading={loading} comments={currentItems} />
        <Pagination itemsPerPage={ItemsPerPage} totalItems={comments.length} paginate={paginate} />
    </div>
  )
}
