import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Products from "./products";
import "../App.css";
import { Carousel } from "react-bootstrap";
import IM1 from "../puctures/5-53488_photo-wallpaper-autumn-leaves-background-tree-coffee-autumn.jpg";
import IM2 from "../puctures/52280-coffee.jpg";
import IM3 from "../puctures/52738-Cup-Still-Life-Coffee-Beans-DrinkCoffee-HD-Wallpaper.jpg";
import { add } from "../redux/reducr";
export default function Main() {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.shopreducer.products);

  return (
    <>
      <Carousel interval={5000} nextLabel prevLabel className="carousal" fade>
        <Carousel.Item>
          <img className="d-block w-100 cars-img" src={IM1} alt="First slide" />
          <Carousel.Caption>
            <div className="carText">
              <h1>First slide label</h1>
              <p>Shop comfortable!</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 cars-img"
            src={IM2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="carText">
              <h3>Second slide label</h3>
              <p>See the best products!</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 cars-img" src={IM3} alt="Third slide" />

          <Carousel.Caption>
            <div className="carText">
              <h3>Third slide label</h3>
              <p>
                Buy fast !
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="main back-main">
        <div className="main-title">
          <h3>Offers</h3>
        </div>
        <div className="row">
          {product.map((pro) => (
            <Products product={pro} add={() => dispatch(add({ id: pro.id }))} />
          ))}
        </div>
      </div>

      <div className="footer">
     <h2>Designed By Atta</h2>
      </div>
    </>
  );
}
