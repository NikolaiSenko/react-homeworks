import "./styles.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Figure = () => {
 const params = useParams();
 console.log(params.type)
  return (
    <div className="wrapper">
      <div className="figure">
        {params.type === 'square' && <div className={`${params.type} ${params.color}`}>SQUARE</div>}
        {params.type === 'circle' && <div className={`${params.type} ${params.color}`}>CIRCLE</div>}
      </div>
    </div>
  );
};

export default Figure;
