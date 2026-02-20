export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: "footwear" | "denim" | "tops";
    image: string;
    isNew?: boolean;
    isBestSeller?: boolean;
}

export const products: Product[] = [
    {
        id: "fw-01",
        name: "Royal Mules V1",
        description: "Premium handcrafted leather mules with golden velvet lining.",
        price: 45000,
        category: "footwear",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
        isNew: true,
    },
    {
        id: "fw-02",
        name: "Urban Stealth Sneakers",
        description: "All-black athletic sneakers with breathable mesh and responsive sole.",
        price: 38000,
        category: "footwear",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop",
        isBestSeller: true,
    },
    {
        id: "dn-01",
        name: "Distressed Indigo Slim",
        description: "Heavyweight Japanese denim with bespoke distress patterns.",
        price: 25000,
        category: "denim",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop",
        isNew: true,
    },
    {
        id: "tp-01",
        name: "Signature Boxy Tee",
        description: "Ultra-heavy 300GSM cotton tee in charcoal grey.",
        price: 15000,
        category: "tops",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
        isBestSeller: true,
    },
];

export const generateWhatsAppLink = (product: Product) => {
    const phoneNumber = "2348000000000"; // Replace with actual business number
    const message = `Hello PnP WEARS! I'd like to order the following item:
  
*Item:* ${product.name}
*Price:* ₦${product.price.toLocaleString()}
*Category:* ${product.category.toUpperCase()}

Please let me know how to proceed with payment and delivery.`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
