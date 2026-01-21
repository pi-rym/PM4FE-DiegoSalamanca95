import { Product } from "@/types/products";

export const mockProducts: Product[] = [
  // --- Serie Samsung Galaxy ---
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    description: "El tope de gama con S Pen y cámara de 200MP.",
    price: 1299.99,
    stock: 15,
    image: "https://via.placeholder.com/150/007bff/ffffff?text=S24+Ultra",
    categoryId: 1, // Premium
  },
  {
    id: 2,
    name: "Samsung Galaxy A54 5G",
    description: "Excelente rendimiento y pantalla AMOLED para el uso diario.",
    price: 449.50,
    stock: 45,
    image: "https://via.placeholder.com/150/28a745/ffffff?text=A54+5G",
    categoryId: 2, // Gama Media
  },
  {
    id: 3,
    name: "Samsung Galaxy Z Fold 5",
    description: "Smartphone plegable, la experiencia de tablet en tu bolsillo.",
    price: 1799.00,
    stock: 8,
    image: "https://via.placeholder.com/150/ffc107/000000?text=Z+Fold+5",
    categoryId: 1, // Premium
  },
  // --- Serie Apple iPhone ---
  {
    id: 4,
    name: "iPhone 15 Pro Max",
    description: "Chip A17 Bionic y sistema de cámara profesional.",
    price: 1399.00,
    stock: 22,
    image: "https://via.placeholder.com/150/6c757d/ffffff?text=iPhone+15",
    categoryId: 1, // Premium
  },
  {
    id: 5,
    name: "iPhone SE (3ra Gen)",
    description: "Potencia de chip A15 en un diseño compacto.",
    price: 429.00,
    stock: 60,
    image: "https://via.placeholder.com/150/dc3545/ffffff?text=iPhone+SE",
    categoryId: 3, // Gama Básica
  },
  {
    id: 6,
    name: "iPhone 13",
    description: "Dual Camera System y rendimiento sólido.",
    price: 649.99,
    stock: 35,
    image: "https://via.placeholder.com/150/f8f9fa/000000?text=iPhone+13",
    categoryId: 2, // Gama Media
  },
  // --- Serie Xiaomi/Redmi ---
  {
    id: 7,
    name: "Xiaomi 14 Pro",
    description: "Carga ultra rápida y óptica Leica.",
    price: 999.00,
    stock: 18,
    image: "https://via.placeholder.com/150/6f42c1/ffffff?text=Xiaomi+14",
    categoryId: 1, // Premium
  },
  {
    id: 8,
    name: "Redmi Note 13 Pro",
    description: "Pantalla 120Hz y excelente relación calidad-precio.",
    price: 329.00,
    stock: 70,
    image: "https://via.placeholder.com/150/17a2b8/ffffff?text=Redmi+13",
    categoryId: 2, // Gama Media
  },
  {
    id: 9,
    name: "Poco F5",
    description: "Orientado al gaming con potente procesador.",
    price: 399.00,
    stock: 30,
    image: "https://via.placeholder.com/150/fd7e14/ffffff?text=Poco+F5",
    categoryId: 2, // Gama Media
  },
  // --- Serie Google Pixel ---
  {
    id: 10,
    name: "Google Pixel 8 Pro",
    description: "El mejor software de cámara e inteligencia artificial de Google.",
    price: 999.99,
    stock: 12,
    image: "https://via.placeholder.com/150/e83e8c/ffffff?text=Pixel+8",
    categoryId: 1, // Premium
  },
  {
    id: 11,
    name: "Google Pixel 7a",
    description: "La experiencia pura de Android a un precio accesible.",
    price: 499.00,
    stock: 40,
    image: "https://via.placeholder.com/150/6610f2/ffffff?text=Pixel+7a",
    categoryId: 2, // Gama Media
  },
  // --- Serie OnePlus ---
  {
    id: 12,
    name: "OnePlus 12",
    description: "Rendimiento sin igual y carga muy rápida.",
    price: 799.00,
    stock: 10,
    image: "https://via.placeholder.com/150/adb5bd/ffffff?text=OnePlus+12",
    categoryId: 1, // Premium
  },
  {
    id: 13,
    name: "OnePlus Nord 3",
    description: "Gran pantalla AMOLED y batería duradera.",
    price: 479.00,
    stock: 25,
    image: "https://via.placeholder.com/150/ff00ff/ffffff?text=Nord+3",
    categoryId: 2, // Gama Media
  },
  // --- Serie Motorola ---
  {
    id: 14,
    name: "Motorola Edge 40 Pro",
    description: "Diseño elegante y bordes curvados.",
    price: 699.00,
    stock: 14,
    image: "https://via.placeholder.com/150/000000/ffffff?text=Edge+40",
    categoryId: 1, // Premium
  },
  {
    id: 15,
    name: "Motorola G54",
    description: "El mejor de la serie G con 5G.",
    price: 249.00,
    stock: 80,
    image: "https://via.placeholder.com/150/40e0d0/000000?text=Moto+G54",
    categoryId: 3, // Gama Básica
  },
  // --- Otras Marcas/Modelos ---
  {
    id: 16,
    name: "Huawei P60 Pro",
    description: "Cámaras XMAGE de última generación.",
    price: 1099.00,
    stock: 9,
    image: "https://via.placeholder.com/150/ff4500/ffffff?text=Huawei+P60",
    categoryId: 1, // Premium
  },
  {
    id: 17,
    name: "Asus ROG Phone 8",
    description: "El móvil gaming definitivo con gatillos ultrasónicos.",
    price: 1199.00,
    stock: 5,
    image: "https://via.placeholder.com/150/8a2be2/ffffff?text=ROG+8",
    categoryId: 1, // Premium
  },
  {
    id: 18,
    name: "Nokia G400 5G",
    description: "Batería de larga duración y durabilidad.",
    price: 299.00,
    stock: 55,
    image: "https://via.placeholder.com/150/4682b4/ffffff?text=Nokia+G400",
    categoryId: 3, // Gama Básica
  },
  {
    id: 19,
    name: "Sony Xperia 5 V",
    description: "Diseño compacto y alta calidad de video.",
    price: 849.00,
    stock: 11,
    image: "https://via.placeholder.com/150/20b2aa/ffffff?text=Xperia+5V",
    categoryId: 1, // Premium
  },
  {
    id: 20,
    name: "Infinix Note 30 Pro",
    description: "Carga inalámbrica y gran pantalla.",
    price: 219.00,
    stock: 90,
    image: "https://via.placeholder.com/150/b0c4de/000000?text=Infinix+30",
    categoryId: 3, // Gama Básica
  },
];

export default mockProducts;