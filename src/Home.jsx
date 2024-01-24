// import { useState,useEffect } from "react";

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs ,isPending, error}=useFetch('http://localhost:8000/blog');

return (
    <div className="home">
    {error && <div>{error}</div>}
     {isPending && <div>loading...</div>}
     {blogs && <BlogList blogs={blogs}title="all blogs!"/> } 
    </div>
  );
  }
 
export default Home;