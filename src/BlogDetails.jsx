
import { useParams } from "react-router-dom"
import useFetch from "./useFetch";


function BlogDetails() {
    const {id}= useParams();
    const {data:blog,isPending, error}=useFetch(`http://localhost:8000/blog`);
   
     
    
    

    return (
   
    <div className="blogDetails">
        <h2> welcome to vlog details-{id}</h2>
        {isPending&& <div>loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
        <article>
          <h2>{ blog[id].title }</h2>
          <p>Written by { blog[id].author }</p>
                    { <div>{blog[id].body}</div> }

        </article>
      )}
         

        
    </div>
   
  );
}

export default BlogDetails;
