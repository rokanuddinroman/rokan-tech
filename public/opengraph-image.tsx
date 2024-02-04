import axios from "axios";
import Image from "next/image";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Thumbnail({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const response = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/1-wuQrUkDptzaCVZvUR0vHN_ErwF3dbwTbSSogH-uVD0/values/!A:Z?key=AIzaSyD3NeE_duvvP_UcvTO45nbVa-VcWbkpqYA`
  );
  const selectedItem = await response.data.values.find(
    (item: any) => item[6] === slug
  );
  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full items-center justify-center">
        <div tw="absolute flex inset-0">
          {selectedItem ? (
            <img
              src={selectedItem[4] + "&w-1200&h=630&auto=format&q=75"}
              alt=""
              tw="object-cover aspect-video"
            />
          ) : (
            <img
              src="/opengraph-image.png"
              alt=""
              tw="object-cover aspect-video"
            />
          )}
        </div>
      </div>
    )
  );
}
