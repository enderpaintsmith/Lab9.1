
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { AlertBox } from "./AlertBox";

describe("AlertBox Component", () => {
  it("displays the alert message", () => {
    render(
      <AlertBox type="success" message="Operation successful!" />
    );

    expect(
      screen.getByText("Operation successful!")
    ).toBeInTheDocument();
  });

  it("displays additional children content", () => {
    render(
      <AlertBox type="info" message="Information">
        <p>Additional details</p>
      </AlertBox>
    );

    expect(
      screen.getByText("Additional details")
    ).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const handleClose = vi.fn();

    render(
      <AlertBox
        type="warning"
        message="Warning!"
        onClose={handleClose}
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Close alert" })
    );

    expect(handleClose).toHaveBeenCalledOnce();
  });

  it("does not display a close button without onClose", () => {
    render(
      <AlertBox type="error" message="Something went wrong" />
    );

    expect(
      screen.queryByRole("button")
    ).not.toBeInTheDocument();
  });
});
