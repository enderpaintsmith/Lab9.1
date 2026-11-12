

import type { ProductDisplayProps } from "../../types";

// Create the ProductDisplay component using props
// defined in the ProductDisplayProps interface.

export function ProductDisplay({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children
}: ProductDisplayProps) {

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "16px"
      }}
    >
      {/* Only display an image if the product has an imageUrl. */}
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          width={150}
          style={{ borderRadius: "4px" }}
        />
      )}

      {/* Display the product's name and price. */}
      <h2>{product.name}</h2>

      {/* Format the price with two decimal places. */}
      <p>Price: ${product.price.toFixed(2)}</p>

      {/* Show the description if showDescription is true. */}
      {showDescription && <p>{product.description}</p>}

      {/* Show the stock status if showStockStatus is true. */}
      {showStockStatus && (
        <p>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {/* Only display the button if onAddToCart was provided. */}
      {onAddToCart && (
        <button
          // Pass the product ID to the function when clicked.
          onClick={() => onAddToCart(product.id)}

          // Disable the button when the product is out of stock.
          disabled={!product.inStock}
        >
          Add to Cart
        </button>
      )}

      {/* Display additional content passed from App.tsx. */}
      {children}
    </div>
  );
}
