

// export default Category;
import React, { useState } from "react";
import "../styles/category.css";
import { Link } from "react-router-dom";
import "@google/model-viewer/dist/model-viewer.min.js";

const Category = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { name: "Table Lamp", rating: "★★★★★", price: "₹4926", originalPrice: "₹4926", image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHN8ZW58MHx8MHx8fDA%3D", model: "/models/table_lamp.glb" },
        { name: "Floor Lamp", rating: "★★★★★", price: "₹6597", originalPrice: "₹8267", image: "https://images.unsplash.com/photo-1743578666060-49a1747d61df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb29yJTIwbGFtcHN8ZW58MHx8MHx8fDA%3D", model: "/models/lamp.glb" },
        { name: "Modern Lamp", rating: "★★★★☆", price: "₹4926", originalPrice: "₹5762", image: "https://images.unsplash.com/photo-1729825128716-13221811859f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVybiUyMGxhbXBzfGVufDB8fDB8fHww", model: "/models/modern_lamp.glb" },
        { name: "Vintage Lamp", rating: "★★★★★", price: "₹6597", originalPrice: "₹8267", image: "https://images.unsplash.com/photo-1667316636895-0346ca648046?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpbnRhZ2UlMjBsYW1wc3xlbnwwfHwwfHx8MA%3D%3D", model: "/models/vintage_lamp.glb" },
        { name: "Desk Lamp", rating: "★★★★☆", price: "₹3297", originalPrice: "₹4092", image: "https://plus.unsplash.com/premium_photo-1685287731237-d119a3d95711?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzayUyMGxhbXBzfGVufDB8fDB8fHww", model: "/models/new_table_lamp.glb" },
        { name: "Modern Bed", rating: "★★★★★", price: "₹24967", originalPrice: "₹29152", image: "https://images.unsplash.com/photo-1688384452844-8364c3e2fc28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29vZGVuJTIwYmVkfGVufDB8fDB8fHww", model: "/models/modern_bed.glb" },
        { name: "King Size Bed", rating: "★★★★★", price: "₹33317", originalPrice: "₹37492", image: "https://images.unsplash.com/photo-1592229505678-cf99a9908e03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHN8ZW58MHx8MHx8fDA%3D", model: "/models/king_size.glb" },
        { name: "Wooden Bed", rating: "★★★★★", price: "₹24967", originalPrice: "₹37492", image: "https://images.unsplash.com/photo-1688384452844-8364c3e2fc28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29vZGVuJTIwYmVkfGVufDB8fDB8fHww", model: "/models/wooden_bed.glb" },
        { name: "Sleek Bed", rating: "★★★★★", price: "₹26637", originalPrice: "₹30812", image: "https://plus.unsplash.com/premium_photo-1670076515907-2736a3492f23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkc3xlbnwwfHwwfHx8MA%3D%3D", model: "/models/sleek_bed.glb" },
        { name: "Minimalist Bed", rating: "★★★★☆", price: "₹23297", originalPrice: "₹27472", image: "https://plus.unsplash.com/premium_photo-1671269943825-e45b177add8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVkc3xlbnwwfHwwfHx8MA%3D%3D", model: "/models/minimalist_bed.glb" },
        { name: "Leather Sofa", rating: "★★★★★", price: "₹41667", originalPrice: "₹45842", image: "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHNvZmF8ZW58MHx8MHx8fDA%3D", model: "/models//chesterfield-sofa.glb" },
        { name: "Modern Sofa", rating: "★★★★★", price: "₹33317", originalPrice: "₹37492", image: "https://images.unsplash.com/photo-1698936061086-2bf99c7b9fc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1kb2VybiUyMHNvZmF8ZW58MHx8MHx8fDA%3D", model: "/models/low_poly_modern_sofa_free_model.glb" },
        { name: "Velvet Sofa", rating: "★★★★★", price: "₹38327", originalPrice: "₹41667", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVsdmV0JTIwc29mYXxlbnwwfHwwfHx8MA%3D%3D", model: "/models/green_velvet_three_seatersofa.glb" },
        { name: "Compact Sofa", rating: "★★★★☆", price: "₹29167", originalPrice: "₹32482", image: "https://images.unsplash.com/photo-1647221598498-245f6ed6c720?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFjdCUyMHNvZmF8ZW58MHx8MHx8fDA%3D", model: "/models/compact_sofa.glb" },
        { name: "L-Shaped Sofa", rating: "★★★★★", price: "₹50017", originalPrice: "₹54192", image: "https://plus.unsplash.com/premium_photo-1692130314358-30f911957d7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TCUyMHNoYXBlJTIwc29mYXxlbnwwfHwwfHx8MA%3D%3D", model: "/models/L-shape.glb" },
        { name: "Coffee Table", rating: "★★★★★", price: "₹10767", originalPrice: "₹12442", image: "https://images.unsplash.com/photo-1461418559055-6f020c5a91e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29mZmVlJTIwVGFibGV8ZW58MHx8MHx8fDA%3D", model: "/models/bar_table.glb" },
        { name: "Dining Table", rating: "★★★★★", price: "₹24967", originalPrice: "₹29152", image: "https://images.unsplash.com/photo-1656470176663-1f5ed664e539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nVGFibGV8ZW58MHx8MHx8fDA%3D", model: "/models/simple_dining_table.glb" },
        { name: "Side Table", rating: "★★★★☆", price: "₹6597", originalPrice: "₹8267", image: "https://images.unsplash.com/photo-1494949385013-8b57482a0e4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpZGVUYWJsZXxlbnwwfHwwfHx8MA%3D%3D", model: "/models/ikea_lack_side_table_55x55x45.glb" },
        { name: "Round Table", rating: "★★★★☆", price: "₹12442", originalPrice: "₹14112", image: "https://plus.unsplash.com/premium_photo-1670869816894-e020bc93b279?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm91bmQlMjBUYWJsZXxlbnwwfHwwfHx8MA%3D%3D", model: "/models/round_table.glb" },
        { name: "Glass Table", rating: "★★★★★", price: "₹16617", originalPrice: "₹19122", image: "https://images.unsplash.com/photo-1563146413-d915a569d6b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3MlMjBUYWJsZXxlbnwwfHwwfHx8MA%3D%3D", model: "/models/round_glass_table.glb" }
  ];

  const handleARView = (product) => {
    setSelectedProduct(product);
  };

  const closeARView = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div className="product-details">
              <h3>{product.name}</h3>
              <div className="product-rating">{product.rating}</div>
              <p className="product-price">
                {product.price}{" "}
                <span className="original-price">{product.originalPrice}</span>
              </p>
              <div className="product-actions">
                <button className="add-to-cart">Add to Cart</button>
                <button className="ar-button" onClick={() => handleARView(product)}>
                  {/* Use image with verified path */}
                  <img
  src="/models/cube_838538.png" // Ensure this path is correct (e.g., public/models/cube_838538.png)
  alt="AR View"
  style={{ width: "24px", height: "24px", verticalAlign: "middle" }}
/>

                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="ar-modal">
          <div className="ar-modal-content">
            <button className="close-ar-modal" onClick={closeARView}>
              ×
            </button>
            <div className="product-description">
              <h3>{selectedProduct.name}</h3>
              <div className="product-rating">{selectedProduct.rating}</div>
              <p className="product-price">
                {selectedProduct.price}{" "}
                <span className="original-price">{selectedProduct.originalPrice}</span>
              </p>
              <p>{selectedProduct.description || "Hurry Up! Sale is Over in 2-Hours."}</p>
            </div>
            <model-viewer
              src={selectedProduct.model}
              ar
              ar-modes="webxr scene-viewer quick-look"
              ar-placement="floor wall"
              camera-controls
              auto-rotate
              environment-image="neutral"
              shadow-intensity="1"
              style={{ width: "100%", height: "500px" }}
            >
              <div slot="ar-prompt">Move your device slowly to detect a plane...</div>
              <button slot="ar-button" className="ar-activate-button">
                View in AR
              </button>
            </model-viewer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;