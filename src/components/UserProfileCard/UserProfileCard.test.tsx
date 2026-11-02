
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { UserProfileCard } from "./UserProfileCard";
import type { User } from "../../types";

const testUser: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex@example.com",
  role: "Software Developer"
};

describe("UserProfileCard Component", () => {
  it("displays the user's name, email, and role", () => {
    render(<UserProfileCard user={testUser} />);

    expect(screen.getByText("Alex Johnson")).toBeInTheDocument();
    expect(screen.getByText("Email: alex@example.com")).toBeInTheDocument();
    expect(screen.getByText("Role: Software Developer")).toBeInTheDocument();
  });

  it("hides email when showEmail is false", () => {
    render(<UserProfileCard user={testUser} showEmail={false} />);

    expect(screen.queryByText("Email: alex@example.com")).not.toBeInTheDocument();
  });

  it("hides role when showRole is false", () => {
    render(<UserProfileCard user={testUser} showRole={false} />);

    expect(screen.queryByText("Role: Software Developer")).not.toBeInTheDocument();
  });

  it("calls onEdit with the user's ID", () => {
    const handleEdit = vi.fn();

    render(<UserProfileCard user={testUser} onEdit={handleEdit} />);

    fireEvent.click(screen.getByRole("button", { name: "Edit Profile" }));

    expect(handleEdit).toHaveBeenCalledWith("1");
  });

  it("renders nested children content", () => {
    render(
      <UserProfileCard user={testUser}>
        <p>Development team member</p>
      </UserProfileCard>
    );

    expect(screen.getByText("Development team member")).toBeInTheDocument();
  });
});
