import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroBento from "./components/HeroBento.jsx";
import ShopSection from "./components/ShopSection.jsx";
import MoreSections from "./components/MoreSections.jsx";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = () => setCartCount((c) => c + 1);

  return (
    <div className="min-h-screen">
      <Navbar cartCount={cartCount} />
      <main>
        <HeroBento />
        <ShopSection onAddToCart={handleAdd} />
        <MoreSections />
      </main>
    </div>
  );
}
