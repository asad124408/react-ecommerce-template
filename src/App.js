import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="ecommerce-app">
      {/* Homepage */}
      <Homepage />
      {/* Footer Section */}

      {/* Back to Top */}
      <div
        className="back-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <i class="uil uil-arrow-up"></i>
      </div>
    </div>
  );
}

export default App;
