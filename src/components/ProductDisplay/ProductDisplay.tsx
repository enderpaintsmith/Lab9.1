
import type { ProductDisplayProps } from "../../types";

// Creates the ProductDisplay component using the props
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
      {/* Only displays an image if the product has an imageUrl. */}
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          width={150}
          style={{ borderRadius: "4px" }}
        />
      )}

      {/* Displays the product's name. */}
      <h2>{product.name}</h2>

      {/* Formats the price with two decimal places. */}
      <p>Price: ${product.price.toFixed(2)}</p>

      {/* Displays the description if showDescription is true. */}
      {/* This prop is set to true by default. */}
      {showDescription && <p>{product.description}</p>}

      {/* Displays the stock status if showStockStatus is true. */}
      {/* Uses a ternary operator to choose between In Stock and Out of Stock. */}
      {showStockStatus && (
        <p>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {/* Only displays the button if onAddToCart was provided. */}
      {onAddToCart && (
        <button
          // Passes the product ID to the function when clicked.
          onClick={() => onAddToCart(product.id)}

          // Disables the button when the product is out of stock.
          disabled={!product.inStock}
        >
          Add to Cart
        </button>
      )}

      {/* Displays additional content passed from the parent component. */}
      {children}
    </div>
  );
}
