import "./style.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const fetchCards = async () => {
  let body = await fetch("http://localhost:8080/api/properties");
  return await body.json();
};

function Card(props) {
  let [datas,setDatadatas] = useState([]);
  useEffect(() => {
    fetchCards().then((resp) => {
      setDatadatas(resp);
    });
  }, []);
  if (props.page === "home") {
    return (
      <div className="cards">
        {React.Children.toArray(
          datas.map((data) => (
            <Link to={`/apartment/${data.id}`} state={data}>
              <div className="card">
                <img src={data.cover} alt={data.title} />
                <h2>{data.title}</h2>
              </div>
            </Link>
          ))
        )}
      </div>
    );
  }
}

export default Card;
