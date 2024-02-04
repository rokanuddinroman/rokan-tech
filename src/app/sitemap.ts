import axios from "axios";

export default async function sitemap() {
  const products = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/1-wuQrUkDptzaCVZvUR0vHN_ErwF3dbwTbSSogH-uVD0/values/!A:Z?key=AIzaSyD3NeE_duvvP_UcvTO45nbVa-VcWbkpqYA`
  );

  const productsURLS =
    products.data.values.map((product: any[]) => {
      return {
        url: `https://rokan.tech/${product[1].toLowerCase()}/${product[6]}`,
        lastModified: new Date(),
      };
    }) ?? [];

  function onlyUnique(value: any, index: any, array: string | any[]) {
    return array.indexOf(value) === index;
  }

  const allCategories = products.data.values.map((card: any[]) => card[1]);
  const uniqueCategories = allCategories.filter(onlyUnique);

  const categoriesURLS =
    uniqueCategories.map((category: any) => {
      return {
        url: `https://rokan.tech/${category.toLowerCase()}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: "https://rokan.tech",
      lastModified: new Date(),
    },
    ...productsURLS.slice(1),
    ...categoriesURLS.slice(1),
  ];
}
