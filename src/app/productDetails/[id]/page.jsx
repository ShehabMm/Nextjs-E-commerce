import React from 'react'
import styles from './products.module.css'
export default async function page ({params}) {

const {id}=params
console.log(id)

async function  getData () {

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!res.ok) {

        throw new Error("failed to fetch data")
    }
    return res.json()
}
const data = await getData()
console.log(data)

  return (
    <div className={styles.container}>
        
        <img width={250} height={250} src={data.image} alt="" />
        <h3>{data.title}</h3>
        <p>{data.description.slice(0,200)}</p>
        <span>${data.price}</span>
        <button className={styles.btn}>Add to Cart</button>
          </div>
        
  )
}
