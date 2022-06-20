import { Props as ButtonsProps} from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ImageProps} from "../components/ProductImage";
import { Props as TitleProps} from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: TitleProps) => JSX.Element;
  Image: (Props: ImageProps) => JSX.Element;
  Buttons: ({ className }: ButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}