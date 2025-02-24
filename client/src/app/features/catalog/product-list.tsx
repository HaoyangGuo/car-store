import { Product } from "@/models/product"
import { ProductCard } from "./product-card"

type Props = {
  products: Product[]
}

function ProductList({ products }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {products.map(p => {
        return <ProductCard product={p} />
      })}
    </div>
  )
}

export { ProductList }