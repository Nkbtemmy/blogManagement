import React from 'react'

export const Comment = (props) => {
    if(props.loading){
        return <h2 className='w-full h-full text-center'>Loading.....</h2>
    }
    return (
      <div className="grid md:grid-cols-4 gap-3">
            {
                props.comments.map(comment =>(
                    <div className="rounded-lg  shadow-2xl text-center" key={comment.id}>
                        <p className="text-xl font-bold bg-white rounded-lg">
                        {comment.name}
                        </p>
                        <p className="p-3">{comment.body}</p>
                    </div>
                ))
            }
     </div>
        
        
    
    )
}
