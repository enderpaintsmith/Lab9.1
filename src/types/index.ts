
import type { ReactNode } from "react";

// An alert must be one of these four types.
export type AlertType = "success" | "error" | "warning" | "info";

// Defines the props that AlertBox can receive.
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void; // Optional function to close the alert.
  children?: ReactNode; // Allows additional content inside the alert.
}

// Defines the information used to display a user profile.
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string; // Profile image is optional.
}

// Defines the props that UserProfileCard can receive.
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean; // Controls whether the email is displayed.
  showRole?: boolean; // Controls whether the role is displayed.
  onEdit?: (userId: string) => void; // Optional function for the Edit button.
  children?: ReactNode; // Allows additional content inside the profile card.
}

// Defines the information used to display a product.
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string; // Product image is optional.
  inStock: boolean;
}

// Defines the props that ProductDisplay can receive.
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean; // Controls whether the description is displayed.
  showStockStatus?: boolean; // Controls whether availability is displayed.
  onAddToCart?: (productId: string) => void; // Optional function for adding a product to the cart.
  children?: ReactNode; // Allows additional content inside the product display.
}
