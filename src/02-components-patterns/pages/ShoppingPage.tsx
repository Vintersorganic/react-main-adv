import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
  id: '3', title: 'Test',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{display: 'flex', flexWrap: 'wrap'}}>

      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title="Optional Title"/>
        <ProductCard.Buttons />
      </ProductCard >

      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </ProductCard >

      </div>
    </div>
  )
}
