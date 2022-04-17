import React from "react";
import "../App.css";
import { remove } from "../redux/reducr";
import { useSelector, useDispatch } from "react-redux";

const Basket = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.shopreducer.card);

  return (
    <div>
      {card.length === 0 && <h1>Your Basket is empty</h1>}
      <div>
        {" "}
        {card.map((card) => (
          <p>
            <div className="Bought-box ">
                <img src={card.img} width='100px' height='100px'/>
              <h2 className="buy-title">{card.name}</h2>{" "}
              <span>count:{card.qty}</span>
              <button
                className="delete_btn"
                onClick={() => dispatch(remove({ id: card.id }))}
              >
                remove
              </button>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Basket;
