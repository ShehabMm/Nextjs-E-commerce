import React from 'react'

export default function Products() {


    const arr = [
        { productImg: "./images/1.png" },
        { productImg: "./images/2.webp" },
        { productImg: "./images/3.webp" },
        { productImg: "./images/4.webp" },
        { productImg: "./images/5.webp" },
        { productImg: "./images/6.webp" },
        { productImg: "./images/7.webp" },
        { productImg: "./images/8.png" },
      ];
  return (
    <div>
        

        <section className="products flex">
          {arr.map((item) => {
            return (
              <article key={item.productImg} className="card">
                <a href="/pages/product-details.html">
                  <img width={266} src={item.productImg} alt=""  />
                </a>
                <div style={{ width: "266px" }} className="content">
                  <h1 className="title">Product Title</h1>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p>
                  <div
                    className="flex"
                    style={{
                      justifyContent: "space-between",
                      paddingBottom: "0.7rem",
                    }}
                  >
                    <div className="price">$100</div>
                    <button className="add-to-cart flex">
                      <i className="fa-solid fa-cart-plus" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

    </div>
  )
}
