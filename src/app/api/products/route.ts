import { NextResponse } from "next/server";

export function GET(req: any) {
  const AllProducts = [
    {
      category: "Templates",
      title: "Linkup v1.0 - Linktree Alternative",
      image: "https://i.ibb.co/bd3Tr2M/Slide-16-9-6.png",
      featuredImage: "https://i.ibb.co/v1myx1s/Mac-Book-Pro-16.png",
      description:
        "Elevate your online presence with this Framer template – a versatile Linktree alternative designed for streamlined organization of links, projects, products, and more.",
      slug: "linkup-linktree-alternative",
      primaryButtonURL: "https://www.buymeacoffee.com/rokanuddin/e/173543",
      secondaryButtonURL: "https://linkup.framer.website",
      rating: "4.5",
      salesCount: "120",
      isFree: false,
      price: "1.99",
      // overview: (
      // <div>
      //   <p className="mb-4">
      //     Linkup is like mini portfolio. Where you can list your important
      //     links, projects, blogs and more.
      //   </p>
      //   <ul className="list-disc ml-4 mb-4">
      //     <li>Sections are managed by CMS</li>
      //     <li>Mobile Responsive + very fast</li>
      //     <li>Added animation</li>
      //     <li>Tutorial includes</li>
      //   </ul>
      //   <img src="https://i.ibb.co/q09ktHx/image.png" />
      // </div>
      // ),
      features: [
        {
          Technology: "Framer",
        },
        { "Use Case": "Portfolio, Links, Store" },
        { Responsive: "yes" },
      ],
    },
    {
      category: "Templates",
      title: "CreatorApp - Showcase + Newsletter",
      image: "https://i.ibb.co/H72Fcz9/Slide-16-9-8-1.png",
      featuredImage: "https://i.ibb.co/vvpWwz3/Mac-Book-Pro-16-1.png",
      description:
        "Elevate your online presence with this Framer template – a versatile Linktree alternative designed for streamlined organization of links, projects, products, and more.",
      slug: "creatorapp",
      primaryButtonURL: "https://www.buymeacoffee.com/rokanuddin/e/173543",
      secondaryButtonURL: "https://linkup.framer.website",
      rating: "4.5",
      salesCount: "120",
      isFree: false,
      price: "49",
      //   overview: (
      // <div>
      //   <p className="mb-4">
      //     Introducing CreatorApp – a sleek and versatile NextJS template.
      //     Elevate your online presence with a modern design, seamless newsletter
      //     integration, categorized project showcase, and a captivating product
      //     page. Your all-in-one solution for portfolios, stores, newsletters,
      //     and beyond.
      //   </p>
      //   <img src="https://i.ibb.co/ZKkzZMg/image.png" alt="" />
      //   <img src="https://i.ibb.co/SNVRd1k/image.png" alt="" />
      //   <img src="https://i.ibb.co/yNcrRG7/image.png" alt="" />
      //   <img src="https://i.ibb.co/q1zVNsN/image.png" alt="" />
      //   <img src="https://i.ibb.co/TtChcR0/image.png" alt="" />
      //   <img src="https://i.ibb.co/NmwSNMw/image.png" alt="" />
      //   <img src="https://i.ibb.co/VNFd4tg/image.png" alt="" />
      // </div>
      //   ),
      features: [
        {
          Technology: "NextJS",
        },
        { "Use Case": "Portfolio, Newsletter, Store, and more" },
        { Responsive: "yes" },
        { Fast: "yes" },
        { "Dynamic Routes": "yes" },
        { Modern: "yes" },
      ],
    },
    {
      category: "Templates",
      title: "Linkup v1.0 - Linktree Alternative",
      image: "https://i.ibb.co/bd3Tr2M/Slide-16-9-6.png",
      featuredImage: "https://i.ibb.co/v1myx1s/Mac-Book-Pro-16.png",
      description:
        "Elevate your online presence with this Framer template – a versatile Linktree alternative designed for streamlined organization of links, projects, products, and more.",
      slug: "linkup-linktree-alternative",
      primaryButtonURL: "https://www.buymeacoffee.com/rokanuddin/e/173543",
      secondaryButtonURL: "https://linkup.framer.website",
      rating: "4.5",
      salesCount: "120",
      isFree: false,
      price: "1.99",
      //   overview: (
      // <div>
      //   <p className="mb-4">
      //     Linkup is like mini portfolio. Where you can list your important
      //     links, projects, blogs and more.
      //   </p>
      //   <ul className="list-disc ml-4 mb-4">
      //     <li>Sections are managed by CMS</li>
      //     <li>Mobile Responsive + very fast</li>
      //     <li>Added animation</li>
      //     <li>Tutorial includes</li>
      //   </ul>
      //   <img src="https://i.ibb.co/q09ktHx/image.png" />
      // </div>
      //   ),
      features: [
        {
          Technology: "Framer",
        },
        { "Use Case": "Portfolio, Links, Store" },
        { Responsive: "yes" },
      ],
    },
    {
      category: "Products",
      title: "Linkup v1.0 - Linktree Alternative",
      image: "https://i.ibb.co/bd3Tr2M/Slide-16-9-6.png",
      featuredImage: "https://i.ibb.co/v1myx1s/Mac-Book-Pro-16.png",
      description:
        "Elevate your online presence with this Framer template – a versatile Linktree alternative designed for streamlined organization of links, projects, products, and more.",
      slug: "linkup-linktree-alternative-4",
      primaryButtonURL: "https://www.buymeacoffee.com/rokanuddin/e/173543",
      secondaryButtonURL: "https://linkup.framer.website",
      rating: "4.5",
      salesCount: "120",
      isFree: true,
      price: "49",
      //   overview: (
      // <p>
      //   Elevate your online presence with this Framer template – a versatile
      //   Linktree alternative designed for streamlined organization of links,
      //   projects, products, and more.
      // </p>
      //   ),
      features: [
        {
          Technology: "Framer",
        },
        { "Use Case": "Portfolio, Links, Store" },
        { Responsive: "yes" },
      ],
    },
    {
      category: "Resources",
      title: "Linkup v1.0 - Linktree Alternative",
      image: "https://i.ibb.co/bd3Tr2M/Slide-16-9-6.png",
      featuredImage: "https://i.ibb.co/v1myx1s/Mac-Book-Pro-16.png",
      description:
        "Elevate your online presence with this Framer template – a versatile Linktree alternative designed for streamlined organization of links, projects, products, and more.",
      slug: "linkup-linktree-alternative",
      primaryButtonURL: "https://www.buymeacoffee.com/rokanuddin/e/173543",
      secondaryButtonURL: "https://linkup.framer.website",
      rating: "4.5",
      salesCount: "120",
      isFree: false,
      price: "1.99",
      //   overview: (
      // <div>
      //   <p className="mb-4">
      //     Linkup is like mini portfolio. Where you can list your important
      //     links, projects, blogs and more.
      //   </p>
      //   <ul className="list-disc ml-4 mb-4">
      //     <li>Sections are managed by CMS</li>
      //     <li>Mobile Responsive + very fast</li>
      //     <li>Added animation</li>
      //     <li>Tutorial includes</li>
      //   </ul>
      //   <img src="https://i.ibb.co/q09ktHx/image.png" />
      // </div>
      //   ),
      features: [
        {
          Technology: "Framer",
        },
        { "Use Case": "Portfolio, Links, Store" },
        { Responsive: "yes" },
      ],
    },
  ];

  return NextResponse.json(AllProducts);
}
