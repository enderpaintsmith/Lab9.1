
import type { ProductDisplayProps } from "../../types";

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
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          width={150}
          style={{ borderRadius: "4px" }}
        />
      )}

      <h2>{product.name}</h2>

      <p>Price: ${product.price.toFixed(2)}</p>

      {showDescription && <p>{product.description}</p>}

      {showStockStatus && (
        <p>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          disabled={!product.inStock}
        >
          Add to Cart
        </button>
      )}

      {children}
    </div>
  );
}
