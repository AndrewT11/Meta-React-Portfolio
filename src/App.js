import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Will render Header and Footer here. Navigation will render inside Header.
// In Navigation, we will render info sections
function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
