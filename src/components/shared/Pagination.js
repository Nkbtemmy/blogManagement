import React from 'react'

export const Pagination = (props) => {
  const pageNumbers = [];

  for(let i = 1; i<= Math.ceil(props.totalItems/ props.itemsPerPage); ++i){
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center ">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
        {
          pageNumbers.map((number)=>(
            <li key={number} className="page-item hover:bg-orange-300">
              <span
                  className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:text-gray-800 focus:shadow-none hover:cursor-pointer'
                  onClick={()=>props.paginate(number)}>
                  {number}
              </span>
            </li>
          ))
        }
        </ul>
      </nav>
    </div>
  )
}
