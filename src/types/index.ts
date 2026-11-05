
import type { ReactNode } from "react";

// An alert must be one of these four types.
export type AlertType = "success" | "error" | "warning" | "info";

// Defines props that AlertBox can receive
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: ReactNode;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: ReactNode;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  // This component can optionally receive additional content to display inside it.
  children?: ReactNode;
}
