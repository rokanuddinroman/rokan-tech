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
    overview: (
      <div>
        <p className="mb-4">
          Linkup is like mini portfolio. Where you can list your important
          links, projects, blogs and more.
        </p>
        <ul className="list-disc ml-4 mb-4">
          <li>Sections are managed by CMS</li>
          <li>Mobile Responsive + very fast</li>
          <li>Added animation</li>
          <li>Tutorial includes</li>
        </ul>
        <img src="https://i.ibb.co/q09ktHx/image.png" />
      </div>
    ),
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
    overview: (
      <div>
        <p className="mb-4">
          Introducing CreatorApp – a sleek and versatile NextJS template.
          Elevate your online presence with a modern design, seamless newsletter
          integration, categorized project showcase, and a captivating product
          page. Your all-in-one solution for portfolios, stores, newsletters,
          and beyond.
        </p>
        <img src="https://i.ibb.co/ZKkzZMg/image.png" alt="" />
        <img src="https://i.ibb.co/SNVRd1k/image.png" alt="" />
      </div>
    ),
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
    category: "Framer-Overrides",
    title: "Skeuomorphic button",
    image: "https://i.ibb.co/H72Fcz9/Slide-16-9-8-1.png",
    featuredImage: "https://i.ibb.co/vvpWwz3/Mac-Book-Pro-16-1.png",
    description:
      "Skeuomorphic Buttons are used to give navigation and using features a sense of realism.",
    slug: "skeuomorphic-button",
    buttonType: "clipboard",
    primaryButtonText: "Copy Primary Button",
    secondaryButtonText: "Copy Light Button",
    primaryButtonURL: `// Welcome to Code in Framer
    // Get Started: https://www.framer.com/developers
    
    import { addPropertyControls, ControlType } from "framer"
    import { motion } from "framer-motion"
    import { useEffect } from "react"
    
    /**
     * These annotations control how your component sizes
     * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
     *
     * @framerSupportedLayoutWidth auto
     * @framerSupportedLayoutHeight auto
     */
    export default function SkeuomorphicButton(props) {
        const { tint, borderColor, text, icon, iconColor, iconSize } = props
    
        useEffect(() => {
          const script = document.createElement("script")
          script.src = "https://code.iconify.design/3/3.1.1/iconify.min.js"
          script.async = true
          document.body.appendChild(script)
          return () => {
              document.body.removeChild(script)
          }
      }, [])
        return (
            <button
            style={{
              ...boxStyle,
              background: \`linear-gradient(180deg, rgba(255, 255, 255, 0.00) 70.48%, rgba(255, 255, 255, 0.12) 93.62%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.04) 100%), \${tint}\`,
              boxShadow: \`0px 0px 0px 1px \${borderColor}, 0px 1px 2px 0px rgba(0, 0, 0, 0.32), 0px 4px 8px -4px rgba(0, 0, 0, 0.32), 0px -2px 0.75px 0px rgba(0, 0, 0, 0.12) inset, 0px 1px 0.75px 0px rgba(255, 255, 255, 0.24) inset\`,
          }}
            >
                
            <span
            style={{ color: iconColor, fontSize: iconSize }}
            className="iconify-inline"
            data-icon={icon}
        ></span>
                <span
                    style={{
                        color: "#FFF0EA",
                        textShadow:
                            "0px 0.5px 0.25px rgba(0, 0, 0, 0.06), 0px -0.5px 0.25px rgba(255, 255, 255, 0.16)",
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                    }}
                >
                    {text}
                </span>
            </button>
        )
    }
    
    addPropertyControls(SkeuomorphicButton, {
        tint: {
            title: "Button Color",
            type: ControlType.Color,
            defaultValue: "#FB4B00",
        },
        borderColor: {
            title: "Border Color",
            type: ControlType.Color,
            defaultValue: "#CC3402",
        },
        text: {
            title: "Text",
            type: ControlType.String,
            defaultValue: "Add New",
        },
        icon: {
            title: "Icon(icon-sets.iconify.design)",
            type: ControlType.String,
            defaultValue: "ph:plus",
        },
        iconSize: {
            title: "Icon Size",
            type: ControlType.Number,
            defaultValue: 24,
        },
        iconColor: {
            title: "Icon Color",
            type: ControlType.String,
            defaultValue: "#FFF0EA",
        },
    })
    
    const boxStyle = {
        borderRadius: 8,
        display: "flex",
        padding: "8px 16px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        border: "0px",
    }
    `,
    secondaryButtonURL: `// Welcome to Code in Framer
    // Get Started: https://www.framer.com/developers
    
    import { addPropertyControls, ControlType } from "framer"
    import { motion } from "framer-motion"
    import { useEffect } from "react"
    
    /**
     * These annotations control how your component sizes
     * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
     *
     * @framerSupportedLayoutWidth auto
     * @framerSupportedLayoutHeight auto
     */
    export default function SkeuomorphicLightButton(props) {
        const { tint, borderColor, text, icon, iconColor, iconSize } = props
        useEffect(() => {
          const script = document.createElement("script")
          script.src = "https://code.iconify.design/3/3.1.1/iconify.min.js"
          script.async = true
          document.body.appendChild(script)
          return () => {
              document.body.removeChild(script)
          }
      }, [])
        return (
            <button
                style={{
                    ...boxStyle,
                    background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 70.48%, #FFF 93.62%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, rgba(30, 54, 87, 0.00) 0%, rgba(30, 54, 87, 0.01) 100%), #FAFAFA",
    
                    boxShadow:
                        "0px 0px 0px 1px rgba(22, 36, 44, 0.12), 0px 1px 2px 0px rgba(22, 36, 44, 0.16), 0px 4px 8px -4px rgba(22, 36, 44, 0.16), 0px -2px 0.75px 0px rgba(22, 36, 44, 0.06) inset, 0px 1px 0.75px 0px rgba(255, 255, 255, 0.50) inset",
                }}
            >
            <span
            style={{ color: iconColor, fontSize: iconSize }}
            className="iconify-inline"
            data-icon={icon}
        ></span>
                <span
                    style={{
                        color: "#333",
                        textShadow:
                            " 0px 0.5px 0.25px rgba(0, 0, 0, 0.12), 0px -0.5px 0.25px #FFF",
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                    }}
                >
                    {text}
                </span>
            </button>
        )
    }
    
    addPropertyControls(SkeuomorphicLightButton, {
        text: {
            title: "Text",
            type: ControlType.String,
            defaultValue: "Add New",
        },
        icon: {
            title: "Icon(icon-sets.iconify.design)",
            type: ControlType.String,
            defaultValue: "ph:plus",
        },
        iconSize: {
            title: "Icon Size",
            type: ControlType.Number,
            defaultValue: 24,
        },
        iconColor: {
            title: "Icon Color",
            type: ControlType.String,
            defaultValue: "#333333",
        },
    })
    
    const boxStyle = {
        borderRadius: 8,
        display: "flex",
        padding: "8px 16px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        border: "0px",
    }
    `,
    rating: "5.0",
    salesCount: "38",
    isFree: true,
    price: "0",
    overview: (
      <div>
        <p className="mb-4">
          Introducing CreatorApp – a sleek and versatile NextJS template.
          Elevate your online presence with a modern design, seamless newsletter
          integration, categorized project showcase, and a captivating product
          page. Your all-in-one solution for portfolios, stores, newsletters,
          and beyond.
        </p>
        <img src="https://i.ibb.co/ZKkzZMg/image.png" alt="" />
      </div>
    ),
    features: [
      {
        Technology: "Framer",
      },
      { "Use Case": "WebApp, Dahsboard, and more" },
      { Responsive: "yes" },
    ],
  },
];
const useCards = () => {
  const myCards = AllProducts;
  return { myCards };
};

export default useCards;
