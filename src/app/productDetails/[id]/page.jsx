import React from 'react'
import styles from './products.module.css'



export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = (await params).id
   
    // fetch data
    const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: product.title,
      openGraph: {
        images: ['/some-specific-page-image.jpg', ...previousImages],
      },
    }
  }
  






export default async function page ({params}) {

const {id}=params






async function  getData () {

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!res.ok) {

        throw new Error("failed to fetch data")
    }
    return res.json()
}




const data = await getData()

  return (
    <div className={styles.container}>
        
        <img width={250} height={250} src={data.image} alt="" />
        <h3>{data.title}</h3>
        <p>{data.description.slice(0,200)}</p>
        <span>${data.price}</span>
        <button className={styles.btn}>🛒 Add to Cart</button>
          </div>
        
  )
}
