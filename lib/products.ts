export type ProductCategory = "Adhesives" | "Grouts";

export interface Product {
    id: number;
    slug: string;
    name: string;
    category: ProductCategory;
    code: string;
    image: string;
    summary: string;
    description: string;
    specs: string[];
    applications: string[];
    packaging?: string;
    shades?: string[];
}

export const shadeNames: Record<string, string> = {
    "#000000": "Black",
    "#FFFFFF": "White",
    "#FFFFF0": "Ivory",
    "#A52A2A": "Brown",
    "#708090": "Slate Grey",
    "#E5E4E2": "Platinum Grey",
    "#FFD700": "Golden Sparkle",
    "#C0C0C0": "Silver Sparkle",
    "#808080": "Grey"
};

export const products: Product[] = [
    {
        id: 1,
        slug: "c1-001",
        name: "Astorea Fix C1-001",
        category: "Adhesives",
        code: "C1-001",
        image: "/images/products/1.png",
        summary: "Type 1 adhesive for floor-only applications.",
        description: "Type 1 (C1-001) adhesive formulated for floor installations where reliable bonding is required.",
        specs: ["Type 1 (C1)", "Floor Only", "Pink Bag"],
        applications: ["Floor tiles"]
    },
    {
        id: 2,
        slug: "c1t-101",
        name: "Astorea Fix C1T-101",
        category: "Adhesives",
        code: "C1T-101",
        image: "/images/products/2.png",
        summary: "Type 1 C1T adhesive for floor tiles up to 2x4.",
        description: "Type 1 (C1T-101) adhesive for floor installations with tile sizes up to 2x4.",
        specs: ["Type 1 (C1T)", "Floor Only", "2x4 Tile Size"],
        applications: ["Floor tiles up to 2x4"]
    },
    {
        id: 3,
        slug: "c2t-301",
        name: "Astorea Fix C2T-301",
        category: "Adhesives",
        code: "C2T-301",
        image: "/images/products/3.png",
        summary: "Type 2 adhesive for floor and wall up to 10 ft.",
        description: "Type 2 (C2T-301) adhesive suitable for floor and wall tiles up to 2x4, with wall heights up to 10 ft.",
        specs: ["Type 2 (C2T)", "Floor + Wall", "2x4 Tile Size"],
        applications: ["Floor tiles up to 2x4", "Wall tiles up to 10 ft height"],
        shades: ["#808080", "#FFFFFF"]
    },
    {
        id: 4,
        slug: "c2te-501",
        name: "Astorea Fix C2TE-501",
        category: "Adhesives",
        code: "C2TE-501",
        image: "/images/products/4.png",
        summary: "Type 3 exterior adhesive for floor and wall up to 30 ft.",
        description: "Type 3 (C2TE-501) adhesive for exterior floor and wall tiles up to 2x4, with wall heights up to 30 ft.",
        specs: ["Type 3 (C2TE)", "Exterior Use", "2x4 Tile Size"],
        applications: ["Exterior floor tiles up to 2x4", "Exterior wall tiles up to 30 ft height"],
        shades: ["#808080", "#FFFFFF"]
    },
    {
        id: 5,
        slug: "grout-101",
        name: "Astorea Grout 101",
        category: "Grouts",
        code: "Grout 101",
        image: "/images/products/5.png",
        summary: "Grout 101 available in 1 kg packs.",
        description: "Grout 101 is offered in 1 kg packaging with a full shade range for design flexibility.",
        specs: ["1 kg Pack", "8 Shade Options"],
        applications: ["Tile joints"],
        packaging: "1 kg",
        shades: ["#000000", "#FFFFFF", "#FFFFF0", "#A52A2A", "#708090", "#E5E4E2", "#FFD700", "#C0C0C0"]
    },
    {
        id: 6,
        slug: "epoxy-5kg",
        name: "Astorea Epoxy Grout",
        category: "Grouts",
        code: "Epoxy 5 kg",
        image: "/images/products/6.png",
        summary: "Two-component epoxy grout in 5 kg packs.",
        description: "Two-component epoxy grout system supplied in 5 kg packaging.",
        specs: ["2 Component", "5 kg Pack"],
        applications: ["Tile joints"],
        packaging: "5 kg",
        shades: ["#000000", "#FFFFFF", "#FFFFF0", "#A52A2A", "#708090", "#E5E4E2", "#FFD700", "#C0C0C0"]
    }
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
