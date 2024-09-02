import products from "./product";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <section className="container">
      <div className="row">
        {products.map((product) => {
          return (
            <ProductCard
            key={product.id}
              productName={product.name}
              productPrice={product.price}
              productImage={product.image}
              productDescription={product.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default App;
