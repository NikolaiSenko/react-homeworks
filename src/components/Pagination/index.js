import React, { useState, useEffect } from "react";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Pagination = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages(1);
  }, []);

  const getImages = async (el) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${el}&_limit=10`
    );
    const data = await response.json();
    setImages(data);
  };

  return (
    <div>
      <div>
        {images.map((el) => {
          return (
            <div key={el.id}>
              <img
                src={el.url}
                alt={el.title}
                width="200px"
                height="200px"
              ></img>
              <p style={{ fontWeight: 700 }}>{el.title}</p>
            </div>
          );
        })}
      </div>
      <div>
        {pages.map((el, i) => (
          <button key={i} onClick={() => getImages(el)}>
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
