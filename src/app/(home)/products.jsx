import React from 'react'
import Link from 'next/link'
async function getData() {

    const res = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) {

        throw new Error("failed to fetch data")
    }
    return res.json()
}
export default async function Products() {


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
    const data = await getData()
    console.log(data)
    return (
        <div>


            <section className="products flex">
                {data.map((item) => {
                    return (
                        <>


                        <article title={item.title} key={item.id} className="card">
                            
                            <Link  href={`../productDetails/${item.id}`}>
                            <img width={266} height={250} src={item.image} alt="" />
                            </Link>

                       <div style={{ width: "266px" }} className="content">
                                <h1 className="title">{item.title.slice(0, 20)}</h1>
                                <p title={item.description} className="description">
                                    {item.description.slice(0, 45)}..                  </p>
                                <div
                                    className="flex"
                                    style={{
                                        justifyContent: "space-between",
                                        paddingBottom: "0.7rem",
                                    }}
                                >
                                    <div className="price">${item.price}</div>
                                    <button className="add-to-cart flex">
                                        <i className="fa-solid fa-cart-plus" />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </article>
                        </>
                    );
                })}
            </section>

        </div>
    )
}
