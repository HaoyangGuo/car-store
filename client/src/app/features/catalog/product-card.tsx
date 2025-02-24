import { Product } from "@/models/product"
import { Info, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NavLink, useNavigate } from "react-router-dom"

type Props = {
  product: Product
}

function ProductCard({ product }: Props) {
  let navigate = useNavigate();
  function handleProductCardClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
    navigate(`/product-details/${product.id}`)
  }

  return (
    <Card onClick={(e) => handleProductCardClick(e)} className={"text-3xl border border-zinc-300 dark:border-zinc-500 shadow-md dark:bg-zinc-900"}>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className={"text-2xl"}>${(product.price / 100).toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border border-green-500 aspect-square">
          <img className="object-cover h-full w-full" src={"https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"} alt={product.name} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button asChild className="text-lg" variant={"ghost"} size={"lg"} onClick={(e) => e.stopPropagation()}>
          <NavLink to={`/product-details/${product.id}`}><Info /> View Details</NavLink>
        </Button>
        <Button className="text-lg" size={"lg"} onClick={(e) => e.stopPropagation()}>
          <ShoppingCart /> Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}


export { ProductCard }