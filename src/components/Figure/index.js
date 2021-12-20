import "./styles.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Figure = () => {
  const params = useParams();
  return (
    <div className="wrapper">
      <div className="figure">
        <div className={`${params.type}`} style={{
            backgroundColor: params.color,
          }}> {params.type} </div>
      </div>
    </div>
  );
};

export default Figure;
