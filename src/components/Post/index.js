import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  console.log(params)
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  
  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    setPost(data);
  }

  return (
      <div>
      <h2>{post.title}</h2>
      <p>{post.body} <b>from post with id {params.postId}</b></p>
      </div>
    )
}  

export default Posts;