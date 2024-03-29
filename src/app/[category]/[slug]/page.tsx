import { Metadata } from "next";
import ProductPage from "./ProductPage";
import axios from "axios";
import Head from "next/head";

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
        title: `Not Found`,
        description: "The page you are looking for does not exist",
      };
    }

    return {
      title: `${selectedItem[2]}`,
      description: selectedItem[5],
      alternates: {
        canonical: `/${selectedItem[1].toLowerCase()}/${selectedItem[6]}`,
        languages: {
          "es-US": `/en-US/${selectedItem[1].toLowerCase()}/${selectedItem[6]}`,
        },
      },
      openGraph: {
        title: `${selectedItem[2]}`,
        description: selectedItem[5],
        url: `https://rokan.tech/${selectedItem[1].toLowerCase()}/${
          selectedItem[6]
        }`,
        siteName: "Rokan Tech",
        images: [
          {
            url: selectedItem[4],
            width: 1260,
            height: 800,
            alt: `${selectedItem[2]}`,
          },
        ],
        locale: "en-US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${selectedItem[2]}`!!,
        description: selectedItem[5]!!,
        creator: "@rokanuddin",
        images: selectedItem[4],
      },
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
      <Head>
        {/* <meta property="og:image" content="<generated>" /> */}
        <meta property="og:image:alt" content="About Rokan" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="720" />
      </Head>
      <ProductPage />
    </div>
  );
}

export default IndividualProduct;
