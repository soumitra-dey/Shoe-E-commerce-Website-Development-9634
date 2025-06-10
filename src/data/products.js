export const products = [
  {
    id: 1,
    name: "Air Max Revolution",
    brand: "Nike",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    category: "running",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    colors: ["Black", "White", "Red"],
    description: "Experience ultimate comfort and style with the Air Max Revolution. Featuring advanced cushioning technology and a sleek design.",
    features: ["Air Max cushioning", "Breathable mesh upper", "Durable rubber outsole"],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "UltraBoost 22",
    brand: "Adidas",
    price: 189.99,
    originalPrice: 220.00,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    category: "running",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["White", "Black", "Blue"],
    description: "Push your limits with UltraBoost 22. Revolutionary BOOST midsole returns energy with every step.",
    features: ["BOOST midsole", "Primeknit upper", "Continental rubber outsole"],
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Classic Leather",
    brand: "Reebok",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    category: "casual",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    colors: ["White", "Black", "Brown"],
    description: "Timeless style meets modern comfort. The Classic Leather is a wardrobe essential that never goes out of style.",
    features: ["Premium leather upper", "Comfortable EVA midsole", "Classic design"],
    rating: 4.6,
    reviews: 156
  },
  {
    id: 4,
    name: "Chuck Taylor All Star",
    brand: "Converse",
    price: 65.00,
    originalPrice: 75.00,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop",
    category: "casual",
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["Black", "White", "Red", "Navy"],
    description: "The iconic Chuck Taylor All Star. A timeless design that's been a cultural icon for decades.",
    features: ["Canvas upper", "Rubber toe cap", "Classic lace-up design"],
    rating: 4.7,
    reviews: 203
  },
  {
    id: 5,
    name: "Gel-Kayano 29",
    brand: "ASICS",
    price: 169.99,
    originalPrice: 190.00,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop",
    category: "running",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    colors: ["Blue", "Black", "White"],
    description: "Advanced stability and comfort for long-distance running. The Gel-Kayano 29 delivers premium performance.",
    features: ["GEL technology", "FlyteFoam midsole", "Engineered mesh upper"],
    rating: 4.8,
    reviews: 67
  },
  {
    id: 6,
    name: "Old Skool",
    brand: "Vans",
    price: 65.00,
    originalPrice: 70.00,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
    category: "casual",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["Black", "White", "Checkered"],
    description: "The classic skate shoe that started it all. Durable construction meets timeless style.",
    features: ["Suede and canvas upper", "Waffle outsole", "Padded collar"],
    rating: 4.5,
    reviews: 178
  },
  {
    id: 7,
    name: "Air Jordan 1 Retro",
    brand: "Jordan",
    price: 179.99,
    originalPrice: 200.00,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
    category: "basketball",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: ["Black/Red", "White/Black", "Royal Blue"],
    description: "The shoe that started a legacy. Classic Air Jordan 1 design with premium materials.",
    features: ["Premium leather upper", "Air-Sole unit", "Rubber outsole"],
    rating: 4.9,
    reviews: 245
  },
  {
    id: 8,
    name: "990v5",
    brand: "New Balance",
    price: 184.99,
    originalPrice: 200.00,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop",
    category: "running",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    colors: ["Grey", "Navy", "Black"],
    description: "Crafted in the USA, the 990v5 represents the pinnacle of premium running shoe construction.",
    features: ["ENCAP midsole", "Pigskin and mesh upper", "Made in USA"],
    rating: 4.7,
    reviews: 92
  }
];

export const categories = [
  { id: 'all', name: 'All Shoes', count: products.length },
  { id: 'running', name: 'Running', count: products.filter(p => p.category === 'running').length },
  { id: 'casual', name: 'Casual', count: products.filter(p => p.category === 'casual').length },
  { id: 'basketball', name: 'Basketball', count: products.filter(p => p.category === 'basketball').length }
];

export const brands = [
  'All',
  ...new Set(products.map(product => product.brand))
];