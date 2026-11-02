
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { ProductDisplay } from "./ProductDisplay";
import type { Product } from "../../types";

const testProduct: Product = {
  id: "101",
  name: "Wireless Headphones",
  price: 79.99,
  description: "Comfortable wireless headphones",
  inStock: true
};

describe("ProductDisplay Component", () => {
  it("displays the product name and price", () => {
    render(<ProductDisplay product={testProduct} />);

    expect(screen.getByText("Wireless Headphones")).toBeInTheDocument();
    expect(screen.getByText("Price: $79.99")).toBeInTheDocument();
  });

  it("displays the product description", () => {
    render(<ProductDisplay product={testProduct} />);

    expect(
      screen.getByText("Comfortable wireless headphones")
    ).toBeInTheDocument();
  });

  it("hides the description when showDescription is false", () => {
    render(
      <ProductDisplay product={testProduct} showDescription={false} />
    );

    expect(
      screen.queryByText("Comfortable wireless headphones")
    ).not.toBeInTheDocument();
  });

  it("displays the stock status", () => {
    render(<ProductDisplay product={testProduct} />);

    expect(screen.getByText("In Stock")).toBeInTheDocument();
  });

  it("calls onAddToCart with the product ID", () => {
    const handleAddToCart = vi.fn();

    render(
      <ProductDisplay
        product={testProduct}
        onAddToCart={handleAddToCart}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Add to Cart" }));

    expect(handleAddToCart).toHaveBeenCalledWith("101");
  });

  it("disables Add to Cart when the product is out of stock", () => {
    const outOfStockProduct = {
      ...testProduct,
      inStock: false
    };

    render(
      <ProductDisplay
        product={outOfStockProduct}
        onAddToCart={vi.fn()}
      />
    );

    expect(
      screen.getByRole("button", { name: "Add to Cart" })
    ).toBeDisabled();
  });

  it("renders nested children content", () => {
    render(
      <ProductDisplay product={testProduct}>
        <p>Free shipping available!</p>
      </ProductDisplay>
    );

    expect(
      screen.getByText("Free shipping available!")
    ).toBeInTheDocument();
  });
});
