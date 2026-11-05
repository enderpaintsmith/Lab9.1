
import type { AlertBoxProps } from "../../types";


// Receives the props defined in AlertBoxProps.
export function AlertBox({
  type,
  message,
  onClose,
  children
}: AlertBoxProps) {
// Style the alert using the colors associated with alert-type
  const alertStyles = {
    //option 1
    success: {
      backgroundColor: "#d4edda",
      color: "#155724",
      borderColor: "#28a745"
    },
    // option 2
    error: {
      backgroundColor: "#f8d7da",
      color: "#721c24",
      borderColor: "#dc3545"
    },
    // option 3
    warning: {
      backgroundColor: "#fff3cd",
      color: "#856404",
      borderColor: "#ffc107"
    },
    // option 4
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
         {/* Displays the message passed from App.tsx. */}
        <p>{message}</p>
         {/* Only displays the close button if onClose exists. */}
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
