import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        className="text-white bg-dark"
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({reset, isMaxCountReached, maxCount, increaseBy}) => (
            <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
            <button onClick={reset}>Reset</button>
            
            
            </>
          )
        }
        </ProductCard>
    </div>
  );
};
