import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  
  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    setPosts(data);
  }

  const createPost = async () => {
    const response = await fetch('http://192.168.31.187:3004/posts', {
      method: 'POST',
      body: JSON.stringify({
        userId: 1,
        title: "TEST TITLE",
        body: "TEST TEXT"
      }),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await response.json();
    console.log(data);
    getPosts();
  }

  return (
      <div>
        {posts.map((item) => {
          return (
            <Link key={item.id} to={`posts/${item.id}`}>
            <div>
              <h2>{item.title}</h2>
              <span>{item.body}</span>
            </div>
            </Link>
          )
        })}
      <button onClick={createPost}>Create</button>
      
      </div>
    )
}  

export default Posts;