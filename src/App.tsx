
import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import type { User, Product } from "./types";

const user: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex@example.com",
  role: "Software Developer"
};

const product: Product = {
  id: "101",
  name: "Wireless Headphones",
  price: 79.99,
  description: "Comfortable wireless headphones with great sound.",
  inStock: true
};

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [cart, setCart] = useState<string[]>([]);
  const [cartMessage, setCartMessage] = useState("");

  function handleAddToCart(productId: string) {
    setCart((previousCart) => [...previousCart, productId]);
    setCartMessage(`${product.name} added to cart!`);
  }

  function handleEdit(userId: string) {
    alert(`Editing profile for user ${userId}`);
  }

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Lab 9.1 — Component Basics</h1>

      <h2>AlertBox Component</h2>

      {showAlert && (
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => setShowAlert(false)}
        >
          <p>You can now continue using the application.</p>
        </AlertBox>
      )}

      <AlertBox type="error" message="Something went wrong." />
      <AlertBox type="warning" message="Please review your information." />
      <AlertBox type="info" message="Your account settings are available." />

      <h2>UserProfileCard Component</h2>

      <UserProfileCard user={user} onEdit={handleEdit}>
        <p>Member of the development team.</p>
      </UserProfileCard>

      <h2>ProductDisplay Component</h2>

      <ProductDisplay product={product} onAddToCart={handleAddToCart}>
        <p>Free shipping available!</p>
      </ProductDisplay>

      <h3>Shopping Cart: {cart.length} items</h3>

      {cartMessage && (
        <AlertBox
          type="success"
          message={cartMessage}
          onClose={() => setCartMessage("")}
        />
      )}
    </div>
  );
}

export default App;
