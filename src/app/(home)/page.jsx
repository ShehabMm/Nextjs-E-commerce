import "./home.css";
import Products from "./products";
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
export default function Home() {

  return (

    <>
      <div className="top-img">
        <Header    />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>

      <main>
        <h1 className="recommended">
          <i className="fa-solid fa-check" />
          ✔ Recommended for you
        </h1>
        <Products  />

      </main>

      <Footer />
    </>
  );
}
