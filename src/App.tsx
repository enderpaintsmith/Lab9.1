
import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import type { User, Product } from "./types";

// This application demonstrates:
// Passing props, component composition, children,
// and conditional rendering based on state.

// Define the user data using the User interface.
const user: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex@example.com",
  role: "Software Developer"
};

// Define the product data using Product interface.
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

  // Adds a product ID to the cart and updates the message.
  function handleAddToCart(productId: string) {
    // Keep the existing cart items and add the new product ID.
    setCart((previousCart) => [...previousCart, productId]);

    // Use a template literal to include the product name.
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

      {/* Only display this alert when showAlert is true. */}
      {showAlert && (
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => setShowAlert(false)}
        >
          {/* This paragraph is passed as the children prop. */}
          <p>You can now continue using the application.</p>
        </AlertBox>
      )}

      {/* These alerts demonstrate different alert types. */}
      <AlertBox type="error" message="Something went wrong." />
      <AlertBox type="warning" message="Please review your information." />
      <AlertBox type="info" message="Your account settings are available." />

      <h2>UserProfileCard Component</h2>

      {/* Pass user data and the edit function as props. */}
      <UserProfileCard user={user} onEdit={handleEdit}>
        {/* Additional content passed through children. */}
        <p>Member of the development team.</p>
      </UserProfileCard>

      <h2>ProductDisplay Component</h2>

      {/* Pass product data and the add-to-cart function as props. */}
      <ProductDisplay product={product} onAddToCart={handleAddToCart}>
        {/* Additional content passed through children. */}
        <p>Free shipping available!</p>
      </ProductDisplay>

      {/* Display the number of products currently in the cart. */}
      <h3>Shopping Cart: {cart.length} items</h3>

      {/* Only display this alert when cartMessage has a value. */}
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
