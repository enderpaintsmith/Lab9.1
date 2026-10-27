
import type { AlertBoxProps } from "../../types";

export function AlertBox({
  type,
  message,
  onClose,
  children
}: AlertBoxProps) {

  const alertStyles = {
    success: {
      backgroundColor: "#d4edda",
      color: "#155724",
      borderColor: "#28a745"
    },
    error: {
      backgroundColor: "#f8d7da",
      color: "#721c24",
      borderColor: "#dc3545"
    },
    warning: {
      backgroundColor: "#fff3cd",
      color: "#856404",
      borderColor: "#ffc107"
    },
    info: {
      backgroundColor: "#d1ecf1",
      color: "#0c5460",
      borderColor: "#17a2b8"
    }
  };

  return (
    <div
      role="alert"
      style={{
        padding: "16px",
        marginBottom: "16px",
        borderLeft: `4px solid ${alertStyles[type].borderColor}`,
        backgroundColor: alertStyles[type].backgroundColor,
        color: alertStyles[type].color,
        borderRadius: "4px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{message}</p>

        {onClose && (
          <button onClick={onClose} aria-label="Close alert">
            ×
          </button>
        )}
      </div>

      {children}
    </div>
  );
}
