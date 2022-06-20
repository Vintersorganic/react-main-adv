import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            className="text-white bg-dark"
            product={product}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            className="text-white bg-dark"
            product={product}
            style={{ width: 100 }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
