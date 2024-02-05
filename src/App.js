import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("useEffect called");

    // Cleanup function (optional)
    return () => {
      console.log("Cleanup function");
    };
  }, []); // Empty dependencies array means this effect runs only once

  console.log("Component rendering");

  return <button>Click Me</button>;
}

export default App;

