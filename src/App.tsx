
import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import type { User, Product } from "./types";

// This application demonstrates how the three components
// work together by passing props and handling user interactions.

// Define the user data using the User interface.
const user: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex@example.com",
  role: "Software Developer"
};

// Define the product data using the Product interface.
const product: Product = {
  id: "101",
  name: "Wireless Headphones",
  price: 79.99,
  description: "Comfortable wireless headphones with great sound.",
  inStock: true
};

function App() {
  // Controls whether the first success alert is displayed.
  const [showAlert, setShowAlert] = useState(true);

  // Stores the product IDs added to the shopping cart.
  const [cart, setCart] = useState<string[]>([]);

  // Stores the message displayed after adding a product.
  const [cartMessage, setCartMessage] = useState("");

  // Adds a product to the cart and updates the confirmation message.
  function handleAddToCart(productId: string) {
    // Keeps the existing cart items and adds the new product ID.
    setCart((previousCart) => [...previousCart, productId]);

    // Displays the product name in the confirmation message.
    setCartMessage(`${product.name} added to cart!`);
  }

  // Displays a popup containing the selected user's ID.
  function handleEdit(userId: string) {
    alert(`Editing profile for user ${userId}`);
  }

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Lab 9.1 — Component Basics</h1>

      <h2>AlertBox Component</h2>

      {/* Displays the success alert only when showAlert is true. */}
      {showAlert && (
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => setShowAlert(false)}
        >
          {/* Additional content passed through the children prop. */}
          <p>You can now continue using the application.</p>
        </AlertBox>
      )}

      {/* Demonstrates the other three alert types. */}
      <AlertBox type="error" message="Something went wrong." />
      <AlertBox type="warning" message="Please review your information." />
      <AlertBox type="info" message="Your account settings are available." />

      <h2>UserProfileCard Component</h2>

      {/* Passes user information and the edit function as props. */}
      <UserProfileCard user={user} onEdit={handleEdit}>
        {/* Additional content passed through children. */}
        <p>Member of the development team.</p>
      </UserProfileCard>

      <h2>ProductDisplay Component</h2>

      {/* Passes product information and the cart function as props. */}
      <ProductDisplay product={product} onAddToCart={handleAddToCart}>
        {/* Additional content passed through children. */}
        <p>Free shipping available!</p>
      </ProductDisplay>

      {/* Displays the number of products added to the cart. */}
      <h3>Shopping Cart: {cart.length} items</h3>

      {/* Displays a confirmation alert after adding a product. */}
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
