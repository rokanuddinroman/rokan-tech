import { Metadata } from "next";
import ProductPage from "./ProductPage";
import axios from "axios";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const slug = params.slug;
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/1-wuQrUkDptzaCVZvUR0vHN_ErwF3dbwTbSSogH-uVD0/values/!A:Z?key=AIzaSyD3NeE_duvvP_UcvTO45nbVa-VcWbkpqYA`
    );
    const selectedItem = await response.data.values.find(
      (item: any) => item[6] === slug
    );

    if (!selectedItem) {
      return {
        title: `Not Found | Rokan Tech`,
        description: "The page you are looking for does not exist",
      };
    }

    return {
      title: `${selectedItem[2]} | Rokan Tech`,
      description: selectedItem[5],
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

async function IndividualProduct() {
  return (
    <div>
      <ProductPage />
    </div>
  );
}

export default IndividualProduct;
