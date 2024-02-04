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
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          aspectRatio: "16/9",
        }}
      >
        {selectedItem ? (
          <Image
            src={selectedItem[4]}
            fill
            alt=""
            className="object-cover aspect-video"
          />
        ) : (
          <Image
            src="/opengraph-image.png"
            fill
            alt=""
            className="object-cover aspect-video"
          />
        )}
      </div>
    )
  );
}
