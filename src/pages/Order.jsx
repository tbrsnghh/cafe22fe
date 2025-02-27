import { useState } from "react";
import OrderItem from "./components/OrderItem";
import Header from "./components/Header";

const initialOrders = [
  {
    id: 1,
    date: "7/3/2023, 2:12:27 PM",
    totalItems: 1,
    items: [{ name: "Hot", quantity: 1, price: 2 }],
    totalPrice: 2,
    status: "done",
  },
  {
    id: 2,
    date: "7/2/2023, 8:39:18 PM",
    totalItems: 2,
    items: [{ name: "Sandwich", quantity: 2, price: 3 }],
    totalPrice: 6,
    status: "new",
  },
  {
    id: 3,
    date: "7/2/2023, 4:45:34 PM",
    totalItems: 1,
    items: [{ name: "Sandwich", quantity: 1, price: 3 }],
    totalPrice: 3,
    status: "processing",
  },
];

function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState("new");

  const handleUpdateStatus = (id, newStatus) => {
    if(newStatus === "done") {
      confirm("Bạn có chắc chắn muốn hoàn thành đơn hàng này không?") || (newStatus = "processing");
    }
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const filteredOrders = orders.filter((order) => order.status === filter);

  return (
    <div className="p-4 bg-pastel-cream min-h-screen">
      <Header />
      <h1 className="text-xl font-bold mb-4">Đơn hàng</h1>
      <div className="flex border-b">
        <button
          className={`flex-1 py-2 text-center border-r ${
            filter === "new" ? "bg-gray-300" : ""
          }`}
          onClick={() => setFilter("new")}
        >
          Mới
        </button>
        <button
          className={`flex-1 py-2 text-center border-r ${
            filter === "processing" ? "bg-gray-300" : ""
          }`}
          onClick={() => setFilter("processing")}
        >
          Đang xử lý
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            filter === "done" ? "bg-gray-300" : ""
          }`}
          onClick={() => setFilter("done")}
        >
          Đã xong
        </button>
      </div>
      <div className="mt-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderItem key={order.id} order={order} onUpdateStatus={handleUpdateStatus} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">Không có đơn hàng nào</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
