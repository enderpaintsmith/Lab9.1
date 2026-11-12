
import type { AlertBoxProps } from "../../types";

// Receives the props defined in the AlertBoxProps interface.
export function AlertBox({
  type,
  message,
  onClose,
  children
}: AlertBoxProps) {

  // Stores the colors used for each type of alert.
  const alertStyles = {
    // Success alert - green.
    success: {
      backgroundColor: "#d4edda",
      color: "#155724",
      borderColor: "#28a745"
    },

    // Error alert - red.
    error: {
      backgroundColor: "#f8d7da",
      color: "#721c24",
      borderColor: "#dc3545"
    },

    // Warning alert - yellow.
    warning: {
      backgroundColor: "#fff3cd",
      color: "#856404",
      borderColor: "#ffc107"
    },

    // Information alert - blue.
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

        // Uses the selected alert type to determine the colors.
        borderLeft: `4px solid ${alertStyles[type].borderColor}`,
        backgroundColor: alertStyles[type].backgroundColor,
        color: alertStyles[type].color,

        borderRadius: "4px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        {/* Displays the message passed into the component. */}
        <p>{message}</p>

        {/* Only displays the close button if onClose is provided. */}
        {onClose && (
          <button onClick={onClose} aria-label="Close alert">
            ×
          </button>
        )}
      </div>

      {/* Displays any additional content passed into AlertBox. */}
      {children}
    </div>
  );
}
