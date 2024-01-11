import { Metadata } from "next";
import { ReactNode } from "react";
import ProductPage from "./ProductPage";

interface Product {
  category: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  primaryButtonURL?: string;
  secondaryButtonURL?: string;
  isFree: boolean;
  rating: string;
  salesCount: string;
  price: string;
  featuredImage?: string;
  overview: ReactNode;
  features: object[];
}

interface Props {
  params: { slug: string };
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   try {
//     const allItems = await fetch("http://localhost:3000/api/products").then(
//       (res) => res.json()
//     );
//     const selectedItem = allItems.find(
//       (item: Product) => item.slug === params.slug
//     );

//     if (!selectedItem) {
//       return {
//         title: "Not Found",
//         description: "The page you are looking for does not exist",
//       };
//     }

//     return {
//       title: `${selectedItem.title} | Rokan Tech`,
//       description: selectedItem.description,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       title: "Not Found",
//       description: "The page you are looking for does not exist",
//     };
//   }
// }

function IndividualProduct() {
  return (
    <div>
      <ProductPage />
    </div>
  );
}

export default IndividualProduct;
