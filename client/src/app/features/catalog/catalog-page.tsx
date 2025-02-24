import { ProductList } from "./product-list"

const products = [
  {
    "id": 2,
    "name": "Refrigerator",
    "description": "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
    "brand": "Tabby",
    "price": 15000,
    "pictureUrl": "/images/products/cat-tabby2.png",
    "type": "Female",
    "quantityInStock": 100
  },
  {
    "id": 2,
    "name": "Refrigerator",
    "description": "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
    "brand": "Tabby",
    "price": 15000,
    "pictureUrl": "/images/products/cat-tabby2.png",
    "type": "Female",
    "quantityInStock": 100
  },
  {
    "id": 2,
    "name": "Refrigerator",
    "description": "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
    "brand": "Tabby",
    "price": 15000,
    "pictureUrl": "/images/products/cat-tabby2.png",
    "type": "Female",
    "quantityInStock": 100
  },
  {
    "id": 2,
    "name": "Refrigerator",
    "description": "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
    "brand": "Tabby",
    "price": 15000,
    "pictureUrl": "/images/products/cat-tabby2.png",
    "type": "Female",
    "quantityInStock": 100
  }
]

function CatalogPage() {
  return (
    <div className="border border-yellow-500 pt-5 min-h-screen">
      <div>Catalog</div>
      <ProductList products={products} />
    </div>
  )
}

export { CatalogPage }