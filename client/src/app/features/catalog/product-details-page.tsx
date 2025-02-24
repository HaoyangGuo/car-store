import { Button } from "@/components/ui/button"
import { Product } from "@/models/product"
import { MoveLeft, ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"

function ProductDetailsPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>()

  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error))
  }, [id])

  return (
    <div className="pt-5 flex flex-col pb-20">
      <Button asChild className="text-lg self-start" variant={"secondary"} size={"lg"}>
        <NavLink to={"/catalog"}><MoveLeft /> Back to Catalog</NavLink>
      </Button>
      <main className="flex flex-col gap-1 pt-8 sm:flex-row sm:gap-10 sm:pt-20">
        <div className="aspect-square self-start rounded-md sm:max-w-[40%]">
          <img className="object-cover h-full w-full rounded-md" src={"https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"} alt={product?.name} />
        </div>
        <div className="sm:flex-1  flex flex-col max-w-[90%] mx-auto">
          <div className="text-3xl sm:text-4xl font-semibold leading-none tracking-tight  pt-6 sm:-mt-2 sm:pt-0" >{product?.name}</div>
          <div className="text-2xl sm:text-3xl text-zinc-500 dark:text-zinc-400">${(product?.price! / 100).toFixed(2)}</div>
          <div className="text-xl sm:text-2xl font-semibold leading-none tracking-tight pt-2">Description</div>
          <div className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300">{product?.description}</div>
          <div className="text-xl sm:text-2xl font-semibold leading-none tracking-tight pt-2">Breed</div>
          <div className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300">{product?.brand}</div>
          <div className="text-xl sm:text-2xl font-semibold leading-none tracking-tight pt-2">Gender</div>
          <div className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300">{product?.type}</div>
          <div className="text-xl sm:text-2xl font-semibold leading-none tracking-tight pt-2">Quantitiy In Stock</div>
          <div className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300">{product?.quantityInStock}</div>
          <Button size={"lg"}  className="text-xl mt-12 mx-auto sm:mx-0 w-[100%] sm:w-[90%] h-12 rounded-md"><ShoppingCart className="!size-5"/> Add to Cart</Button>
        </div>
      </main>
    </div>
  )
}

export { ProductDetailsPage }