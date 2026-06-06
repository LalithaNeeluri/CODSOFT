import { useState } from "react";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      _id: 1,
      name: "iPhone 15",
      description: "Apple Smartphone",
      price: 75000,
      category: "Mobiles",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    },
    {
      _id: 2,
      name: "Samsung Galaxy S24",
      description: "Samsung Smartphone",
      price: 65000,
      category: "Mobiles",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    },
    {
      _id: 3,
      name: "HP Pavilion Laptop",
      description: "16GB RAM, 512GB SSD",
      price: 60000,
      category: "Laptops",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
      _id: 4,
      name: "Dell Inspiron",
      description: "Intel i7 Laptop",
      price: 70000,
      category: "Laptops",
      image:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    },
    {
      _id: 5,
      name: "Apple Watch Series 9",
      description: "Smart Fitness Watch",
      price: 35000,
      category: "Watches",
      image:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
    },
    {
      _id: 6,
      name: "Sony Headphones",
      description: "Wireless Headphones",
      price: 12000,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      _id: 7,
      name: "Boat Smart Watch",
      description: "Bluetooth Calling Watch",
      price: 4999,
      category: "Watches",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      _id: 8,
      name: "Realme Buds",
      description: "Wireless Earbuds",
      price: 2999,
      category: "Accessories",
      image:
        "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <div className="home">
        <h1>Our Products</h1>

        <input
          type="text"
          placeholder="Search Products..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-buttons">
          <button onClick={() => setCategory("All")}>
            All
          </button>

          <button onClick={() => setCategory("Mobiles")}>
            Mobiles
          </button>

          <button onClick={() => setCategory("Laptops")}>
            Laptops
          </button>

          <button onClick={() => setCategory("Watches")}>
            Watches
          </button>

          <button onClick={() => setCategory("Accessories")}>
            Accessories
          </button>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;