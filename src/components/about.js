import React from "react";
import "../App.css";
import Abimg from "../puctures/our-stories-new.jpg";

export default function About() {
  return (
    <div>
      <img src={Abimg} alt="pic" width="100%" />
      <article className="container aboutar">
        <h5>
          We aim to offer a portfolio of products and services that evolve with
          consumer demands.
        </h5>
        We strive to create products that are right for consumers and that
        contribute to public health and a sound environment. It's good business.
        This guides the choices we make today and shapes our portfolio for
        tomorrow - whether through product evolution, innovation, acquisition or
        partnership.
        <h1>Our strategy: The choices we make</h1>
        We focus our energy and resources where unlocking the power of food can
        make the greatest difference to the lives of people and pets, protect
        and enhance the environment and generate significant value for our
        shareholders and other stakeholders alike.
        <ul>
          <li>
            Apply our expertise in nutrition, health and wellness - developed
            over more than 150 years - to help people, families and pets live
            happier, healthier lives.
          </li>
          <li>
            Meet the needs of the modern consumer with healthy, delicious,
            convenient products for conscious, time-constrained lifestyles.
          </li>
          <li>
            Bring affordable, safe and high-quality nutrition everywhere to
            everyone, regardless of their income level.
          </li>
          <li>
            Bring distinctive, premium innovations to market fueled by creative
            exploration, consumer insights, pioneering nutrition science and
            culinary excellence.
          </li>
        </ul>
        <h1>Our value creation model</h1>
        Our long-term value creation model is based on the balanced pursuit of
        resource efficient top- and bottom-line growth as well as improved
        capital efficiency. We create value by:
        <ul>
          <li>Fueling growth through continuous innovation.</li>
          <li>Improving operational efficiency.</li>
          <li>
            Allocating our resources and capital with discipline and clear
            priorities, including through acquisitions and divestitures.
          </li>
        </ul>
        <h4>Ensuring sustained mid single-digit organic sales growth</h4>
        Our success is built on maintaining a diversified portfolio, both in
        terms of geography and category. Our ability to adapt to changing
        environments and to nourish our high-quality global, regional and local
        brands contribute to long-term financial performance. Our objective is
        to achieve sustained mid single-digit organic sales growth through a
        combination of rapid innovation, portfolio management and market share
        gains.
        <h4>Generating continued moderate margin improvement</h4>
        We fuel our growth agenda through disciplined cost management, improving
        operational efficiency at all levels of the business. In combination
        with sales growth, this approach enables us to free up resources for
        re-investment in product innovation, brand building and sustainability
        initiatives, while creating value for our shareholders.
      </article>
    </div>
  );
}
