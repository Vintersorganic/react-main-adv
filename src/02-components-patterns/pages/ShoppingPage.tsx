import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

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

      <ProductCard className='text-white bg-dark' product={product}>
        <ProductCard.Image className='custom-image'/>
        <ProductCard.Title className='text-bold' title="Optional Title"/>
        <ProductCard.Buttons className='custom-buttons'/>
      </ProductCard >

      <ProductCard className='text-white bg-dark' product={product}>
        <ProductImage className='custom-image'/>
        <ProductTitle className='text-bold'/>
        <ProductButtons className='custom-buttons'/>
      </ProductCard >

      <ProductCard style={{ backgroundColor: '#742fe3'}} product={product}>
        <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
        <ProductTitle />
        <ProductButtons />
      </ProductCard >
      </div>
    </div>
  )
}
