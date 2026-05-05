import Link from "next/link";

import Heading from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <div className="text-center">
      <Heading>Producto No Encontrado</Heading>
      <p>Talvez quieras volver a <Link className="text-green-400" href={'/admin/products?page=!'}>Productos</Link></p>
    </div>
  )
}
