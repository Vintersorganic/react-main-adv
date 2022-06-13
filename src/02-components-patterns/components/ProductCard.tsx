import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { createContext} from "react";
import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{counter, increaseBy, product}}>

    <div className={styles.productCard}>
      {children}
    </div>
    </Provider>
  );
};
