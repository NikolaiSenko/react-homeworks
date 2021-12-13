import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
  
    setPosts(data);
  };

  const onButton = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"POST",
      mode: "no-cors",
      body: JSON.stringify({
        "userId": 1,
        "title": "HELLO, BROTHER",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }), 
      headers: {
        'Content-type':'application/json'
      },
    });
    getPosts();
  }
  return (
    <div>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
      <button onClick={onButton}>Generate post</button>
    </div>
  );
};

export default Posts;
