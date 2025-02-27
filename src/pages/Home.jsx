import { useState } from "react";
import MenuItem from "./components/MenuItem";
import CustomerInfo from "./components/CustomerInfo";
import CartSummary from "./components/CartSumary";
import Header from "./components/Header";


const menu = [
  { id: 1, name: "Cà phê đen", price: 20000, image: "cafe.jpg" },
  { id: 2, name: "Cà phê sữa", price: 25000, image: "cafe-sua.jpg" },
  { id: 3, name: "Trà đào", price: 30000, image: "tra-dao.jpg" },
];

function Home() {
  const [orders, setOrders] = useState({});
  const [customer, setCustomer] = useState({ name: "", phone: "" });

  const updateQuantity = (id, amount) => {
    setOrders((prev) => {
      const newQty = (prev[id] || 0) + amount;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  return (
    <div className="min-h-screen p-4 bg-pastel-cream">
      <Header/>
      <div className="mt-4 space-y-4">
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            quantity={orders[item.id] || 0}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
      <CustomerInfo customer={customer} setCustomer={setCustomer} />
      <CartSummary orders={orders} customer={customer} />
    </div>
  );
}

export default Home;
