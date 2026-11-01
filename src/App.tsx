
import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div style={{ padding: "24px", maxWidth: "600px" }}>
      <h1>Lab 9.1 — Component Basics</h1>

      <h2>AlertBox Component</h2>

      {showAlert && (
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => setShowAlert(false)}
        >
          <p>You can now continue using the application.</p>
        </AlertBox>
      )}

      <AlertBox
        type="error"
        message="Something went wrong."
      />

      <AlertBox
        type="warning"
        message="Please review your information."
      />

      <AlertBox
        type="info"
        message="Your account settings are available."
      />
    </div>
  );
}

export default App;
