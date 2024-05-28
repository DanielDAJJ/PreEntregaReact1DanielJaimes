import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'
import { getAllProducts } from '../../../services/ProductsServices'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainerComponent = ({greeting}) => {
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
      getAllProducts()
        .then((res) => setProducts(res.data.products))
        .catch((err) => console.log(err))
    }, [])

  return (
    <div className='ItemListContainer'>
      {products.map((product) => {
        return(
          <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.thumbnail}/>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )})}
    </div>
  )
}

export default ItemListContainerComponent